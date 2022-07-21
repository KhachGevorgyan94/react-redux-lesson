import React from "react";
import { useSelector  } from "react-redux/es/exports";

const HeaderComponent = () => {

  const profile=useSelector(state=>state.profileReducer.profile)

  return <header >
  <div className='P-user-header-info'>

    <div className='P-profile-image' style={{backgroundImage:`url('${profile.profileImage}')`}}></div>
    <div className='P-profile-info'>
      <h3>{profile.firstName? profile.firstName:"-"} {profile.lastName? profile.lastName:"-"}</h3>
      <h2>{profile.posrtion?profile.posrtion:"No position"}</h2>
    </div>
  </div>
  </header>
}

export default HeaderComponent