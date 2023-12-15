import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import serverScene from "../models/server_rack.glb";

export function Servers(props) {
  const { nodes, materials } = useGLTF(serverScene);
  return (
    <group {...props} dispose={null} rotation-y={3.15}>
      <spotLight
        position={[5, 4, 1]}
        angle={0.4}
        penumbra={0.5}
        intensity={80}
        color={"#ffffff"}
        castShadow
      />
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
