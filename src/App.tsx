import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import Events from "./Pages/EventsPage/Events";
import PageHeader from "./Layouts/PageHeader";
import Footer from "./Layouts/Footer/Footer";
import OrgDashboard from "./Pages/OrgDashboard/OrgDashboard";
import Profile from "./Pages/Profile/Profile";

function App() {
  const [country, setcountry] = useState<string>("");
  const [isOrg, setIsOrg] = useState<boolean>(true);

  return (
    <Router>
      <div className="App ">
        <div className="min-h-[75vh]">
          <PageHeader isOrg={isOrg} />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/dashboard" element={<OrgDashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
