import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = (props) => {
  const authContext = useContext(AuthContext)

  const handleClick = (e) => {
    authContext.handleLogout(props.history)
  }

  if (authContext.authenticated) { 
    return (  
      <>
        <Flex>
          <Link to="/">Home</Link>
          <div onClick={handleClick}>Logout</div>
        </Flex>
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

const Flex = styled.div`
  display: flex;
`
