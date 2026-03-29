import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sphere } from '@react-three/drei';

const FloatingShapes = () => {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
            groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Generate some spheres representing the theme colors */}
            {Array.from({ length: 15 }).map((_, i) => (
                <Float key={i} speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
                    <Sphere args={[0.2, 16, 16]} position={[
                        (Math.random() - 0.5) * 15,
                        (Math.random() - 0.5) * 15,
                        (Math.random() - 0.5) * 10 - 5
                    ]}>
                        <meshStandardMaterial color={i % 2 === 0 ? '#CA8CFD' : '#F0E54B'} roughness={0.6} metalness={0.4} />
                    </Sphere>
                </Float>
            ))}
        </group>
    );
};

const HeroBackground = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
                <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <FloatingShapes />
            </Canvas>
        </div>
    );
};

export default HeroBackground;
