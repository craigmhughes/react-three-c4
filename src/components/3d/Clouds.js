import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Clouds = (active)=>{
    const [model, setModel] = useState();
    const newMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});

    useEffect(()=>{
        if(!model){
        new GLTFLoader().load("clouds.gltf", (obj)=>{
            obj.scene.traverse((child)=>{
                if (child.isMesh) child.material = newMaterial;
                if ( child instanceof THREE.Mesh ) { child.castShadow = true; }
            });
            setModel(obj);
        });
        }
    });

    return model ? <primitive object={model.scene} scale={[0.75,0.5,0.75]}
    position-y={2} position-z={0} rotation-y={active ? 3.5 : -3.5}/> : null;
}

export default Clouds;