import axios from "axios";
import {ApiUrl} from "../../routers";




export const RegistrationUser = async (data) =>{
  return await axios.post(`${ApiUrl}userRegistration`, data )
}

export const DeleteUser = (id) => {
  return  axios.delete(`${ApiUrl}userRegistration/${id}`, )
}

export const GetAccountsList = () => {
  return  axios.get(`${ApiUrl}userRegistration`, )
}
export const GetMyAccount = (id) => {
  return  axios.get(`${ApiUrl}userRegistration/${id}`, ).catch(err=>err)
}