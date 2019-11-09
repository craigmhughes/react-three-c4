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

const Board = ({active, setActive, isMoving, setIsMoving})=>{
  const ref = useRef();
  const props = useSpring({
    rotationY: active ? 3.15 : 0,
  });

  // Width, Height, Depth
  let dimensions =  [1.5, 1.5, 0.2]
  let colNum = 7;
  let colElements = [];
  
  // Set active column, start at -1 and none selected.
  const [activeCol, setActiveCol] = useState(-1);

  for(let i = 0; i < colNum; i++){
    colElements.push(<BoardColumn key={i} id={i} dimensions={dimensions} cols={colNum} activeCol={activeCol} setActiveCol={setActiveCol}/>)
  }

  useFrame(()=>{
    if((props.rotationY.value == 3.15 && isMoving) || (props.rotationY.value == 0 && isMoving)){
      setIsMoving(false);
    }
  });

  return (
    <a.mesh
      ref={ref}
      rotation-y={props.rotationY}
      position-x={0.05}>
        {/* <boxGeometry attach="geometry" args={dimensions} />
        <a.meshPhysicalMaterial attach="material" color="red"/> */}
        {colElements}
    </a.mesh>
  )
}

const BoardColumn = ({id, dimensions, cols, activeCol, setActiveCol})=>{
  const ref = useRef();

  const props = useSpring({
    color: activeCol === id ? "red" : "grey",
  });

  return (
    <a.mesh
      ref={ref}
      position-x={-dimensions[0]/2 + ((dimensions[0] / cols) + 0.02) * id }
      position-z={0.1}
      onClick={()=>{setActiveCol(id)}}>
      
      <boxGeometry attach="geometry" args={[(dimensions[0] / cols), dimensions[1], dimensions[2]]} />
      <a.meshPhysicalMaterial attach="material" color={props.color}/>
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
      <div id="game-root">
        <Canvas shadowMap>
          <Camera />
          {/* <Controls/> */}
          <ambientLight/>
          <spotLight position={[0,5,10]}/>
          <Board setActive={setActive} active={active} isMoving={isMoving} setIsMoving={setIsMoving}/>
        </Canvas>
        <PlaceButton setActive={setActive} active={active} isMoving={isMoving} setIsMoving={setIsMoving}/>
      </div>
  )
}

export default GameCanvas;