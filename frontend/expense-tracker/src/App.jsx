import React from 'react'

import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate, 
} from 'react-router-dom'

import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Auth/Dashboard/Home'; 
import Income from './pages/Auth/Dashboard/Income';
import Expense from './pages/Auth/Dashboard/Expense';

// In React Router, the exact prop on a <Route> component is used to ensure that the route only renders its associated component when the current URL path exactly matches the path prop of the <Route>.
// **make sure exact element matches the export default
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login"  exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/income" exact element={<Income />} /> 
          <Route path="/expense" exact element={<Expense />} />
        </Routes>
      </Router>
    </div> 
  )
}

export default App

const Root = () => {
  //Check if token exists in localStorage
  const token = !!localStorage.getItem('token');

  //Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};