import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { useSpring, a } from 'react-spring/three';

const BoardPointer = ({activeCol})=>{
    const [model, setModel] = useState();
    const newMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFFF});

    const props = useSpring({
        x: -0.65 + (0.21 * activeCol),
    });

    useEffect(()=>{
        if(!model){
        new GLTFLoader().load("c4-pointer.gltf", (obj)=>{
            obj.scene.traverse((child)=>{
                if (child.isMesh) child.material = newMaterial;
                if ( child instanceof THREE.Mesh ) { child.castShadow = true; }
            });
            setModel(obj);
        });
        }
    });

    return model ? <a.primitive object={model.scene} scale={[0.1,0.1,0.1]}
    position-y={1.1} position-x={props.x}/> : null;
}

export default BoardPointer;