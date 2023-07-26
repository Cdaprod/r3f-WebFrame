import * as React from 'react'
import { useMemo } from 'react'
import * as THREE from 'three'

interface Repo3DTextProps {
  repo: {
    name: string
    description?: string
    object?: {
      text: string
    }
  }
  position: [number, number, number]
}

function createRepoTexture(repo: Repo3DTextProps['repo']): THREE.Texture {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const context = canvas.getContext('2d')

  if (context) {
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = 'black'
    context.font = '20px Arial'
    context.fillText(repo.name, 10, 30)
    context.fillText(repo.description || 'No description', 10, 60)
    context.fillText(repo.object ? repo.object.text.slice(0, 100) + '...' : 'No README', 10, 90)
  }

  const texture = new THREE.CanvasTexture(canvas)
  return texture
}

const Repo3DText: React.FC<Repo3DTextProps> = ({ repo, position }) => {
  const texture = useMemo(() => createRepoTexture(repo), [repo])

  return (
    <mesh position={position}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

export default Repo3DText
