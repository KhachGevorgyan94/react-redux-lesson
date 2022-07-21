import { profileActions } from "./actions";

const initialState ={
    profile:{
        firstName: "",
        lastName:"",
        age:"",
        gender: null,
        posrtion:"",
        email:"",
        phoneNumber:"",
        profileImage:"",
        dateOfBirth:null

    }
}


export const ProfileReducer =(state=initialState, action)=>{
switch (action.type) {
    case profileActions.MANAGE_USER_INFO:{
        // console.log(action);
        return{...state,profile:{...state.profile,...action.payload}}
    }
    case profileActions.MANAGE_USER_GENDER:{
    
        return{...state}
    }
    case profileActions.MANAGE_USER_PROFILE_IMAGE:{
    
        return{...state}
    }
    
    case profileActions.MANAGE_USER_DATE_BIRTH:{
    
        return{...state}
    }

    default:
        return state;
}

}
