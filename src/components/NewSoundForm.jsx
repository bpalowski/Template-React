import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewSoundForm(props){
  let _sound =  null;


  function handleNewSoundFormSubmission(event){
    event.preventDefault();
    props.onNewSoundCreation({sound: _sound.value, id: v4()});
    _sound.value = '';


  }


  return (
    <div>
      <form onSubmit={handleNewSoundFormSubmission}>
        <input
          type="file"
          id="audio"
          accept="audio/*"
          ref={(input)=> {_sound = input;}}/>
        <audio id="audio_player" />
        <button type='submit'>Go!</button>
      </form>
    </div>
  );
}
NewSoundForm.propTypes = {
  onNewSoundCreation: PropTypes.func
};

export default NewSoundForm;
