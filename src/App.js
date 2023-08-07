import Header from './components/Header'
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/About";
import Advertspage from './pages/Packages/Adverts'
import Tasks from "./pages/Packages/Tasks";
import MarketPlace from './pages/Market-Place'
import BuyFollowers from './pages/Packages/BuyFollowers'
import SignUp from "./pages/SignUp";
import Verified from "./pages/SignUp/Verified";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/create-tasks" element={<Tasks />} />
        <Route path="/social-media-adverts" element={<Advertspage />} />
        <Route path="/buy-followers" element={<BuyFollowers />} />
        <Route path="/market-place" element={<MarketPlace />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verified" element={<Verified />} />
      </Routes>
    </>
  );
}

export default App;
