import React from 'react'
import { Html } from '@react-three/drei'

interface WebFrameProps {
  position: [number, number, number]
}

export const WebFrame: React.FC<WebFrameProps> = ({ position }) => {
  return (
    <group>
      <Html
        castShadow
        receiveShadow
        occlude="blending"
        transform
        center
        style={{
          background: 'white',
          border: '5px solid #333',
          borderRadius: '10px',
          overflow: 'hidden'
        }}>
        <iframe
          title="embed"
          width={75}
          height={50}
          src="https://google.com"
          sandbox="allow-scripts allow-popups allow-forms"
          frameBorder={0.1}
        />
      </Html>
    </group>
  )
}

export default WebFrame
