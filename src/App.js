import './App.css';

import Sidebar from "./components/sidebar";
import HeaderComponent from "./components/header-component";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./page/dashboard";
import Products from "./page/products";
import {ROUTER_NAMES} from "./routers";
import './assets/index.scss'
import AddProducts from "./page/add-products";
import ManageUser from "./page/manage-user";
import MainComponent from "./components/main-component";

function App() {
  return (
    <div className="App">
      <MainComponent/>

    </div>
  );
}

export default App;
