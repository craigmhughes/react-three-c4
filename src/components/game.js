import React, { useRef, useState } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useFrame, useThree, useRender } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';

const Camera = () => {
  const three = useThree();
  const camera = three.camera;
  camera.position.z = 2.5;
  three.gl.setSize(window.innerWidth, window.innerHeight);

  return null;
};

extend({OrbitControls});

const Controls = () =>{
  const orbitRef = useRef();
  const {camera, gl} = useThree();

  useRender(()=>{
    orbitRef.current.update();
  });

  return (
  <orbitControls
    maxPolarAngle={Math.PI / 2}
    minPolarAngle={Math.PI / 2}
    args={[camera, gl.domElement]} 
    ref={orbitRef}/>);
};

const Thing = ({active, setActive, isMoving, setIsMoving})=>{
  const ref = useRef();
  const props = useSpring({
    rotationY: active ? 3.15 : 0,
  });

  useFrame(()=>{
    if((props.rotationY.value == 3.15 && isMoving) || (props.rotationY.value == 0 && isMoving)){
      setIsMoving(false);
    }
  });

  return (
    <a.mesh
      ref={ref}
      rotation-y={props.rotationY}>
      <boxGeometry attach="geometry" args={[1, 1, 0.25]} />
      <a.meshPhysicalMaterial attach="material" color="blue"/>
    </a.mesh>
  )
}

const PlaceButton = ({setActive, active, setIsMoving, isMoving})=>{

  function handleClick(e){
    e.preventDefault();

    if(isMoving == false){
      setActive(!active);
      setIsMoving(true);
    }
  }

  return(
    <button id="place-button" style={{height: "100px", width: "100px"}} onClick={(e)=>{handleClick(e)}}>Click</button>
  )
}

function GameCanvas(){
  const [active, setActive] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  return(
      <div>
        <Canvas shadowMap>
          <Camera />
          {/* <Controls/> */}
          <ambientLight/>
          <spotLight position={[0,5,10]}/>
          <Thing setActive={setActive} active={active} isMoving={isMoving} setIsMoving={setIsMoving}/>
        </Canvas>
        <PlaceButton setActive={setActive} active={active} isMoving={isMoving} setIsMoving={setIsMoving}/>
      </div>
  )
}

export default GameCanvas;