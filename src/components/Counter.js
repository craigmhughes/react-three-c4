import React, { useRef } from 'react';
import { useSpring, a } from 'react-spring/three';

/**
 * Model representation of the counters variable found in Game.js
 * 
 * @param {*} param0 = States from parent
 */
const Counter = ({id, dimensions, cols, owner, isPlaced})=>{
    const ref = useRef();
    let size = (dimensions[0] / cols) * 1.075;
    // Hex - Yellow, Red
    let color = owner > 0 ? "#e8ea5e" : "#bb4042";

    const props = useSpring({
        counterColor: color,
        y: isPlaced ? -0.625 + (0.23 * id) : (dimensions[1] + size) + 1,
        transparent: isPlaced ? 1 : 0,
    });

    return (
        <a.mesh
        ref={ref}
        rotation-x={true ? 0 : 1.55}
        position-y={props.y}
        castShadow={isPlaced}>
        
        <boxGeometry attach="geometry" args={[size,size,size]} />
        <a.meshPhongMaterial attach="material" color={props.counterColor} opacity={props.transparent}/>
        </a.mesh>
    )
}

export default Counter;