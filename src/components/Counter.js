import React, { useRef } from 'react';
import { useSpring, a } from 'react-spring/three';

const Counter = ({id, dimensions, cols, owner, isPlaced})=>{
    const ref = useRef();
    let size = true ? (dimensions[0] / cols) * 0.75 : (dimensions[0] / cols) * 0.5;
    let color = owner > 0 ? "yellow" : "red";

    const props = useSpring({
        counterColor: color,
        y: isPlaced ? -0.625 + (0.23 * id) : dimensions[1] + size,
        transparent: isPlaced ? 1 : 0,
    });

    return (
        <a.mesh
        ref={ref}
        rotation-x={true ? 0 : 1.55}
        position-y={props.y}>
        
        <boxGeometry attach="geometry" args={[size,size,size]} />
        <a.meshPhysicalMaterial attach="material" color={props.counterColor} opacity={props.transparent}/>
        </a.mesh>
    )
}

export default Counter;