import React from 'react';
import Sound from './Sound';
import PropTypes from 'prop-types';



function SoundList(props){


  function onEventListen(event){
    event.preventDefault();
    //props.whateverFunction(event);
    alert('hello');
  }



  return (
    <div>
      <hr/>
      {props.soundList.map((sound) =>
        <Sound name={sound.name}
          parentFunc = {onEventListen}
          key={sound.id}/>
      )}
    </div>
  );
}
SoundList.propTypes = {
  soundList: PropTypes.array,
  // whateverFunction: PropTypes.fun
};

export default SoundList;
