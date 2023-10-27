import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import Events from "./Pages/EventsPage/Events";
import PageHeader from "./Layouts/PageHeader";
import Footer from "./Layouts/Footer/Footer";
import Profile from "./Pages/MyProfile/Profile";
import Signup from "./Pages/Connections/Signup";
import Login from "./Pages/Connections/Login";
import CountryPopup from "./Layouts/CountryPopup";
import SingleEvent from "./Pages/SingleEvent/SingleEvent";
import Notfound from "./Pages/NotFound/NotFound";
import MyDashboard from "./Pages/MyDashboard/MyDashboard";
import UserProfile from "./Pages/UserProfile/OrganiserProfile";
import useUserChange from "./Firebase/useUserChange";
import CreateEvent from "./Pages/CreateEvent/CreateEvent";

function App() {
  const { userLoading } = useUserChange();

  if (userLoading) {
    return (
      <div className="lds-dual-ring flex justify-center w-screen mt-[40vh] sm:mt-0 sm:items-center h-screen"></div>
    );
  }
  return (
    <Router>
      <div className="App ">
        <CountryPopup />
        <div className="min-h-[75vh]">
          <PageHeader />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/events" element={<Events />} />
            <Route
              path="/event/:pageCountry/:pageTitle/:pageId"
              element={<SingleEvent />}
            />
            <Route path="/user/:uid" element={<UserProfile />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/event-management" element={<MyDashboard />} />
            <Route path="/event-management/create" element={<CreateEvent />} />
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
