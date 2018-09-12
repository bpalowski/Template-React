import React from 'react';
import PropTypes from 'prop-types';



function Sound(props){

  function soundEvent(event){
    event.preventDefault();
    props.parentFunc(event);
    console.log('In the soundEvent');
  }

  return (

    <div>
      <h3>{props.name}</h3>
      <button onClick={soundEvent}>Play</button>
      <hr/>
    </div>
  );
}

Sound.propTypes = {
  name: PropTypes.string,
  //soundEvent: PropTypes.fun
};



export default Sound;
