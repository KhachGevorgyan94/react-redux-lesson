import React, {useState} from "react";

const LoginUser = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    localStorage.setItem('token_admin', loginForm.email + loginForm.password)
    window.location.reload()
  }

  return <div>
    <input onChange={handleChange} name='email' type="text" placeholder={'email'}/>
    <input onChange={handleChange} name='password' type="text" placeholder={'password'}/>
    <button onClick={handleClick}>Login</button>
  </div>
}

export default LoginUser