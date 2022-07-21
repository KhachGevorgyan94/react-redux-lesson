import React, {useState} from "react";
import Lavel2Component2 from "../lavel-2-component-2";

const Lavel1Component2 = (props) => {
  // const [callBackValue, setCallBackValue] = useState('')

  // const callBack = (data)=>{
  //   console.log(data)
  //   setCallBackValue(data)
  //   console.log('clickes')
  //   props.callBack(data)
  // }

  return <div style={{backgroundColor:"saddlebrown", padding:'15px', margin:'5px 0'}}>
    lavel 1 component 2
    {/*<p>{callBackValue}</p>*/}
    <Lavel2Component2 callBack = {props.callBack}/>
  </div>
}
export default Lavel1Component2