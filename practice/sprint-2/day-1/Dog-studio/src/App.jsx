import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Dog from "./components/Dog";
import { cover } from "three/src/extras/TextureUtils.js";

function App() {
  return (
    <>
      <main>
        <Canvas
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            backgroundImage: "url(/background-l.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Dog />
        </Canvas>
        <section id="section-1"></section>
        <section id="section-2"></section>
        <section id="section-3"></section>
      </main>
    </>
  );
}

export default App;
