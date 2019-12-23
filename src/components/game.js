import React, { useRef, useState } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useThree, useRender } from 'react-three-fiber';
import *  as THREE from 'three';

import Board from './Board';
import Interface from './Interface';

/**
 * Game camera, placed looking at center of the game board.
 */
const Camera = () => {
  const three = useThree();
  const camera = three.camera;
  camera.position.z = 2.5;
  camera.position.y = 0;
  three.gl.setSize(window.innerWidth, window.innerHeight);

  return null;
};

extend({OrbitControls});

/**
 * Controls used for testing purposes.
 * TODO: Remove on project completion.
 */
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

/**
 * Ground model.
 */
const Ground = ()=>{
  return (
    <mesh
    rotation-x={-1.6}
    position-z={0}
    position-y={-0.675}
    receiveShadow>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshPhongMaterial attach="material" color={"#4fd654"}/>
    </mesh>
  )
}

/**
 * Game Container
 */
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

  // Set exit modal
  const [modal, setModal] = useState(false);

  // Controls Game menus in Interface
  const [gameState, setGameState] = useState(0);

  // Game mode
  const [isSinglePlayer, setIsSinglePlayer] = useState(true);

  // Winning Player - default to player one.
  const [winner, setWinner] = useState(1);

  /**
   * Acts as a barrier between gameState changes.
   * Makes it easier to reset game when needed.
   * 
   * @param {int} i = Game state value
   * @param {Boolean} reset = Reset counters
   */
  function gameStateChange(i, reset){
    // If set to 0 or reset is true, reset counters -- creating new game.
    if(i === 0 || reset){
      setCounters([
        [],[],[],[],[],[],[]
      ]);
    }

    setGameState(i);
  }
  

  /**
   * Confirm placement of counter & overwrite var.
   */
  function placeCounter(aiCounter){
    // console.log(active);
    if(typeof aiCounter !== 'undefined'){
      // console.log(aiCounter);
      counters[aiCounter[0]][counters[aiCounter[0]].length] = aiCounter[1];
      aiCounter.push(counters[aiCounter[0]].length - 1);
      checkWin(aiCounter);
    } else {
      counters[activeCounter[0]][counters[activeCounter[0]].length] = activeCounter[1];
      activeCounter.push(counters[activeCounter[0]].length - 1);
      checkWin(activeCounter);
    }

    // Switch player if two player, otherwise ai_turn() will take care of it.
    if(!isSinglePlayer){
      setPlayer(player * -1);
      setActiveCounter([activeCol, player * -1]);
    }
    
    if(aiCounter){
      setActive(false);
    } else if(active == false && isSinglePlayer){
      ai_turn();
    } else {
      setActive(!active);
    }

  }

  /**
   * Computer Player's turn
   */
  function ai_turn(){
      let bestScore = -Infinity;
      let bestMove;

      for(let i = 0; i < 7; i++){
        if(counters[i].length < 6){
          console.log("checking win");
          counters[i][counters[i].length] = 1;
          let result = checkWin([i, 1, counters[i].length - 1], true);
          counters[i].pop();

          if(result === undefined || result === "tie"){
            console.log("no win");
            continue
          } else if (result > bestScore){
            console.log("overwriting win!");
            bestMove = i;
          }
        }
      }

      if (bestMove == undefined){
        bestMove = Math.floor(Math.random() * 7);
      }

      placeCounter([bestMove, -1]);   
  }

  /**
   * Creates an array of possible win directions and if any are true,
   * sets game to state 2 (Win state).
   * 
   * @param {Array} counter = Last placed counter [x-pos, owner, y-pos]
   * @param {Boolean} justChecking = pass true to recieve prediction of winning move.
   */
  function checkWin(counter, justChecking){
    // X and Y axis
    let coords = [counter[0], counter[2]];
    // Player who owns counter
    let owner = counter[1];

    // Array of possible win directions
    let checkWin = [
      checkHorizontal(coords, owner), 
      checkVertical(coords, owner),
      checkDiagonalLeft(coords, owner),
      checkDiagonalRight(coords, owner)
    ];

    let foundWin = false;

    // If any win, set game to state 2 (Win)
    for(let i = 0; i < checkWin.length; i++){
      if(checkWin[i] && justChecking){
        // Return winning player
        return owner;

      } else if(checkWin[i]){
        setWinner(owner);
        console.log(winner);
        setGameState(2);
        foundWin = true;
        break;
      }
    }

    if(!foundWin){
      return "tie";
    }

  }

  /**
   * Checks Horizontally for matching counters that are in a sequence.
   * 
   * @param {*} coords = Coordinates of last placed counter
   * @param {*} owner = Owner of last placed counter
   */
  function checkHorizontal(coords, owner){
    let count = 1;
    // Check Right
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
    // Check Left
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

  /**
   * Checks Vertically for matching counters that are in a sequence.
   * 
   * @param {*} coords = Coordinates of last placed counter
   * @param {*} owner = Owner of last placed counter
   */
  function checkVertical(coords, owner){
    let count = 1;
    // Check Up
    for(let i = 1; i < 7; i++){
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
    console.log(counters[coords[0]]);
    console.log(count >= 4);
    return count >= 4;
  }

  /**
   * Checks Diagonally (Right) for matching counters that are in a sequence.
   * 
   * @param {*} coords = Coordinates of last placed counter
   * @param {*} owner = Owner of last placed counter
   */
  function checkDiagonalRight(coords, owner){
    let count = 1;
    // Check Up
    for(let i = 1; i < 7; i++){
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

  /**
   * Checks Diagonally (Left) for matching counters that are in a sequence.
   * 
   * @param {*} coords = Coordinates of last placed counter
   * @param {*} owner = Owner of last placed counter
   */
  function checkDiagonalLeft(coords, owner){
    let count = 1;
    // Check Up
    for(let i = 1; i < 7; i++){
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
        <Canvas onCreated={({ gl }) => ((gl.shadowMap.enabled = true), (gl.shadowMap.type = THREE.PCFSoftShadowMap))}
                className={modal || gameState !== 1 ? "active" : ""} id="canvas-container">
          <Camera isActive={active}/>
          <ambientLight intensity={0.5} />
          <spotLight intensity={1.5} position={[20, 5, 10]} angle={0.2} penumbra={1} castShadow />
          <Board  setActive={setActive} active={active} isMoving={isMoving} setIsMoving={setIsMoving} counters={counters}
                  setCounter={setActiveCounter} player={player} activeCol={activeCol} setActiveCol={setActiveCol}/>
          {/* <Controls/> */}
          <Ground/>
          
          <fog attach="fog" args={['#4cd4ff', 0, 8]} />
        </Canvas>
        <Interface  setActive={setActive} active={active} isMoving={isMoving} setIsMoving={setIsMoving}
                    placeCounter={placeCounter} modal={modal} setModal={setModal} gameState={gameState} 
                    setGameState={gameStateChange} winner={winner}
                    isSinglePlayer={isSinglePlayer} setIsSinglePlayer={setIsSinglePlayer}/>
      </div>
  )
}

export default GameCanvas;