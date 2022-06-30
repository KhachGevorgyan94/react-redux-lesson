import './App.css';
import {Route, Link, Routes} from "react-router-dom";
import Users from "./page/users";

import CreateUsers from "./page/create-users";


function App() {
  // const token = useSelector(state=>state.auth.token)
  // console.log(token)
  // const dispatch = useDispatch()
  // const handleChange  = (e)=>{
  //   dispatch({type:'SET_TOKEN', payload:e.target.value})
  // }

  return (
      <div>
        {/*Hello  redux*/}
        {/*<input type="text"  onChange={handleChange} />*/}

        {/*<p>{token}</p>*/}

        {/*<Tokencomponent/>*/}

        <ul>
          <li><Link to={'/users'}>Users List</Link></li>
          <li><Link to={'/create-users'}> Create User</Link></li>
        </ul>

        <Routes>
          <Route path={'/users'} element={<Users/>}></Route>
          <Route path={'/create-users'} element={<CreateUsers/>}></Route>
        </Routes>


      </div>
  );
}

export default App;
