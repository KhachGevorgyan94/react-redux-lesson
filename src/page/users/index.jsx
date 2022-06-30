import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Users = () => {
  const usersList = useSelector(state => state.usersList)
  console.log(usersList)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch({type: 'GET_USERS_LIST_STORAGE', payload: ''})
  }, [])


  const deleteUser = (id) => {
    dispatch({type:'DELETE_USER', payload:id})
  }


  return <div>
    {usersList.length? usersList.map((item, index) => {
      return <div key={index} className='P-box'>
        <h3>{item.firstName} {item.lastName}</h3>
        <h2>{item.email}</h2>
        <h4>{item.address}</h4>
        <button onClick={() => deleteUser(item.id)}>Delete</button>
      </div>
    }) : <div>Users List was empty</div>}
  </div>
}

export default Users