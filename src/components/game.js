import React, { useRef, useState } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useThree, useRender } from 'react-three-fiber';

import Board from './Board';

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
    <button id="place-button" onClick={(e)=>{handleClick(e)}}>Place Counter</button>
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
    activeCounter.push(counters[activeCounter[0]].length - 1);
    checkWin(activeCounter);
    setPlayer(player * -1);
    setActiveCounter([activeCol, player * -1]);
  }

  function checkWin(counter){
    // X and Y axis
    let coords = [counter[0], counter[2]];
    // Player who owns counter
    let owner = counter[1];

    let checkWin = [
      checkHorizontal(coords, owner), 
      checkVertical(coords, owner),
      checkDiagonalLeft(coords, owner),
      checkDiagonalRight(coords, owner)
    ];

    let hasWon = false;

    console.log(checkWin);
    

  }



  function checkHorizontal(coords, owner){
    let count = 1;
    // Check Left
    for(let i = 1; i < 7; i++){
      if(coords[0] + i > 6){
        break;
      } else if(typeof counters[coords[0] + i] !== 'undefined') {
        if(counters[coords[0] + i][coords[1]] == owner){
          count+=1;
        } else {
          break;
        }
      }
    }
    // Check Right
    for(let i = 1; i < 7; i++){
      if(coords[0] - i < 0){
        break;
      } else if(typeof counters[coords[0] - i] !== 'undefined') {
        if(counters[coords[0] - i][coords[1]] == owner){
          count+=1;
        } else {
          break;
        }
      }
    }

    return count >= 4;
  }

  function checkVertical(coords, owner){
    let count = 1;
    // Check Up
    for(let i = 1; i < 6; i++){
      if(coords[1] + i > 5){
        break;
      } else if(typeof counters[coords[0]][coords[1] + i] !== 'undefined') {
        if(counters[coords[0]][coords[1] + i] == owner){
          count+=1;
        } else {
          break;
        }
      }
    }
    // Check Down
    for(let i = 1; i < 7; i++){
      if(coords[1] - i < 0){
        break;
      } else if(typeof counters[coords[0]][coords[1] - i] !== 'undefined') {
        if(counters[coords[0]][coords[1] - i] == owner){
          count+=1;
        } else {
          break;
        }
      }
    }

    return count >= 4;
  }

  function checkDiagonalRight(coords, owner){
    let count = 1;
    // Check Up
    for(let i = 1; i < 6; i++){
      if(coords[0] + i > 5 || coords[1] + i > 5){
        break;
      } else if(typeof counters[coords[0] + i][coords[1] + i] !== 'undefined') {
        if(counters[coords[0] + i][coords[1] + i] == owner){
          count+=1;
        } else {
          break;
        }
      }
    }
    // Check Down
    for(let i = 1; i < 7; i++){
      if(coords[0] - i < 0 || coords[1] - i < 0){
        break;
      } else if(typeof counters[coords[0] - i][coords[1] - i] !== 'undefined') {
        if(counters[coords[0] - i][coords[1] - i] == owner){
          count+=1;
        } else {
          break;
        }
      }
    }

    return count >= 4;
  }

  function checkDiagonalLeft(coords, owner){
    let count = 1;
    // Check Up
    for(let i = 1; i < 6; i++){
      if(coords[0] + i > 5 || coords[1] - i < 0){
        break;
      } else if(typeof counters[coords[0] + i][coords[1] - i] !== 'undefined') {
        if(counters[coords[0] + i][coords[1] - i] == owner){
          count+=1;
        } else {
          break;
        }
      }
    }
    // Check Down
    for(let i = 1; i < 7; i++){
      if(coords[0] - i < 0 || coords[1] + i > 5){
        break;
      } else if(typeof counters[coords[0] - i][coords[1] + i] !== 'undefined') {
        if(counters[coords[0] - i][coords[1] + i] == owner){
          count+=1;
        } else {
          break;
        }
      }
    }

    return count >= 4;
  }

  return(
      <div id="game-root">
        <Canvas shadowMap>
          <Camera/>
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