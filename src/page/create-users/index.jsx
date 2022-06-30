import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";


export default () => {

  const dispatch = useDispatch()


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  })


  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  const handleClick = () => {
    if (formData.address && formData.email && formData.lastName && formData.firstName) {
      dispatch({type: 'ADD_USER', payload: formData})
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
      })
    }
  }


  return <div>
    Create users page


    <div>
      <input value={formData.firstName} type="text" name='firstName' placeholder='firstName' onChange={handleChange}/>
      <input value={formData.lastName} type="text" name='lastName' placeholder='lastName' onChange={handleChange}/>
      <input value={formData.email} type="text" name='email' placeholder='email' onChange={handleChange}/>
      <input value={formData.address} type="text" name='address' placeholder='address' onChange={handleChange}/>
    </div>


    <button onClick={handleClick}>Crete user</button>
  </div>
}
