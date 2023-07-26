import React, { useMemo } from 'react'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

const material = new THREE.MeshStandardMaterial()
const geometries: { geometry: THREE.BufferGeometry }[] = [
  { geometry: new THREE.TetrahedronBufferGeometry(2) },
  { geometry: new THREE.CylinderBufferGeometry(0.8, 0.8, 2, 32) },
  { geometry: new THREE.ConeGeometry(1.1, 1.7, 32) },
  { geometry: new THREE.SphereBufferGeometry(1.5, 32, 32) },
  { geometry: new THREE.IcosahedronBufferGeometry(2) },
  { geometry: new THREE.TorusBufferGeometry(1.1, 0.35, 16, 32) },
  { geometry: new THREE.OctahedronGeometry(2) },
  { geometry: new THREE.SphereBufferGeometry(1.5, 32, 32) },
  { geometry: new THREE.BoxBufferGeometry(2.5, 2.5, 2.5) },
]

const RandomGeometries: React.FC = () => {
  const n = 40
  const randProps = useMemo(
    () => Array.from({ length: n }, () => geometries[Math.floor(Math.random() * geometries.length)]),
    [],
  )

  return (
    <>
      {randProps.map((prop, index) => (
        <Float key={index}>
          <mesh
            scale={THREE.MathUtils.randFloat(0.25, 0.5)}
            position={[
              THREE.MathUtils.randFloat(-8, 8),
              THREE.MathUtils.randFloat(-8, 8),
              THREE.MathUtils.randFloat(-8, 8),
            ]}
            geometry={prop.geometry}
            material={material}
          />
        </Float>
      ))}
    </>
  )
}

export default RandomGeometries
