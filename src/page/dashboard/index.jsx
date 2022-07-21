import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER_NAMES } from "../../routers";
import { useSelector } from "react-redux/es/exports";

const Dashboard = () => {

  const router = useNavigate()

  const profile = useSelector(state => state.profileReducer.profile)

   //console.log(profile);
  const editUserPage = () => {
    router(ROUTER_NAMES.MANAGE_USER)
  }


  return <div className='P-dashboard'>
    <p>dashboards</p>
    <div className="G-center">
      <div div className='P-S-image ' style={{ backgroundImage: `url('${profile.profileImage}')` }}></div>
      <div style={{ margin: "15px auto" }}>
        <p>Fast Name -{profile.firstName? profile.firstName: ''}</p>
        <p> Last Name - {profile.lastName? profile.lastName: ''}</p>
        <p> Age - {profile.age? profile.age: ''}</p>
        <p> Gender -{profile.gender? profile.gender: ''}</p>
        <p> Posrtion- {profile.posrtion? profile.posrtion: ''}</p>
        <p> Email- {profile.email? profile.email: ''}</p>
        <p> Phone Number - {profile.phoneNumber? profile.phoneNumber: ''}</p>

        <p> Date Of Birth - {profile.dateOfBirth? profile.dateOfBirth: ''}</p>


      </div>
    </div>
    <button onClick={editUserPage} className="ADD-Users"> Edit user</button>

  </div>
}
export default Dashboard