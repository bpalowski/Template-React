import React from 'react';
import Header from './Header';
import SoundList from './SoundList';
import { Switch, Route } from 'react-router-dom';
import NewSoundControl from './NewSoundControl';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterSoundList: [],

    };
    this.handleAddingNewSoundToList = this.handleAddingNewSoundToList.bind(this);
    // this.onEvent=this.onEvent.bind(this);
  }





  handleAddingNewSoundToList(newSound){
    var newMasterSoundList = this.state.masterSoundList.slice();
    newMasterSoundList.push(newSound);
    this.setState({masterSoundList: newMasterSoundList});
  }





  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><SoundList soundList={this.state.masterSoundList} />} />
          <Route path='/newsound' render={()=><NewSoundControl onNewSoundCreation={this.handleAddingNewSoundToList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
