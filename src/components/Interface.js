import React from 'react';

/**
 * Handles counter placing.
 * 
 * @param {*} param0 = States from parent
 */
const PlaceButton = ({setIsMoving, isMoving, placeCounter, gameState})=>{
    function handleClick(e){
      e.preventDefault();
  
      if(isMoving == false){
        setIsMoving(true);
        placeCounter();
      }
    }
  
    return(
      <img src="assets/place-counter.svg" id="place-button" className={gameState == 0 ? "hidden" : ""} onClick={(e)=>{handleClick(e)}}/>
    )
}

/**
 * Ending Game modal, will show winner or loser depending on game data.
 * 
 * @param {*} param0 = States from parent
 */
const EndgameModal = ({gameState, setGameState, winner, isSinglePlayer})=>{

    // Default to winner image.
    let modalImage = "winner-modal";

    // Player is loser if player two (CPU) wins.
    if(winner < 0 && isSinglePlayer){
        modalImage = "loser-modal";
    }

    return (
        <div id="endgame-modal-container" className={gameState > 1 ? "active" : ""}>
            <img src={`assets/${modalImage}.svg`} id="end-modal"/>
            <img src={`assets/playerwin-${winner == 1 ? "one" : "two"}.svg`} id="end-winner"/>
            <img src="assets/tick.svg" id="end-confirm" onClick={()=>{
                setGameState(0);
            }}/>
            <img src="assets/retry.svg" id="retry-game" onClick={()=>{
                setGameState(1, true);
            }}/>
        </div>
    );
}

/**
 * Quit menu modal.
 * 
 * @param {*} param0 = States from parent
 */
const ExitModal = ({modal, setModal, gameState, setGameState})=>{
    return (
        <div id="exit-modal-container" className={modal && gameState !== 0 ? "active" : ""} onClick={(e)=>{
            if(e.target.id !== "exit-modal" && e.target.id !== "exit-confirm"){
                setModal(!modal);
            }
        }}>
            <img src="assets/quit-modal.svg" id="exit-modal"/>
            <img src="assets/tick.svg" id="exit-confirm" onClick={()=>{
                setGameState(0, true);
                setModal(false);
            }}/>
            <img src="assets/exit-2.svg" id="exit-cancel"/>
        </div>
    );
}

/**
 * Interface containing all the buttons that interact with game settings.
 * 
 * @param {*} param0 = States from parent
 */
function Interface({setActive, active, setIsMoving, isMoving, placeCounter, modal, setModal, gameState, setGameState, isSinglePlayer, setIsSinglePlayer, winner}) {

    return (
      <div className="Interface">
            <img src="assets/logo.svg" id="game-logo" className={gameState == 0 ? "menu" : ""}/>
            <img src={`assets/playerturn-${!active ? "one" : "two"}.svg`} id="turn-card" className={gameState == 0 ? "hidden" : ""}/>

            <div id="singleplay-btn" className={gameState > 0 ? "hidden" : ""}>
                <img src="assets/single-player.svg" onClick={()=>{
                    setGameState(1);
                    setIsSinglePlayer(true);
                    console.log("Single Player = " + isSinglePlayer);
                }}  />
            </div>
            
            <div id="twoplayer-btn" className={gameState > 0 ? "hidden" : ""}>
                <img src="assets/two-player.svg" onClick={()=>{
                    setGameState(1);
                    setIsSinglePlayer(false);
                    console.log("Single Player = " + isSinglePlayer);
                }}  />
            </div>

            <img src="assets/exit.svg" id="exit-game"  className={gameState == 0 ? "hidden" : ""} onClick={()=>{
                setModal(!modal);
                console.log(modal);
            }}/>

            <img src={"assets/credit.svg"} id="project-credit" className={gameState > 0 ? "hidden" : ""}/>

            <PlaceButton gameState={gameState} setActive={setActive} active={active} setIsMoving={setIsMoving} isMoving={isMoving} placeCounter={placeCounter} />
            <ExitModal modal={modal} setModal={setModal} gameState={gameState} setGameState={setGameState}/>
            <EndgameModal gameState={gameState} setGameState={setGameState} winner={winner} isSinglePlayer={isSinglePlayer}/>
            
      </div>
    );
  }
  
  export default Interface;