import {combineReducers} from 'redux'
import GlobalSlice from "../state/global-slice/global-slice";
import GlobalReducer from "../state/global-data";

//
const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  globalSlice: GlobalSlice,
  globalData: GlobalReducer,
})

export default rootReducer