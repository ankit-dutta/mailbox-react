import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Layout/Header';
import Signup from './components/Pages/Signup';

function App() {
  return (
    <>
      <main>
      <Header />
      </main>

      <div>
        <Switch>
          <Route path='/'  >
            <Signup />
          </Route>
        </Switch>
        </div>
    
    </>
  );
}

export default App;
