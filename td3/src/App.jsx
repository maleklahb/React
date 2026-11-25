import Header from "./componants/Header/Header";
import Destinations from "./componants/Destinations/Destinations";
import Reservation from "./componants/Reservation/Reservation";
import Login from "./componants/Login/Login";
import Footer from "./componants/Footer/Footer";
import Appropos from "./componants/Apropos/Apropos";
import Accueil from "./componants/Accueil/Accueil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/apropos" element={<Appropos />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;