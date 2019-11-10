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

const Board = ({active, setActive, isMoving, setIsMoving, counters, setCounter, player, activeCol, setActiveCol})=>{
  const ref = useRef();
  const props = useSpring({
    rotationY: active ? 3.15 : 0,
  });

  // Board Size = [Width, Height, Depth]
  let dimensions =  [1.5, 1.425, 0.2]
  let colNum = 7;
  let colElements = [];

  for(let i = 0; i < colNum; i++){
    colElements.push(
    <BoardColumn  key={i} id={i} dimensions={dimensions} cols={colNum} activeCol={activeCol} setActiveCol={setActiveCol}
                  counters={counters} setCounter={setCounter} player={player}/>)
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
      position-x={0.025}>
        {colElements}
    </a.mesh>
  )
}

const BoardColumn = ({id, dimensions, cols, activeCol, setActiveCol, counters, setCounter, player})=>{
  const ref = useRef();
  let colId = id;

  // Array of Counter components.
  let counterElements = [];

  const props = useSpring({
    color: activeCol === id ? "red" : "grey",
  });


  for(let i = 0; i < Math.floor(dimensions[1] / (dimensions[0] / cols)); i++){
    // console.log(counters[colId][i]);
    counterElements.push(
      <Counter  key={i} id={i} dimensions={dimensions} cols={cols} owner={counters[colId][i]}
                isPlaced={counters[id][i] !== undefined}/>);
  }

  return (
    <a.mesh
      ref={ref}
      position-x={-dimensions[0]/2 + ((dimensions[0] / cols) + 0.02) * id }
      onClick={()=>{
        setActiveCol(-1);
        setCounter([id, player]);
        setActiveCol(id);
      }}>
      {counterElements}
      <boxGeometry attach="geometry" args={[(dimensions[0] / cols), dimensions[1], dimensions[2]]}/>
      <a.meshBasicMaterial attach="material" color={props.color} wireframe={true}/>
    </a.mesh>
  )
}

const Counter = ({id, dimensions, cols, owner, isPlaced})=>{
  const ref = useRef();
  let size = (dimensions[0] / cols) * 0.5;
  let color = owner > 0 ? "yellow" : "red";

  const props = useSpring({
    counterColor: color,
    y: isPlaced ? -0.625 + (0.25 * id) : dimensions[1] + size,
    transparent: isPlaced ? 1 : 0,
  });

  return (
    <a.mesh
      ref={ref}
      rotation-x={1.55}
      position-y={props.y}>
      
      <cylinderGeometry attach="geometry" args={[size,size,size,10]} />
      <a.meshPhysicalMaterial attach="material" color={props.counterColor} opacity={props.transparent}/>
    </a.mesh>
  )
}

const PlaceButton = ({setActive, active, setIsMoving, isMoving, placeCounter})=>{

  function handleClick(e){
    e.preventDefault();

    if(isMoving == false){
      setActive(!active);
      setIsMoving(true);
      placeCounter();
    }
  }

  return(
    <button id="place-button" style={{height: "100px", width: "100px"}} onClick={(e)=>{handleClick(e)}}>Click</button>
  )
}

const GameCanvas = ()=>{

  // Toggles rotation of game board
  const [active, setActive] = useState(false);

  // Prevent clicking to place if Board is moving
  const [isMoving, setIsMoving] = useState(false);

  // Get & Set active player. 1 = Player One, -1 = Player Two
  const [player, setPlayer] = useState(1);
  
  // Counters in Columns. 
  const [counters, setCounters] = useState([
    [],[],[],[],[],[],[]
  ]);

  // Counter to be placed on board. [0] = column index, [1] = owner
  const [activeCounter, setActiveCounter] = useState([0,player]);

  // Set active column, start at -1 and none selected.
  const [activeCol, setActiveCol] = useState(0);

  

  /**
   * Confirm placement of counter & overwrite var.
   */
  function placeCounter(){
    counters[activeCounter[0]][counters[activeCounter[0]].length] = activeCounter[1];
    setPlayer(player * -1);
    setActiveCounter([activeCol, player * -1]);
  }

  return(
      <div id="game-root">
        <Canvas shadowMap>
          <Camera />
          
          <ambientLight/>
          <spotLight position={[0,5,10]}/>
          <Board  setActive={setActive} active={active} isMoving={isMoving} setIsMoving={setIsMoving} counters={counters}
                  setCounter={setActiveCounter} player={player} activeCol={activeCol} setActiveCol={setActiveCol}/>
          {/* <Controls/> */}
        </Canvas>
        <PlaceButton  setActive={setActive} active={active} isMoving={isMoving} setIsMoving={setIsMoving} setActiveCol={setActiveCol}
                      placeCounter={placeCounter} setPlayer={setPlayer} player={player} activeCol={activeCol} setActiveCounter={setActiveCounter}/>
      </div>
  )
}

export default GameCanvas;