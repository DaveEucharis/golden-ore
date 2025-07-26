import "./App.css";

import { Routes, Route } from "react-router";

import Home from "./components/Home";
import Application from "./components/Application";
import Submitted from "./components/Submitted";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/submitted" element={<Submitted />} />
      </Routes>
    </>
  );
};

export default App;
