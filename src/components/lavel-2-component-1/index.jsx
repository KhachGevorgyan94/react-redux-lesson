import React from "react";
import {useSelector} from "react-redux";
import {ProfileReducer} from "../../state/profile";

const Lavel2Component1 = (props) => {
  const reduxValue = useSelector(state=>state.profileReducer.callBackValue)

  return <div style={{backgroundColor:"green", padding:'15px', margin:'5px 0'}}>
    lavel 2 component 1

    <p>{reduxValue}</p>
  </div>
}
export default Lavel2Component1