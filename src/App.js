import Home from "./routes/Home";
import React from 'react';
import Reservations from "./routes/Reservations";
import { Route, Routes } from "react-router-dom";
import Confirmation from "./routes/Confirmation"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
}

export default App;
