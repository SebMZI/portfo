import React from "react";
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
        <Canvas
          className="w-screen h-screen"
          style={{ background: "white" }}
          camera={{ position: [0, 3, 4.5] }}
          shadows
        >
          <OrbitControls
            minPolarAngle={Math.PI / 10}
            maxPolarAngle={Math.PI - Math.PI / 1.8}
            enableZoom={false}
          />

          {/* Lumière directionnelle venant d'en haut */}
          {/* Murs de la pièce (cube) */}
          <directionalLight position={[0, 10, 0]} intensity={0.5} castShadow />
          <ambientLight color={"white"} intensity={0.5} />
          <pointLight
            position={[0, 2, 2]} // Ajustez la position selon la direction souhaitée
            intensity={5} // Ajustez l'intensité selon vos préférences
            color={"#ffffff"}
          />

          {/* Ajouter la spotLight pour le halo de lumière */}

          <mesh receiveShadow position={[0, 5, 0]} castShadow>
            <boxGeometry args={[15, 10, 15]} />
            <meshStandardMaterial
              color={"white"}
              roughness={0.5}
              side={THREE.BackSide}
            />
            <group position={[0, -3.8, 0]}>
              <Servers position={[0.775, 0, 0]} scale={1.2} />
              <Servers position={[-0.775, 0, 0]} scale={1.2} />
              <Servers scale={1.2} />
              <Console position={[0.825, 0.5, 0.5]} />
            </group>
          </mesh>
        </Canvas>
      </Suspense>
    </>
  );
};

export default Scene;
