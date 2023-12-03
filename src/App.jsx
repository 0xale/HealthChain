import React from "react";
import Hero from "./Components/Hero";
import Dashboardpage from "./Components/Dashboard/Dashboardpage";
import MyGridLayout from "./Components/MyGridLayout";
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
          <Route path="/my" element={<MyGridLayout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
