import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import React from 'react'
import { Dunes } from './Dunes';
import { Castle } from './Castle';

export const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <Canvas camera={{position: [0, 0, -150], fov:45}}>
        <color attach="background" args={['#3B3B3B']} />
        <ambientLight intensity={0.2} color="#3d2010" />
        <directionalLight position = {[5, 5, 5]} intensity={2} />

        <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            enableRotate={true}

            maxDistance={20}
            minDistance={5}

            // orbit vertical
            minPolarAngle={- Math.PI * 0.2} 
            maxPolarAngle={Math.PI * 0.5}

            // orbit horizontal
            minAzimuthAngle={Math.PI * 0.5}
            maxAzimuthAngle={Math.PI * 1.5}
        />

        <group
            scale={isMobile ? 0.7 : 1}
            position={isMobile ? [0, -2.5, 0] : [0, -3.5, 5]}
            rotation={isMobile ? [0, 1.22, 0] : [0, 1.3, 0]}
        >
            <Castle scale={10}></Castle>
           
        </group>

        

        
        
    </Canvas>
  )
}
