import {combineReducers} from 'redux'

import AuthReducer from "../state/auth";
import ProductsReducer from "../state/products";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  auth: AuthReducer,
  products: ProductsReducer,
})

export default rootReducer