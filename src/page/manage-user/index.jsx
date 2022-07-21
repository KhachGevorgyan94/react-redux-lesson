import React, { useEffect, useState } from "react";
import { useSelector, useDispatch  } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { ROUTER_NAMES } from "../../routers";
import { profileActions } from "../../state/users/actions";

const ManageUser = () => {
  const profile=useSelector(state=>state.profileReducer.profile)
const dispatch = useDispatch()
const navigate=useNavigate()

 const [user, setUsersData]=useState({
  firstName: "",
  lastName:"",
  age:"",
  gender: null,
  posrtion:"",
  email:"",
  phoneNumber:"",
  profileImage:"",
  dateOfBirth:null

})
  console.log(profile);
  const hendelChange=(e)=>{
    // console.log(e.target.name, e.target.value);
    setUsersData({...user,[e.target.name]:e.target.value})
    //debugger
    
  
  }
  const savechange=()=>{
    if(validate()){
      dispatch({type:profileActions.MANAGE_USER_INFO,payload:user})
      navigate(ROUTER_NAMES.DASHBOARD)
    }

  }

  const validate=()=>{
      let isValidate = true

      if(!user.firstName.length &&!user.lastName.length &&!user.lastName.length &!user.age.length &&!user.gender.length &&!user.posrtion.length &&!user.email.length &&!user.phoneNumber.length &&!user.profileImage.length &&!user.dateOfBirth.length   ){
       isValidate = false

      }


    return isValidate
  }
  
  const uploadImage = (e) => {
    const element = e.currentTarget
    const fileList = element.files;
    if (fileList && fileList?.length) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setUsersData({...user,profileImage:reader.result})
        // setImage(reader.result)
      });
      reader.readAsDataURL(fileList[0]);
    }
  }


  return <div className='P-manage-user'>
    <div className="P-manage-form">
      <p>file</p>
      <label>
        <input type="file" onChange={uploadImage} />

      </label>
    </div>
    <div className="P-manage-form">
      <p>First Name</p>
      <label >
        <input type="text" onChange={hendelChange} name="firstName" className="P-input" placeholder="First Name" />

      </label>
    </div>
    <div className="P-manage-form">
      <p>Last Name</p>
      <label >
        <input type="text"  onChange={hendelChange} name="lastName" className="P-input" placeholder="Last Name" />

      </label>
    </div>
    <div className="P-manage-form">
      <p>Age</p>
      <label >
        <input type="number" onChange={hendelChange}  name="age" className="P-input" placeholder="Age" />

      </label>
    </div>
    <div className="P-manage-form">
      <p>Gender</p>
      <div className="P-gender-form">
        <label >
          <input type="radio" onChange={hendelChange}  name="gender"  value="Male"/>
          <p>Male</p>

        </label>
        <label >
          <input type="radio"  onChange={hendelChange}  name="gender" value="Famele"/>
          <p>Famele</p>

        </label>
      </div>
      
      

    </div>
    <div className="P-manage-form">
      <p>Position</p>
      <label>
        <input type="text"  onChange={hendelChange} name="posrtion" className="P-input"  placeholder="posrtion" />

      </label>
    </div>
    <div className="P-manage-form">
      <p>Email</p>
      <label>
        <input type="text" onChange={hendelChange} name="email" className="P-input"  placeholder="Email" />

      </label>
    </div>
    <div className="P-manage-form">
      <p>Phone Number</p>
      <label>
        <input type="number"  onChange={hendelChange} name="phoneNumber" className="P-input" placeholder="Phone Number" />

      </label>
    </div>
    <div className="P-manage-form">
      <p>Date</p>
      <label>
        <input type="date"   onChange={hendelChange} name="dateOfBirth" className="P-input" placeholder="Date" />

      </label>
    </div>
    <div className="P-manage-form">
      <button  onClick={savechange}>Save changes</button>
    </div>
    





  </div>
}

export default ManageUser