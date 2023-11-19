import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/index";
import BookingPage from "./components/Booking/BookingPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="booking" element={<BookingPage />} />
          <Route
            path="*"
            element={
              <div style={{ textAlign: "center", padding: "50px" }}>
                <h1 style={{ color: "#dc3545" }}>404 - Page Not Found</h1>
                <p>
                  Sorry, the page you are looking for might be in another
                  castle.
                </p>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
