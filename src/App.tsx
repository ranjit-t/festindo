import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import Events from "./Pages/EventsPage/Events";
import PageHeader from "./Layouts/PageHeader";
import Footer from "./Layouts/Footer/Footer";
import OrgDashboard from "./Pages/OrgDashboard/OrgDashboard";
import Profile from "./Pages/Profile/Profile";
import Signup from "./Pages/Connections/Signup";
import Login from "./Pages/Connections/Login";
import useUserChange from "./Firebase/useUserChange";

function App() {
  const [country, setcountry] = useState<string>("");
  const [isOrg, setIsOrg] = useState<boolean>(false);

  let signedUser = useUserChange();

  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    setIsConnected(signedUser?.uid ? true : false);
    setIsOrg(signedUser?.isOrganiser || false);
  }, [signedUser]);

  return (
    <Router>
      <div className="App ">
        <div className="min-h-[75vh]">
          <PageHeader isOrg={isOrg} isConnected={isConnected} />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/event-management" element={<OrgDashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
