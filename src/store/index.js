import { createStore } from 'redux'
import GlobalReducer from "../state/global-data";
// import rootReducer from './reducers'
//
// const store = createStore(rootReducer)
//
// export default store


const store = createStore(GlobalReducer)
export default store






