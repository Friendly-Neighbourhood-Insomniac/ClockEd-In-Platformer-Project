/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ./public/Models/Maps/Map-small.glb -o src/components/Map.jsx -t 
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    texture_pbr_v128004: THREE.Mesh
    texture_pbr_v128004_1: THREE.Mesh
    texture_pbr_v128004_2: THREE.Mesh
    texture_pbr_v128004_3: THREE.Mesh
    texture_pbr_v128004_4: THREE.Mesh
    texture_pbr_v128004_5: THREE.Mesh
    texture_pbr_v128004_6: THREE.Mesh
    texture_pbr_v128004_7: THREE.Mesh
    texture_pbr_v128004_8: THREE.Mesh
    texture_pbr_v128004_9: THREE.Mesh
    texture_pbr_v128004_10: THREE.Mesh
    texture_pbr_v128004_11: THREE.Mesh
    texture_pbr_v128004_12: THREE.Mesh
    texture_pbr_v128004_13: THREE.Mesh
    texture_pbr_v128004_14: THREE.Mesh
    texture_pbr_v128004_15: THREE.Mesh
    texture_pbr_v128004_16: THREE.Mesh
    texture_pbr_v128004_17: THREE.Mesh
    Door: THREE.Mesh
  }
  materials: {
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.019']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.018']: THREE.MeshStandardMaterial
    ['Material.023']: THREE.MeshStandardMaterial
    ['Material.022']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.026']: THREE.MeshStandardMaterial
    ['Material.024']: THREE.MeshStandardMaterial
    ['Material.025']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.027']: THREE.MeshStandardMaterial
    ['Material.028']: THREE.MeshStandardMaterial
    ['Material.029']: THREE.MeshStandardMaterial
    ['Material.030']: THREE.MeshStandardMaterial
    ['Material.013']: THREE.MeshStandardMaterial
    ['Material.016']: THREE.MeshStandardMaterial
    ['Material.015']: THREE.MeshStandardMaterial
    ['Material.031']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Map-small.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Door.geometry} material={materials['Material.031']} position={[-13.786, -21.281, 7.671]} rotation={[-Math.PI / 2, -0.005, Math.PI]} scale={5} />
      <mesh geometry={nodes.texture_pbr_v128004.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.texture_pbr_v128004_1.geometry} material={materials['Material.019']} />
      <mesh geometry={nodes.texture_pbr_v128004_2.geometry} material={materials['Material.008']} />
      <mesh geometry={nodes.texture_pbr_v128004_3.geometry} material={materials['Material.018']} />
      <mesh geometry={nodes.texture_pbr_v128004_4.geometry} material={materials['Material.023']} />
      <mesh geometry={nodes.texture_pbr_v128004_5.geometry} material={materials['Material.022']} />
      <mesh geometry={nodes.texture_pbr_v128004_6.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.texture_pbr_v128004_7.geometry} material={materials['Material.026']} />
      <mesh geometry={nodes.texture_pbr_v128004_8.geometry} material={materials['Material.024']} />
      <mesh geometry={nodes.texture_pbr_v128004_9.geometry} material={materials['Material.025']} />
      <mesh geometry={nodes.texture_pbr_v128004_10.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.texture_pbr_v128004_11.geometry} material={materials['Material.027']} />
      <mesh geometry={nodes.texture_pbr_v128004_12.geometry} material={materials['Material.028']} />
      <mesh geometry={nodes.texture_pbr_v128004_13.geometry} material={materials['Material.029']} />
      <mesh geometry={nodes.texture_pbr_v128004_14.geometry} material={materials['Material.030']} />
      <mesh geometry={nodes.texture_pbr_v128004_15.geometry} material={materials['Material.013']} />
      <mesh geometry={nodes.texture_pbr_v128004_16.geometry} material={materials['Material.016']} />
      <mesh geometry={nodes.texture_pbr_v128004_17.geometry} material={materials['Material.015']} />
    </group>
  )
}

useGLTF.preload('/Map-small.glb')
