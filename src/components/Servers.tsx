import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import serverScene from "../models/server_rack.glb";

export function Servers(props) {
  const { nodes, materials } = useGLTF(serverScene);
  return (
    <group {...props} dispose={null} rotation-y={3.15}>
      <ambientLight intensity={0.5} color="white" />

      {/* Lumière directionnelle d'en haut */}
      <directionalLight color="white" position={[0, 10, 0]} intensity={1} />
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.ServerMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(serverScene);
