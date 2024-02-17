import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavberCompont from "./navberComponet/NavberCompont";
import Dashborad from "./componet/Dashborad";
import Product from "./componet/Product";
import Customer from "./componet/Customer";
import Income from "./componet/Income";
import Promote from "./componet/Promote";
import HelpComponet from "./componet/HelpComponet";
function App() {
  return (
    <>
 
      <BrowserRouter>
      <NavberCompont>
      <Routes>
          <Route path="/" element={<Dashborad />} />
          <Route path="/Dashborad" element={<Dashborad />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Customer" element={<Customer />} />
          <Route path="/Income" element={<Income />} />
          <Route path="/Promote" element={<Promote />} />
          <Route path="/HelpComponet" element={<HelpComponet />} />
        </Routes>
      </NavberCompont>
    
      
      </BrowserRouter>
    </>
  );
}

export default App;
