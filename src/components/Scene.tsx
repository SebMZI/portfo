import { Canvas } from "@react-three/fiber";
import { Servers } from "./Servers";
import { Console } from "./Console";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import LoadingSpin from "./LoadingSpin";
import * as THREE from "three";

const Scene = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpin />}>
        <Canvas className="w-screen h-screen" style={{ background: "#AFA9B1" }}>
          <OrbitControls
            minPolarAngle={Math.PI / 10}
            maxPolarAngle={Math.PI - Math.PI / 2}
          />

          {/* Lumière directionnelle venant d'en haut */}
          <directionalLight position={[0, 10, 0]} intensity={2} castShadow />

          {/* Lumière ponctuelle pour l'effet de halo */}
          <pointLight position={[0, 10, 0]} intensity={1} />
          {/* Murs de la pièce (cube) */}
          <mesh receiveShadow position={[0, 0, 0]}>
            <boxGeometry args={[10, 10, 10]} />
            <meshStandardMaterial color={"white"} roughness={0.5} />
          </mesh>

          {/* Positionnez vos serveurs et votre console à l'intérieur du cube */}
          <group>
            <Servers position={[0.775, 0, 0]} scale={1.2} />
            <Servers position={[-0.775, 0, 0]} scale={1.2} />
            <Servers scale={1.2} />
            <Console position={[0.8, 0.5, 0.5]} />
          </group>
        </Canvas>
      </Suspense>
    </>
  );
};

export default Scene;
