import { OrbitControls, Float, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function RotatingBox() {
  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.y += delta;
  });

  return (
    <mesh ref={ref} position={[0, 1, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="hotpink" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      {/* Rotating box now inside Canvas */}
      <RotatingBox />

      {/* Float + Text also inside Canvas */}
      <Float>
        <Text fontSize={1}>Hello 3D</Text>
      </Float>

      <OrbitControls />
    </Canvas>
  );
}

export default App;
