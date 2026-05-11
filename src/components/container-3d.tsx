"use client";

// @ts-nocheck
import { useRef, useMemo, Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Environment,
  MeshReflectorMaterial,
  Text,
  RoundedBox,
  Float,
  Preload,
  SpotLight,
  useDepthBuffer,
} from "@react-three/drei";

/* ─── Helpers ──────────────────────────────────────────────── */
function lerp(a, b, t) {
  return a + (b - a) * t;
}

/* ─── Corrugated panel (grooves via displacement-like geometry) ─ */
function CorrugatedPanel({ width, height, grooves = 28, ...props }) {
  const geo = useMemo(() => {
    const g = new THREE.PlaneGeometry(width, height, grooves * 4, 2);
    const pos = g.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const wave = Math.sin((x / width) * Math.PI * 2 * grooves) * 0.018;
      pos.setZ(i, wave);
    }
    g.computeVertexNormals();
    return g;
  }, [width, height, grooves]);

  return (
    <mesh geometry={geo} {...props}>
      <meshStandardMaterial
        color="#1a1a1f"
        metalness={0.85}
        roughness={0.38}
        envMapIntensity={1.2}
      />
    </mesh>
  );
}

/* ─── Single Hinge / Locking Bar assembly ──────────────────── */
function LockingBar({ x, y0, y1, side = 1 }) {
  const barH = Math.abs(y1 - y0);
  const midY = (y0 + y1) / 2;
  return (
    <group position={[x, midY, side * 0.002]}>
      {/* vertical rod */}
      <mesh>
        <cylinderGeometry args={[0.012, 0.012, barH, 8]} />
        <meshStandardMaterial color="#9aa0ab" metalness={0.95} roughness={0.15} />
      </mesh>
      {/* top bracket */}
      <mesh position={[0, barH / 2 - 0.04, 0.03]}>
        <boxGeometry args={[0.07, 0.045, 0.045]} />
        <meshStandardMaterial color="#2255cc" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* bottom bracket */}
      <mesh position={[0, -(barH / 2 - 0.04), 0.03]}>
        <boxGeometry args={[0.07, 0.045, 0.045]} />
        <meshStandardMaterial color="#2255cc" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* mid cam lever */}
      <mesh position={[0.035, 0, 0.038]}>
        <boxGeometry args={[0.055, 0.1, 0.03]} />
        <meshStandardMaterial color="#8899cc" metalness={0.8} roughness={0.25} />
      </mesh>
    </group>
  );
}

/* ─── Corner casting (ISO standard blue block) ─────────────── */
function CornerCast({ position }) {
  return (
    <group position={position}>
      <RoundedBox args={[0.1, 0.08, 0.1]} radius={0.012} smoothness={4}>
        <meshStandardMaterial color="#1144bb" metalness={0.75} roughness={0.35} envMapIntensity={1.5} />
      </RoundedBox>
      {/* oval slot */}
      <mesh rotation={[0, 0, 0]} position={[0, 0, 0.052]}>
        <cylinderGeometry args={[0.025, 0.025, 0.015, 16]} />
        <meshStandardMaterial color="#0a0a12" metalness={0.4} roughness={0.6} />
      </mesh>
    </group>
  );
}

/* ─── Door panel (rear face) ────────────────────────────────── */
function DoorPanel({ side = 1 }) {
  const w = 0.49;
  return (
    <group position={[side * 0.255, 0, -0.5]}>
      {/* door surface */}
      <CorrugatedPanel width={w} height={1.14} grooves={12} rotation={[0, Math.PI / 2, 0]} />
      {/* door frame outline */}
      {[[-w / 2 + 0.01, 0], [w / 2 - 0.01, 0]].map(([dx], i) => (
        <mesh key={i} position={[0, 0, -0.001]}>
          <boxGeometry args={[0.015, 1.14, 0.015]} />
          <meshStandardMaterial color="#2a2a35" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}
      {/* Locking bars */}
      <LockingBar x={side * 0.16} y0={-0.45} y1={0.45} side={1} />
    </group>
  );
}

/* ─── Main Container Mesh ───────────────────────────────────── */
function ShippingContainer() {
  const groupRef = useRef();
  const floatOffset = useRef(0);

  // Dimensions: 12.2m × 2.44m × 2.59m → scaled to ~2 × 0.4 × 0.5 units
  const W = 2.0; // length
  const H = 0.46; // height
  const D = 0.52; // depth

  useFrame(({ clock }) => {
    floatOffset.current = Math.sin(clock.elapsedTime * 0.6) * 0.04;
    if (groupRef.current) {
      groupRef.current.position.y = floatOffset.current;
    }
  });

  // Metal material shared
  const metalMat = (
    <meshStandardMaterial color="#18181e" metalness={0.9} roughness={0.3} envMapIntensity={1.4} />
  );

  return (
    <group ref={groupRef}>
      {/* ── BODY panels ── */}
      {/* Top */}
      <mesh position={[0, H / 2, 0]}>
        <boxGeometry args={[W, 0.016, D]} />
        {metalMat}
      </mesh>
      {/* Bottom */}
      <mesh position={[0, -H / 2, 0]}>
        <boxGeometry args={[W, 0.016, D]} />
        {metalMat}
      </mesh>
      {/* Front face corrugated */}
      <CorrugatedPanel width={W} height={H} grooves={32} position={[0, 0, D / 2]} />
      {/* Rear doors */}
      <DoorPanel side={1} />
      <DoorPanel side={-1} />
      {/* Left side corrugated */}
      <CorrugatedPanel
        width={D}
        height={H}
        grooves={14}
        position={[-W / 2, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      {/* Right side corrugated */}
      <CorrugatedPanel
        width={D}
        height={H}
        grooves={14}
        position={[W / 2, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />

      {/* ── STRUCTURAL RAILS ── */}
      {/* Top long rails */}
      {[-W / 2 + 0.025, W / 2 - 0.025].map((x, i) => (
        <mesh key={`tr${i}`} position={[0, H / 2 - 0.008, x > 0 ? D / 2 - 0.025 : -(D / 2 - 0.025)]}>
          <boxGeometry args={[W, 0.02, 0.025]} />
          {metalMat}
        </mesh>
      ))}
      {/* Bottom long rails */}
      <mesh position={[0, -H / 2 + 0.008, D / 2 - 0.025]}>
        <boxGeometry args={[W, 0.02, 0.025]} />
        {metalMat}
      </mesh>
      <mesh position={[0, -H / 2 + 0.008, -(D / 2 - 0.025)]}>
        <boxGeometry args={[W, 0.02, 0.025]} />
        {metalMat}
      </mesh>
      {/* Vertical corner posts */}
      {[
        [-W / 2 + 0.02, D / 2 - 0.02],
        [W / 2 - 0.02, D / 2 - 0.02],
        [-W / 2 + 0.02, -(D / 2 - 0.02)],
        [W / 2 - 0.02, -(D / 2 - 0.02)],
      ].map(([x, z], i) => (
        <mesh key={`vp${i}`} position={[x, 0, z]}>
          <boxGeometry args={[0.04, H, 0.04]} />
          {metalMat}
        </mesh>
      ))}

      {/* ── CORNER CASTINGS (8) ── */}
      {[
        [-W / 2, H / 2, D / 2],
        [W / 2, H / 2, D / 2],
        [-W / 2, -H / 2, D / 2],
        [W / 2, -H / 2, D / 2],
        [-W / 2, H / 2, -D / 2],
        [W / 2, H / 2, -D / 2],
        [-W / 2, -H / 2, -D / 2],
        [W / 2, -H / 2, -D / 2],
      ].map((pos, i) => (
        <CornerCast key={`cc${i}`} position={pos} />
      ))}

      {/* ── INTERMEDIATE VERTICAL RIBS on sides ── */}
      {[-0.5, 0, 0.5].map((x, i) => (
        <mesh key={`rib${i}`} position={[x, 0, D / 2 + 0.003]}>
          <boxGeometry args={[0.03, H + 0.01, 0.018]} />
          <meshStandardMaterial color="#222230" metalness={0.88} roughness={0.25} />
        </mesh>
      ))}

      {/* ── BRANDING TEXT ── */}
      <group position={[0.35, 0.05, D / 2 + 0.022]}>
        <Text
          fontSize={0.13}
          letterSpacing={0.04}
          anchorX="center"
          anchorY="middle"
          position={[0, 0.06, 0]}
        >
          ALPHA
          <meshStandardMaterial color="#e8eaf0" metalness={0.6} roughness={0.2} envMapIntensity={2} />
        </Text>
        <Text
          fontSize={0.078}
          letterSpacing={0.12}
          anchorX="center"
          anchorY="middle"
          position={[0, -0.065, 0]}
        >
          LOGISTICS
          <meshStandardMaterial color="#c8d0e0" metalness={0.5} roughness={0.25} envMapIntensity={1.8} />
        </Text>
      </group>

      {/* ── FORKLIFT POCKETS (bottom) ── */}
      {[-0.45, 0.45].map((x, i) => (
        <mesh key={`fp${i}`} position={[x, -H / 2 - 0.012, 0]}>
          <boxGeometry args={[0.22, 0.04, D * 0.8]} />
          <meshStandardMaterial color="#111116" metalness={0.95} roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

/* ─── Cinematic Lights ──────────────────────────────────────── */
function Lights() {
  return (
    <>
      <ambientLight intensity={0.18} color="#101020" />
      <directionalLight position={[5, 8, 3]} intensity={1.6} color="#b8c8ff" castShadow
        shadow-mapSize={[2048, 2048]} shadow-bias={-0.0005} />
      <directionalLight position={[-4, 3, -2]} intensity={0.5} color="#3355ff" />
      <SpotLight
        position={[3, 5, 3]}
        angle={0.35}
        penumbra={0.6}
        intensity={2.5}
        color="#ffffff"
        castShadow
        distance={12}
        attenuation={5}
        anglePower={4}
      />
      <SpotLight
        position={[-3, 4, -2]}
        angle={0.4}
        penumbra={0.8}
        intensity={1.2}
        color="#2244ff"
        distance={10}
        attenuation={5}
        anglePower={5}
      />
      <pointLight position={[0, 2, 2]} intensity={0.4} color="#4466ff" />
    </>
  );
}

/* ─── Scene ─────────────────────────────────────────────────── */
function Scene() {
  return (
    <>
      <Lights />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <Float floatIntensity={0} rotationIntensity={0}>
          <ShippingContainer />
        </Float>
        <ContactShadows
          position={[0, -0.48, 0]}
          opacity={0.85}
          scale={6}
          blur={2.5}
          far={1.5}
          color="#000010"
        />
        {/* Ground reflector removed to avoid breaking the website's background styling */}
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 1.9}
        minDistance={1.8}
        maxDistance={5}
        autoRotate
        autoRotateSpeed={0.6}
        makeDefault
      />
      <Preload all />
    </>
  );
}

/* ─── Root Export ────────────────────────────────────────────── */
export default function AlphaLogistics3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-30" style={{ cursor: "grab" }}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [2.2, 0.7, 2.2], fov: 38, near: 0.1, far: 50 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
