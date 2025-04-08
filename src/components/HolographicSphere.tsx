import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function HolographicSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Sphere ref={meshRef} args={[2, 32, 32]}>
        <meshPhongMaterial
          color="#00fff2"
          wireframe
          transparent
          opacity={0.3}
          emissive="#00fff2"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </>
  );
}