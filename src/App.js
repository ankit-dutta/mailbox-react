import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Layout/Header';
import ComposeMail from './components/Pages/ComposeMail';
import Inbox from './components/Pages/Inbox';
import Mailbox from './components/Pages/Mailbox';
import MessageBox from './components/Pages/MessageBox';
import SentMail from './components/Pages/SentMail';
import Signup from './components/Pages/Signup';
import Welcome from './components/Pages/Welcome';
import { fetchReceivedMail, fetchSentMail } from './store/mail-actions';

function App() {

  const isLogin = useSelector((state)=>state.auth.isAuthenticated);

  const dispatch = useDispatch();

  // useEffect(()=>{
  //   setInterval(()=>{
  //     console.log('interval')
  //     // console.log(fetchSentMail)
  //     dispatch(fetchSentMail());
  //     dispatch(fetchReceivedMail);
  //   },(2000))
  // },[dispatch])

  return (
    <>
      <main>
      <Header />
      </main>

      <div className='main-container'>
      { isLogin && <div className='sidebar-section'>
          <Mailbox />
        </div>
        }
      

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

          <Route path='/sent' exact >
            <SentMail />
          </Route>

          <Route path='/inbox/:email'  >
            <MessageBox />
          </Route>
          

        </Switch>
        </div>

        </div>
    
    </>
  );
}

export default App;
