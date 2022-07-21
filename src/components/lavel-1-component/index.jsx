import React from "react";
import Lavel2Component1 from "../lavel-2-component-1";

const Lavel1Component = (props) => {
  return <div style={{backgroundColor:"saddlebrown", padding:'15px', margin:'5px 0'}}>
    lavel 1 component 1

    <Lavel2Component1 callBackValue={props.callBackValue}/>
  </div>
}
export default Lavel1Component