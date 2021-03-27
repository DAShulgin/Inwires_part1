import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavigationPanel from './components/Navbar/NavigationPanel';
import News from './components/News/News';
import Muzik from './components/Muzik/Muzik';
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UserContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';




const App = (props) => {

  return (
    <BrowserRouter>
      <div className='grid'>

        <div className='blok1'>
          <HeaderContainer />
        </div>

        <div className='blok2'>
          <NavigationPanel />
        </div>

        <div className='blok3'>

          <Route exact path='/profile/:userId?' render={() => <ProfileContainer/>} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/muzik' render={() => <Muzik />} />
          <Route path='/setting' render={() => <Setting />} />
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
