import React, {useState, useEffect} from "react";

const UsersLogin = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })

  const [flag, setFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const [state, setState] = useState({});
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('state'));
    if (item) {
      setState(item);
    }
  }, []);

  const handleChange = (e) => {

    setLoginForm({...loginForm, [e.target.name]: e.target.value})


  }
  const handleClick = () => {

    if (validation()) {
      localStorage.setItem('token_admin', loginForm.email + loginForm.password)
      window.location.reload()
    }
  }


  const validation = () => {
    let isValidate = true
    if (!loginForm.email.length || !loginForm.password.length) {
      setFlag(true)
      setErrorMessage('You  must fill  the all fields')
      isValidate = false
    }

    if (loginForm.email.length &&
      loginForm.password.length &&
      loginForm.email + loginForm.password !== "ssks") {
      setFlag(true)
      setErrorMessage('Incorrect email or password')
      isValidate = false
    }


    return isValidate
  }


  return <div className="G-flex" style={{backgroundImage: `url('${state.image}')`}}>
    <div className="section">
      <h1 style={{fontSize: state.TitleSize + 'px', color: state.TitleColor}}>{state.Title}</h1>
      <p style={{fontSize: state.DescriptionSize + 'px', color: state.DescriptionColor}}>{state.Description}</p>
      <label>
        <input type="text" onChange={handleChange} name='email' placeholder="email"/>
      </label>
      <label>
        <input type="text" onChange={handleChange} name='password' placeholder="password"/>
      </label>
      <button onClick={handleClick}>{!flag ? 'Save' : 'Reload'}</button>
      <p>{errorMessage}</p>
    </div>
  </div>
}
export default UsersLogin