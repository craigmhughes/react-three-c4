import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const GameBoard = ()=>{
    const [model, setModel] = useState();
    const newMaterial = new THREE.MeshStandardMaterial({color: 0x006d90});

    useEffect(()=>{
        if(!model){
        new GLTFLoader().load("blockfour-2.gltf", (obj)=>{
            obj.scene.traverse((child)=>{
                if (child.isMesh) child.material = newMaterial;
            });
            setModel(obj);
        });
        }
    });

    return model ? <primitive object={model.scene} scale={[0.75,0.75,0.75]}
    position-y={-0.675} position-z={-0.65}/> : null;
}

export default GameBoard;