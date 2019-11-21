import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GameBoard = ()=>{
    const [model, setModel] = useState();

    useEffect(()=>{
        if(!model){
        new GLTFLoader().load("blockfour-2.gltf", setModel);
        }
    });

    return model ? <primitive object={model.scene} scale={[0.75,0.75,0.75]}
    position-y={-0.675} position-z={-0.65}/> : null;
}

export default GameBoard;