import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';

import GameBoard from './3d/GameBoard';
import BoardPointer from './3d/BoardPointer';
import Counter from './Counter';
import Clouds from './3d/Clouds';

/**
 * Board container
 * 
 * @param {*} param0 = States from parent
 */
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
        position-y={0}
        position-x={0.025}
        castShadow 
        receiveShadow>
          {colElements}
          <GameBoard/>
          <BoardPointer activeCol={activeCol}/>
          <Clouds active={active}/>
      </a.mesh>
    )
  }
  
  /**
   * Column containing counters.
   * 
   * @param {*} param0 = States from parent
   */
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
        position-x={(-dimensions[0]/2 + ((dimensions[0] / cols) + 0.015) * id) + 0.06}
        position-z={-0.05}
        position-y={0.075}
        onClick={()=>{
          setActiveCol(-1);
          setCounter([id, player]);
          setActiveCol(id);
        }}>
        {counterElements}
        <boxGeometry attach="geometry" args={[(dimensions[0] / cols), dimensions[1], dimensions[2]]}/>
        <a.meshBasicMaterial attach="material" color={props.color} transparent={true} opacity={0.01}/>
      </a.mesh>
    )
  }
  
  export default Board;