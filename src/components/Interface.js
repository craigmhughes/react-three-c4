import React from 'react';

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



function Interface({setActive, active, setIsMoving, isMoving, placeCounter}) {
    return (
      <div className="Interface">
          <PlaceButton setActive={setActive} active={active} setIsMoving={setIsMoving} isMoving={isMoving} placeCounter={placeCounter} />
          <img src="assets/exit.svg" id="exit-game"/>
      </div>
    );
  }
  
  export default Interface;