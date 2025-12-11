import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Landing";
import CryptoPayment from "./CryptoPayment";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/crypto-payment" element={<CryptoPayment />} />
      </Routes>
    </BrowserRouter>
  );
}
