import React from 'react';
import PropTypes from 'prop-types';

function Confirmation(props){
  return (
    <div>
      <p>Contiunue?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

Confirmation.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default Confirmation;
