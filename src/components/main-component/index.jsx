import React, {useState} from "react";
import Lavel1Component from "../lavel-1-component";
import Lavel1Component2 from "../lavel-1-component-2";

const  MainComponent = ()=>{

  const [callBackValue, setCallBackValue] = useState('')

  const callBack = (data)=>{
    console.log(data)
    setCallBackValue(data)
    console.log('clickes')
  }

  return <div style={{width:'100%', backgroundColor: "darkgrey", padding:'20px' }}>
    Main Component
    <p>{callBackValue}</p>

    <Lavel1Component callBackValue = {callBackValue}/>
    <Lavel1Component2 callBack={callBack}/>
  </div>
}
export default MainComponent