import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'
import { Model as IdleModel } from './Idle'
import { Model as RunningModel } from './Running'
import { Model as JumpModel } from './Jump'

function usePlayerControls() {
  const keys = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          keys.current.forward = true
          break
        case 'KeyS':
        case 'ArrowDown':
          keys.current.backward = true
          break
        case 'KeyA':
        case 'ArrowLeft':
          keys.current.left = true
          break
        case 'KeyD':
        case 'ArrowRight':
          keys.current.right = true
          break
        case 'Space':
          keys.current.jump = true
          break
      }
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          keys.current.forward = false
          break
        case 'KeyS':
        case 'ArrowDown':
          keys.current.backward = false
          break
        case 'KeyA':
        case 'ArrowLeft':
          keys.current.left = false
          break
        case 'KeyD':
        case 'ArrowRight':
          keys.current.right = false
          break
        case 'Space':
          keys.current.jump = false
          break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return keys
}

export default function Player() {
  const rigidBody = useRef<any>(null)
  const controls = usePlayerControls()
  const [animation, setAnimation] = useState<'idle' | 'run' | 'jump'>('idle')

  useFrame((state) => {
    const body = rigidBody.current
    if (!body) return

    const keys = controls.current
    const impulse = { x: 0, y: 0, z: 0 }
    const impulseStrength = 0.5

    if (keys.forward) impulse.z -= impulseStrength
    if (keys.backward) impulse.z += impulseStrength
    if (keys.left) impulse.x -= impulseStrength
    if (keys.right) impulse.x += impulseStrength

    body.applyImpulse(impulse, true)

    const velocity = body.linvel()
    if (keys.jump && Math.abs(velocity.y) < 0.05) {
      body.applyImpulse({ x: 0, y: 5, z: 0 }, true)
    }

    if (Math.abs(velocity.y) > 0.1) {
      setAnimation('jump')
    } else if (impulse.x !== 0 || impulse.z !== 0) {
      setAnimation('run')
    } else {
      setAnimation('idle')
    }

    const pos = body.translation()
    const cameraOffset = new THREE.Vector3(0, 5, 10)
    const target = new THREE.Vector3(pos.x, pos.y + 2, pos.z)
    const cameraPos = target.clone().add(cameraOffset)
    state.camera.position.lerp(cameraPos, 0.1)
    state.camera.lookAt(target)
  })

  const Model = animation === 'run' ? RunningModel : animation === 'jump' ? JumpModel : IdleModel

  return (
    <RigidBody ref={rigidBody} colliders="capsule" position={[0, 1, 0]}>
      <Model />
    </RigidBody>
  )
}
