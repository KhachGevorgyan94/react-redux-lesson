import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Tokencomponent from "./components/tokencomponent";


function App() {
  const token = useSelector(state=>state.auth.token)
  console.log(token)
  const dispatch = useDispatch()
  const handleChange  = (e)=>{
    dispatch({type:'SET_TOKEN', payload:e.target.value})
  }

  return (
      <div>
        Hello  redux
        <input type="text"  onChange={handleChange} />

        <p>{token}</p>

        <Tokencomponent/>
      </div>
  );
}

export default App;
