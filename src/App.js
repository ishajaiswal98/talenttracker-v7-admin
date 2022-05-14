import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Components/Login/Login";
import LogOut from "./Components/Login/LogOut";
import People from "./Components/People/People";
import RecruiterMaster from "./Components/RecruiterMaster/RecruiterMaster";
import JdMaster from "./Components/JdMaster/JdMaster";
import Filter from './Components/Filter/Filter'
import UserIdChang from "./Components/UserIdChang/UserIdChang";
import UserDashboard from "./Components/UserDashboard/UserDashboard";
function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashbaord" element={<Dashboard />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/People" element={<People />} />
      <Route path="/RecruiterMaster" element={<RecruiterMaster/>} />
      <Route path="/JdMaster" element={<JdMaster/>}/>
      <Route path="/Filter" element={<Filter/>}/>
      <Route path="/useridlevl" element={<UserIdChang/>}/>
      <Route path="/userdashboard" element={<UserDashboard/>}/>
    </Routes>
  </BrowserRouter>
    </>
  );
};

export default App;