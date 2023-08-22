import ScrollTop from './components/scrolltop'
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/About";
import Advertspage from "./pages/Packages/Adverts";
import Tasks from "./pages/Packages/Tasks";
import MarketPlace from "./pages/Market-Place";
import BuyFollowers from "./pages/Packages/BuyFollowers";
import SignUp from "./pages/SignUp";
import Verified from "./pages/SignUp/Verified";
import LoginPage from "./pages/Log-in";
import ForgotPasswordPage from "./pages/SignUp/ForgotPassword";
import Dashboard from "./Dahboard/dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
    <ScrollTop /> 
     
      {isAuthenticated ?  null:  <Header /> }
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/create-tasks" element={<Tasks />} />
        <Route path="/social-media-adverts" element={<Advertspage />} />
        <Route path="/buy-followers" element={<BuyFollowers />} />
        <Route path="/market-place" element={<MarketPlace />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/log-in" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/log-in" />}
        />
      </Routes>
    </>
  );
}

export default App;
