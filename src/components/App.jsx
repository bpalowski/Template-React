import React from 'react';
import Test from './Test';
import { Switch, Route } from 'react-router-dom';
import TestPage from './TestPage';

function App(){
  return (
    <div>
      <Test/>
      <Switch>
        <Route exact path='/#' component={App} />
        <Route path="/test" component={Test}/>
        <Route path="/testpage" component={TestPage}/>
      </Switch>
    </div>

  );
}

export default App;
