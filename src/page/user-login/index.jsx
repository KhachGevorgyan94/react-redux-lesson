import React, {useState,useEffect}  from "react";

const UsersLogin = ()=>{ 
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
      })

      const [flag, setFlag] = useState(true);

      const [state, setState] = useState({});
      useEffect(() => {
        const item = JSON.parse(localStorage.getItem('state'));
        if (item) {
         setState(item);
        }
      }, []);

    const handleChange=(e)=>{

        setLoginForm({...loginForm, [e.target.name]: e.target.value})
       

    }
    const handleClick = () => {
        if( loginForm.email + loginForm.password==="ssks" ){
        localStorage.setItem('token_admin', loginForm.email + loginForm.password)
        window.location.reload()
        }else{
            setFlag(false)
        }
      }
      const  foo=()=>{
        if( loginForm.email + loginForm.password==="ssks" ){
            localStorage.setItem('token_admin', loginForm.email + loginForm.password)
        window.location.reload()
        setFlag(true)
        }else{
            window.location.reload()
            setFlag(true)
        } 
        


      }

    return <div className="G-flex" style = {{backgroundImage:`url('${state.image}')`}}>
        <div className="section" >
            <h1 style={{fontSize:state.TitleSize+'px', color:state.TitleColor}}>{state.Title}</h1>
            <p style = {{fontSize:state.DescriptionSize+'px',color:state.DescriptionColor}}>{state.Description}</p>
            <label >
                <input type="text"onChange={handleChange} name='email'placeholder="email" />
            </label>
            <label >
                <input type="text"  onChange={handleChange} name='password'placeholder="password" />
            </label>
            {flag?<button onClick={handleClick}>Save</button>:<p>try again<button onClick={foo}>Reload</button></p> }
        </div>
    </div>
}
export default UsersLogin