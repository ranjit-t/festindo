import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import Events from "./Pages/EventsPage/Events";
import PageHeader from "./Layouts/PageHeader";
import Footer from "./Layouts/Footer/Footer";
import Profile from "./Pages/Profile/Profile";
import Signup from "./Pages/Connections/Signup";
import Login from "./Pages/Connections/Login";
import useUserChange from "./Firebase/useUserChange";
import CountryPopup from "./Layouts/CountryPopup";
import SingleEvent from "./Pages/SingleEvent/SingleEvent";
import Notfound from "./Pages/NotFound/NotFound";
import OrganiserProfile from "./Pages/OrganiserProfile/OrganiserProfile";
import MyDashboard from "./Pages/MyDashboard/MyDashboard";

function App() {
  const [isOrg, setIsOrg] = useState<boolean>(false);

  let signedUser = useUserChange();

  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    setIsConnected(signedUser?.uid ? true : false);
    setIsOrg(signedUser?.isOrganiser || false);
  }, [signedUser]);

  const [pageDelay, setPageDelay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageDelay(false);
    }, 1000);
  }, [pageDelay]);

  if (pageDelay) {
    return (
      <div className="lds-dual-ring flex justify-center w-screen mt-[40vh] sm:mt-0 sm:items-center h-screen"></div>
    );
  }
  return (
    <Router>
      <div className="App ">
        <CountryPopup />
        <div className="min-h-[75vh]">
          <PageHeader
            isOrg={isOrg}
            isConnected={isConnected}
            setPageDelay={setPageDelay}
          />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/events" element={<Events />} />
            <Route
              path="/event/:pageCountry/:pageTitle/:pageId"
              element={<SingleEvent />}
            />
            <Route path="/organizer/:uid" element={<OrganiserProfile />} />

            <Route path="/signup" element={<Signup />} />
            <Route
              path="/Login"
              element={<Login setPageDelay={setPageDelay} />}
            />
            <Route path="/event-management" element={<MyDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
