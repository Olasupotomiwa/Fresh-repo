import ScrollTop from "./components/scrolltop";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/About";
import Advertspage from "./pages/Packages/Adverts";
import Tasks from "./pages/Packages/Tasks";
import MarketPlace from "./pages/Market-Place";
import BuyFollowers from "./pages/Packages/BuyFollowers";
import SignUp from "./pages/SignUp";

import LoginPage from "./pages/Log-in";
import ForgotPasswordPage from "./pages/SignUp/ForgotPassword";
//Protected routes
import AuthenticatedHeader from "./components/AuthenticatedHeader";
import Dashboard from "./Dahboard/dashboard";
import ProtectedMarketPlace from "./ProtectedPages/PpMarketplace";
import ProtectedFAQS from "./ProtectedPages/PpFaqs";
import ProtectedAbout from "./ProtectedPages/PpAbout";
import Homepage2 from "./ProtectedPages/Homepage2";
import EarnPage from "./ProtectedPages/Earn/Earnhome";
import AdvertsTask from "./ProtectedPages/Earn/AdvertsTasks";
import LinkAccount from "./ProtectedPages/LinkAccount";
import IGtasks from "./ProtectedPages/Earn/Instagramtask";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

const AuthenticatedRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/log-in" />;
};
function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLinked = useSelector((state) => state.linked.isLinked);

  return (
    <>
      <ScrollTop />

      {isAuthenticated ? <AuthenticatedHeader /> : <Header />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/create-tasks" element={<Tasks />} />
        <Route path="/social-media-adverts" element={<Advertspage />} />
        <Route path="/buy-followers" element={<BuyFollowers />} />
        <Route path="/market-place" element={<MarketPlace />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route
          path="/dashboard"
          element={<AuthenticatedRoute element={<Dashboard />} />}
        />
        <Route
          path="/market-place2"
          element={<AuthenticatedRoute element={<ProtectedMarketPlace />} />}
        />
        <Route
          path="/homepage"
          element={<AuthenticatedRoute element={<Homepage2 />} />}
        />
        <Route
          path="/frequency-asked-questions"
          element={<AuthenticatedRoute element={<ProtectedFAQS />} />}
        />
        <Route
          path="/about2"
          element={<AuthenticatedRoute element={<ProtectedAbout />} />}
        />

        <Route
          path="earn"
          element={<AuthenticatedRoute element={<EarnPage />} />}
        ></Route>

        <Route
          path="earn/adverts-tasks"
          element={<AuthenticatedRoute element={<AdvertsTask />} />}
        />

        <Route
          path="earn/link-account"
          element={<AuthenticatedRoute element={<LinkAccount />} />}
        />

        <Route
          path="/earn/instagram-tasks"
          element={
            isLinked ? (
              <AuthenticatedRoute element={<IGtasks />} />
            ) : (
              <AuthenticatedRoute element={<LinkAccount />} />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
