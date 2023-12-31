import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/index";
import ConfirmedBooking from "./components/Booking/ConfirmedBooking";
import NotFound from "./components/404/index.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="confirmed-booking" element={<ConfirmedBooking />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
