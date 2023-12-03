import React from "react";
import Hero from "./Components/Hero";
import Dashboardpage from "./Components/Dashboard/Dashboardpage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/dashboard" element={<Dashboardpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
