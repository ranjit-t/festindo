import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import Events from "./Pages/EventsPage/Events";
import PageHeader from "./Layouts/PageHeader";
import Footer from "./Layouts/Footer/Footer";

function App() {
  const [country, setcountry] = useState<string>("");

  return (
    <Router>
      <div className="App ">
        <div className="min-h-[75vh]">
          <PageHeader />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
