import React, {useState} from 'react';

const PlaceButton = ({setActive, active, setIsMoving, isMoving, placeCounter, gameState})=>{
    function handleClick(e){
      e.preventDefault();
  
      if(isMoving == false){
        setActive(!active);
        setIsMoving(true);
        placeCounter();
      }
    }
  
    return(
      <img src="assets/place-counter.svg" id="place-button" className={gameState == 0 ? "hidden" : ""} onClick={(e)=>{handleClick(e)}}/>
    )
}



function Interface({setActive, active, setIsMoving, isMoving, placeCounter, modal, setModal, gameState, setGameState}) {

    return (
      <div className="Interface">
            <img src="assets/logo.svg" id="game-logo" className={gameState == 0 ? "menu" : ""}/>
            <img src={`assets/playerturn-${!active ? "one" : "two"}.svg`} id="turn-card" className={gameState == 0 ? "hidden" : ""}/>

            <img src="assets/single-player.svg" id="singleplay-btn" onClick={()=>{setGameState(1)}}  className={gameState > 0 ? "hidden" : ""}/>

            <img src="assets/exit.svg" id="exit-game"  className={gameState == 0 ? "hidden" : ""} onClick={()=>{
                setModal(!modal);
                console.log(modal);
            }}/>

            <PlaceButton gameState={gameState} setActive={setActive} active={active} setIsMoving={setIsMoving} isMoving={isMoving} placeCounter={placeCounter} />

            <div id="exit-modal-container" className={modal && gameState !== 0 ? "active" : ""} onClick={(e)=>{
                if(e.target.id !== "exit-modal" && e.target.id !== "exit-confirm"){
                    setModal(!modal);
                }
            }}>
                <img src="assets/quit-modal.svg" id="exit-modal"/>
                <img src="assets/tick.svg" id="exit-confirm" onClick={()=>{
                    setGameState(0);
                    setModal(false);
                }}/>
                <img src="assets/exit-2.svg" id="exit-cancel"/>
            </div>
      </div>
    );
  }
  
  export default Interface;