import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavigationPanel from './components/Navbar/NavigationPanel';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';
import News from './components/News/News';
import Muzik from './components/Muzik/Muzik';
import Setting from './components/Setting/Setting';
import Dialogs from './components/Dialogs/Dialogs';



const App = (props) => {

  return (
    <BrowserRouter>
    <div className='grid'>

      <div className='blok1'>
        <Header />
      </div>

      <div className='blok2'>
        <NavigationPanel />
      </div>

      <div className='blok3'>
        
        <Route exact path='/profile' render={() =>
        <Profile
        State = {props.State} 
        dispatch = {props.dispatch} /> } />

        <Route path='/dialogs' render={() => <Dialogs dialogPage = {props.State.dialogPage}/>} />
        <Route path='/users' render={() => <Users />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/muzik' render={() => <Muzik />} />
        <Route path='/setting' render={() => <Setting />} />
      </div>

    </div>

    </BrowserRouter>
  );
}

export default App;
