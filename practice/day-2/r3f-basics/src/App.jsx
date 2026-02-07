import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function RotatingSphere() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta;
  });

  return (
    <mesh ref={meshRef} position={[-1.5, 1, 0]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <RotatingSphere />
      <OrbitControls />
    </Canvas>
  );
}
