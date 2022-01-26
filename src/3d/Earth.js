import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, useGLTF, useFBX, Stars } from "@react-three/drei";
import useMouse from "../util/useMouse";

function Earth() {
  const ref = useRef();
  const earthMap = useTexture(
    "https://raw.githubusercontent.com/MattLoftus/threejs-space-simulations/master/textures/earth_texture.jpg"
  );
  useFrame(() => (ref.current.rotation.y -= 0.0009));
  return (
    <mesh ref={ref}>
      <sphereGeometry attach="geometry" args={[5, 50, 50]} />
      <meshPhongMaterial
        map={earthMap}
        attach="material"
        color={0xaaaaaa}
        specular={0x333333}
        shininess={25}
      />
    </mesh>
  );
}

function Clouds() {
  const ref = useRef();
  const cloudsMap = useTexture(
    "https://raw.githubusercontent.com/MattLoftus/threejs-space-simulations/master/images/clouds_2.jpg"
  );
  useFrame(() => (ref.current.rotation.y -= 0.0001));
  return (
    <mesh ref={ref}>
      <sphereGeometry attach="geometry" args={[5.1, 50, 50]} />
      <meshPhongMaterial
        map={cloudsMap}
        attach="material"
        transparent={true}
        opacity={0.1}
      />
    </mesh>
  );
}

const Model = () => {
  // const { x, y } = useMouse();
  const r = 12.5;
  let theta = 5.35;
  let dTheta = (2 * Math.PI) / 10000;
  const ref = useRef();
  useFrame(() => {
    theta += dTheta;
    ref.current.position.x = r * Math.cos(theta);
    ref.current.position.z = r * Math.sin(theta);
    ref.current.rotation.y += -0.0006;
    // ref.current.rotation.x = x;
    // ref.current.rotation.y = y;
  });
  const gltf = useGLTF("/moon.gltf");
  const fbx = useFBX("/MrSaturn.fbx");
  return (
    <mesh ref={ref} scale={0.015} rotation={[0, 5.7006, 0]}>
      <primitive object={fbx} dispose={null} />
    </mesh>
  );
};

// function Moon() {
//   const r = 35;
//   let theta = 0;
//   let dTheta = (2 * Math.PI) / 1000;
//   const ref = useRef();
//   useFrame(() => {
//     theta += dTheta;
//     ref.current.position.x = r * Math.cos(theta);
//     ref.current.position.z = r * Math.sin(theta);

//   });
//   const moonMap = useTexture(
//     "https://raw.githubusercontent.com/MattLoftus/threejs-space-simulations/master/images/moon_texture.jpg"
//   );
//   // const gltf = useLoader(GLTFLoader, "moon/moon.gltf");
//   // return <primitive object={gltf.scene} />;
//   return (
//     <mesh ref={ref} position={[35, 0, 0]}>
//       <sphereGeometry attach="geometry" args={[1.5, 50, 50]} />
//       <meshPhongMaterial map={moonMap} attach="material" />
//     </mesh>
//   );
// }

const Three = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 70 }}>
      {/* <OrbitControls /> */}
      <ambientLight intensity={1} />
      <spotLight position={[-10, 15, 10]} angle={0.3} instensity={0.5} />
      <Stars radius={100} fade={true} />
      <Suspense fallback={null}>
        <Earth />
        <Clouds />
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Three;
