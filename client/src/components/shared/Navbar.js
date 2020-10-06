import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  const authContext = useContext(AuthContext)

  const handleClick = (e) => {
    authContext.handleLogout(props.history)
  }

  if (authContext.authenticated) { 
    return (  
      <>
        <Link to="/">Home</Link>
        <button onClick={handleClick}>Logout</button>
      </>
    )
  } else {
    return(
      <>
        <Link to="/">Home</Link>
        <Link to='/login'> Login </Link>
        <Link to='/register'> Register </Link>
      </>
    )
  }
} 

export default withRouter(Navbar)
