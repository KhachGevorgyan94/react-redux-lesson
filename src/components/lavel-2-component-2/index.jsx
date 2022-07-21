import React, {useState} from "react";
import {useDispatch} from "react-redux";

const Lavel2Component2 = (props) => {
  const [inputValue, setInputValue] = useState('')
  const [clickedValue, setClickedValue] = useState('')
  const dispatch = useDispatch()
  const handleClick = ()=>{
      // setClickedValue(inputValue)
    // props.callBack(inputValue)
    dispatch({type:'SET_CALL_BACK_VALUE', payload:inputValue})
  }



  return <div style={{backgroundColor:"greenyellow", padding:'15px', margin:'5px 0'}}>
    lavel 2 component 2
    <input type="text"
           onChange={(e)=>setInputValue(e.target.value)}/>
    <button onClick={handleClick}>click me</button>
    <p>{clickedValue}</p>

  </div>
}
export default Lavel2Component2