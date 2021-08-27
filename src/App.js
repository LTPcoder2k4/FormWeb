import './App.css';
import Register from './pages/Register'
import Success_Register from './pages/Success-Register';
import {Route} from 'react-router-dom'
import Brand from './pages/components/Brand';
import Admin from './pages/Admin';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Brand/>
      <Route exact path="/" component={Register}/>
      <Route exact path="/success" component={Success_Register}/>
      <Route exact path="/admin" component={Admin} />
    </div>
  );
}

export default App;
