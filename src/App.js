import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Layout/Header';
import ComposeMail from './components/Pages/ComposeMail';
import Inbox from './components/Pages/Inbox';
import Mailbox from './components/Pages/Mailbox';
import MessageBox from './components/Pages/MessageBox';
import Signup from './components/Pages/Signup';
import Welcome from './components/Pages/Welcome';

function App() {
  return (
    <>
      <main>
      <Header />
      </main>

      <div className='main-container'>
        <div className='sidebar-section'>
          <Mailbox />
        </div>
      

      <div className='content-container mt-5'>
        <Switch>
          <Route path='/' exact >
            <Signup />
          </Route>

          <Route path='/welcome' exact >
            <Welcome />
          </Route>

          <Route path='/mailbox' exact >
            <Mailbox />
          </Route>


          <Route path='/compose-mail' exact >
            <ComposeMail />
          </Route>

          <Route path='/inbox' exact >
            <Inbox />
          </Route>

          <Route path='/inbox/:email' exact >
            <MessageBox />
          </Route>

        </Switch>
        </div>

        </div>
    
    </>
  );
}

export default App;
