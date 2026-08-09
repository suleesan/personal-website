import React, { useRef, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const PHOTO_W = 2.1;
const PHOTO_H = 2.8;
const BORDER_W = 2.4;
const BORDER_H = 3.25;
const FLING_DURATION = 0.6;

// deterministic pseudo-random so each card's tilt is stable across renders
function seeded(seed) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

function EmptyShape({ color = "#888" }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.2;
    ref.current.rotation.y += delta * 0.3;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.4, 0]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
}

function Polaroid({
  texture,
  index,
  total,
  isTop,
  hoverRef,
  flingProgress,
}) {
  const groupRef = useRef();

  const baseRotation = useMemo(
    () => (seeded(index + 1) - 0.5) * 0.4,
    [index]
  );
  const offX = useMemo(() => (seeded(index + 7) - 0.5) * 0.25, [index]);
  const offY = useMemo(() => (seeded(index + 13) - 0.5) * 0.25, [index]);

  const baseZ = (total - 1 - index) * -0.04;

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    const drift = Math.sin(t * 0.7 + index * 0.9) * 0.025;

    let rx = 0;
    let ry = 0;
    let rz = baseRotation + drift;
    let px = offX;
    let py = offY;
    let pz = baseZ;

    if (isTop) {
      const h = hoverRef?.current || { x: 0, y: 0 };
      rx += h.y * 0.25;
      ry += h.x * 0.25;
      if (flingProgress > 0) {
        const p = flingProgress;
        const e = 1 - Math.pow(1 - p, 3);
        px += e * 7;
        py += e * 1.5;
        rz += e * 1.2;
        pz += e * 0.6;
      }
    }

    groupRef.current.position.set(px, py, pz);
    groupRef.current.rotation.set(rx, ry, rz);
  });

  return (
    <group ref={groupRef}>
      {/* polaroid white border (slightly behind photo) */}
      <mesh position={[0, -0.1, -0.001]}>
        <planeGeometry args={[BORDER_W, BORDER_H]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      {/* faint paper shadow behind border */}
      <mesh position={[0.04, -0.14, -0.003]}>
        <planeGeometry args={[BORDER_W, BORDER_H]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.15} />
      </mesh>
      {/* photo */}
      <mesh position={[0, 0.1, 0]}>
        <planeGeometry args={[PHOTO_W, PHOTO_H]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  );
}

function PhotoStack({ urls }) {
  const textures = useTexture(urls);
  const textureArray = Array.isArray(textures) ? textures : [textures];

  // ensure correct color space on each texture
  textureArray.forEach((tex) => {
    if (tex && tex.colorSpace !== undefined) tex.colorSpace = THREE.SRGBColorSpace;
  });

  const [topIndex, setTopIndex] = useState(0);
  const [flingT, setFlingT] = useState(0);
  const hoverRef = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    if (flingT > 0) {
      const next = flingT + delta / FLING_DURATION;
      if (next >= 1) {
        setFlingT(0);
        setTopIndex((i) => (i + 1) % textureArray.length);
      } else {
        setFlingT(next);
      }
    }
  });

  const handlePointerMove = (e) => {
    // R3F event has uv (0..1) within the mesh; map to -1..1
    if (e.uv) {
      hoverRef.current.x = (e.uv.x - 0.5) * 2;
      hoverRef.current.y = (e.uv.y - 0.5) * 2;
    }
  };

  const handlePointerOut = () => {
    hoverRef.current.x = 0;
    hoverRef.current.y = 0;
  };

  const handleClick = () => {
    if (flingT === 0 && textureArray.length > 1) {
      setFlingT(0.0001);
    }
  };

  // build display order: top card first (rendered last for z-sort), then the
  // others fanned beneath. We render bottom-to-top so the top card is last.
  const order = textureArray.map((_, i) => (topIndex + i) % textureArray.length);

  return (
    <group
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      {order
        .slice()
        .reverse()
        .map((texIdx, displayIdx) => {
          // displayIdx goes 0..N-1 where N-1 is the top (because we reversed)
          const isTop = displayIdx === order.length - 1;
          return (
            <Polaroid
              key={texIdx}
              texture={textureArray[texIdx]}
              index={texIdx}
              total={order.length}
              isTop={isTop}
              hoverRef={hoverRef}
              flingProgress={isTop ? flingT : 0}
            />
          );
        })}
    </group>
  );
}

const PolaroidStack = ({ photos }) => {
  const cleanPhotos = Array.isArray(photos)
    ? photos.filter((p) => typeof p === "string" && p.length > 0)
    : [];
  const hasPhotos = cleanPhotos.length > 0;

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 4, 5]} intensity={0.4} />
        {hasPhotos ? (
          <Suspense fallback={<EmptyShape />}>
            <PhotoStack urls={cleanPhotos} />
          </Suspense>
        ) : (
          <EmptyShape />
        )}
      </Canvas>
    </div>
  );
};

export default PolaroidStack;
