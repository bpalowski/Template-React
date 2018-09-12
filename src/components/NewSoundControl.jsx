import React from 'react';
import Confirmation from './Confirmation';
import NewSoundForm from './NewSoundForm';
import PropTypes from 'prop-types';

class NewSoundControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewSoundForm onNewSoundCreation={this.props.onNewSoundCreation}/>;
    } else {
      currentlyVisibleContent = <Confirmation onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}
NewSoundControl.propTypes = {
  onNewSoundCreation: PropTypes.func
};

export default NewSoundControl;
