import React, {useState} from 'react';

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
      <img src="assets/place-counter.svg" id="place-button" onClick={(e)=>{handleClick(e)}}/>
    )
}



function Interface({setActive, active, setIsMoving, isMoving, placeCounter, modal, setModal}) {

    return (
      <div className="Interface">
            <img src="assets/logo.svg" id="game-logo"/>
            <img src={`assets/playerturn-${!active ? "one" : "two"}.svg`} id="turn-card"/>

            <PlaceButton setActive={setActive} active={active} setIsMoving={setIsMoving} isMoving={isMoving} placeCounter={placeCounter} />
            <img src="assets/exit.svg" id="exit-game" onClick={()=>{
                setModal(!modal);
                console.log(modal);
            }}/>
            <div id="exit-modal-container" className={modal ? "active" : ""} onClick={(e)=>{
                if(e.target.id !== "exit-modal" && e.target.id !== "exit-confirm" && e.target.id !== "exit-cancel"){
                    setModal(!modal);
                }
            }}>
                <img src="assets/quit-modal.svg" id="exit-modal"/>
            </div>
      </div>
    );
  }
  
  export default Interface;