import React from 'react';
import Home from './components/home/Home';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Register from './components/shared/Register';
import Login from './components/shared/Login'
import FetchUser from './components/shared/FetchUser';
import ProtectedRoute from './components/shared/ProtectedRoute';
import { initMiddleware, } from 'devise-axios';
import Instrument from './components/instrument/Instrument';

/**
 * Login
 * Register
 * Navbar
 * Home PROTECTED ROUTE
 * NoMatch
 * FetchUser
 * Protected Route
 * React Router Dom
 */
initMiddleware();

function App() {
  return (
    <>
      <Navbar />
      <FetchUser>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} /> 
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/instruments/:id" component={Instrument} />
        </Switch>
      </FetchUser>
    </>
  )
}

export default App;
