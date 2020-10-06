import React, { useState, useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Login = (props) => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const authContext = useContext(AuthContext);

  const handleSubmit = (e) =>{
    e.preventDefault()
    authContext.handleLogin({email, password}, props.history)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="email"/>
      <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="password"/>
      <input type="submit" value="Login" />

    </form>
  )
}

export default Login 