import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import consoleScene from "../models/carbon_server_console.glb";

export function Console(props) {
  const { nodes, materials } = useGLTF(consoleScene);
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.903, -1.662, 0.903]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.9}
      >
        <group rotation={[-Math.PI, 0, 0]}>
          <pointLight
            position={[0, 0, 1]}
            color={"blue"}
            intensity={5}
            distance={5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Layer_1_carbon_server_console_mtl0_0.geometry}
            material={materials.carbon_server_console_mtl0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Layer_2_carbon_server_console_mtl1_0.geometry}
            material={materials.carbon_server_console_mtl1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Layer_3_carbon_server_console_mtl2_0.geometry}
            material={materials.carbon_server_console_mtl2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Layer_4_carbon_server_console_mtl3_0.geometry}
            material={materials.carbon_server_console_mtl3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Layer_5_carbon_server_console_mtl4_0.geometry}
            material={materials.carbon_server_console_mtl4}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(consoleScene);
