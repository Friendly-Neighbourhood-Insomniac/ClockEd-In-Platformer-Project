import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import Player from './components/Player'
import { Model as MapModel } from './components/Map'
import { RigidBody } from '@react-three/rapier'

export default function App() {
  return (
    <Canvas shadows camera={{ position: [0, 5, 10], fov: 45 }}>
      <Suspense fallback={null}>
        <Physics gravity={[0, -9.81, 0]}>
          <RigidBody type="fixed" colliders="trimesh">
            <MapModel />
          </RigidBody>
          <Player />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
