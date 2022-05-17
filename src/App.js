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
import Filter2 from "./Components/JdMaster/Filter2";
import Report from "./Components/Report/Report";
import Client from "./Components/Client/Client";
import Freelance from "./Components/Freelance/Freelance";
import ClientAgreement from "./Components/ClientAgreement/ClientAgreement";
import LandingPage from "./Components/LandingPage/LandingPage";
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
      <Route path="/Filter2" element={<Filter2/>}/>
      <Route path='/report' element={<Report/>}/>
      <Route path="/client" element={<Client/>}/>
      <Route path="/freelance" element={<Freelance/>}/>
      <Route path="/client-agreement" element={<ClientAgreement/>}/>
      <Route path="/landing-page" element={<LandingPage/>}/>

    </Routes>
  </BrowserRouter>
    </>
  );
};

export default App;