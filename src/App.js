import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Layout/Header';
import ComposeMail from './components/Pages/ComposeMail';
import Signup from './components/Pages/Signup';
import Welcome from './components/Pages/Welcome';

function App() {
  return (
    <>
      <main>
      <Header />
      </main>

      <div>
        <Switch>
          <Route path='/' exact >
            <Signup />
          </Route>

          <Route path='/welcome' exact >
            <Welcome />
          </Route>

          <Route path='/compose-mail' exact >
            <ComposeMail />
          </Route>
        </Switch>
        </div>
    
    </>
  );
}

export default App;
