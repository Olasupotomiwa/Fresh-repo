import Header from './components/Header'
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/About";
import Advertspage from './pages/Packages/Adverts'
import BuyFollowers from './pages/Packages/BuyFollowers'
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/social-media-adverts" element={<Advertspage />} />
        <Route path="/buy-followers" element={<BuyFollowers />} />
      </Routes>
    </>
  );
}

export default App;
