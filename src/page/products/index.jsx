import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER_NAMES } from "../../routers";
const Products = ()=>{
  const ss ="https://clck.ru/sLm4o"
  const router = useNavigate()
  
  const foo=()=>{
   
    console.log(ss);
    router(ROUTER_NAMES.MANAGE_USER)
  }
  return <div className='P-dashboard'>
    <div className="Centr">
    {/* Products */}
    <div className="G-company">
      <div className="G-img" style={{backgroundImage:`url(${ss})`}}></div>
      <h3>Lorem.</h3>
      <p>Lorem ipsum dolor sit.</p>
      <h4>cena 2000 dram</h4>
    <button onClick={foo}>Add Company</button>
    </div>
   
    </div>
  </div>
}
export default Products