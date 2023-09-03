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
import ProtectedMarketPlace from "./ProtectedPages/ExistingPages/PpMarketplace";
import ProtectedFAQS from "./ProtectedPages/ExistingPages/PpFaqs";
import ProtectedAbout from "./ProtectedPages/ExistingPages/PpAbout";
import Homepage2 from "./ProtectedPages/Homepage/Homepage2";
import EarnPage from "./ProtectedPages/Earn/Earnhome";
import AdvertsTask from "./ProtectedPages/Earn/AdvertsTasks/AdvertsTasks";

//Adverts Tasks pages
import LinkAccount from "./ProtectedPages/Earn/AdvertsTasks/LinkAccount";
import IGtasks from "./ProtectedPages/Earn/AdvertsTasks/Instagramtask";
import TikTokTasks from "./ProtectedPages/Earn/AdvertsTasks/TiktokTasks";
import WhatsappTasks from "./ProtectedPages/Earn/AdvertsTasks/WhatsappTasks";
import FacebookTasks from "./ProtectedPages/Earn/AdvertsTasks/FacebookTasks";
import TwitterTasks from "./ProtectedPages/Earn/AdvertsTasks/TwitterTasks";
import AdsTaskPage from "ProtectedPages/Earn/AdvertsTasks/PerfomTasks";

//Engagement tasks pages
import FollowPagesTasks from "ProtectedPages/Earn/EngagementTasks/FollowPages";
import PerformEngagementTasksPage from "ProtectedPages/Earn/EngagementTasks/PerformEngagementTasks";
import CommentsTasksPage from "ProtectedPages/Earn/EngagementTasks/CommentsTasks";
import LikeTaskPage from "ProtectedPages/Earn/EngagementTasks/Likeposts";
import ReshareTasksPage from "ProtectedPages/Earn/EngagementTasks/ResharePosts";
import YouTubeTasks from "ProtectedPages/Earn/EngagementTasks/SuscribeYouTube";
import AudiomackTasks from "ProtectedPages/Earn/EngagementTasks/Audiomack";
import DiscordTasks from "ProtectedPages/Earn/EngagementTasks/DiscordTasks";
import Telegram from "ProtectedPages/Earn/EngagementTasks/TelegramTasks";
import GooglePlay from "ProtectedPages/Earn/EngagementTasks/GooglePlayTasks";
import JoinWhatsapp from "ProtectedPages/Earn/EngagementTasks/JoinWhatsapp";
import AppStore from "ProtectedPages/Earn/EngagementTasks/AppStore";

//Advertisements pages
import AdvertiseHomePage from "./ProtectedPages/Advertise/AdvertiseHome";
import AdvertiseTaskPage from "./ProtectedPages/Advertise/AdvertiseTasksPage";
import PostAdtasks from './ProtectedPages/Advertise/PostAdTasks'
import PostEngagemntTasks from "ProtectedPages/Advertise/PostEngagementTasks";

import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

const AuthenticatedRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/log-in" />;
};

const queryClient = new QueryClient();
function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLinked = useSelector((state) => state.linked.isLinked);



  const apiEndpoint = "https://jsonplaceholder.typicode.com/albums";
  return (
    <QueryClientProvider client={queryClient}>
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

          <Route
            path="/earn/tiktok-tasks"
            element={
              isLinked ? (
                <AuthenticatedRoute element={<TikTokTasks />} />
              ) : (
                <AuthenticatedRoute element={<LinkAccount />} />
              )
            }
          />

          <Route
            path="/earn/whatsapp-tasks"
            element={
              isLinked ? (
                <AuthenticatedRoute element={<WhatsappTasks />} />
              ) : (
                <AuthenticatedRoute element={<LinkAccount />} />
              )
            }
          />

          <Route
            path="/earn/facebook-tasks"
            element={
              isLinked ? (
                <AuthenticatedRoute element={<FacebookTasks />} />
              ) : (
                <AuthenticatedRoute element={<LinkAccount />} />
              )
            }
          />

          <Route
            path="/earn/twitter-tasks"
            element={
              isLinked ? (
                <AuthenticatedRoute element={<TwitterTasks />} />
              ) : (
                <AuthenticatedRoute element={<LinkAccount />} />
              )
            }
          />

          <Route
            path="/earn/perform-task/:taskId"
            element={<AuthenticatedRoute element={<AdsTaskPage />} />}
          />

          <Route
            path="/earn/engagement/follow-pages"
            element={<AuthenticatedRoute element={<FollowPagesTasks />} />}
          />

          <Route
            path="/earn/engagement/perform-task/:taskId"
            element={
              <AuthenticatedRoute element={<PerformEngagementTasksPage  />} />
            }
           
          />

          <Route
            path="/earn/engagement/comment-on-posts"
            element={<AuthenticatedRoute element={<CommentsTasksPage />} />}
          />

          <Route
            path="/earn/engagement/like-posts"
            element={<AuthenticatedRoute element={<LikeTaskPage  apiEndpoint={apiEndpoint} />} />}
          />

          <Route
            path="/earn/engagement/reshare-posts"
            element={<AuthenticatedRoute element={<ReshareTasksPage />} />}
          />

          <Route
            path="/earn/engagement/telegram-tasks"
            element={<AuthenticatedRoute element={<Telegram />} />}
          />

          <Route
            path="/earn/engagement/discord-tasks"
            element={<AuthenticatedRoute element={<DiscordTasks />} />}
          />

          <Route
            path="/earn/engagement/audiomack-tasks"
            element={<AuthenticatedRoute element={<AudiomackTasks />} />}
          />

          <Route
            path="/earn/engagement/youtube-tasks"
            element={<AuthenticatedRoute element={<YouTubeTasks />} />}
          />

          <Route
            path="/earn/engagement/google-play-tasks"
            element={<AuthenticatedRoute element={<GooglePlay />} />}
          />

          <Route
            path="/earn/engagement/join-whatsapp-tasks"
            element={<AuthenticatedRoute element={<JoinWhatsapp />} />}
          />

          <Route
            path="/earn/engagement/appstore-tasks"
            element={<AuthenticatedRoute element={<AppStore />} />}
          />

          <Route
            path="/advertise"
            element={<AuthenticatedRoute element={<AdvertiseHomePage />} />}
          />

          <Route
            path="/advertise/tasklists"
            element={<AuthenticatedRoute element={<AdvertiseTaskPage />} />}
          />

          <Route
            path="/advertise/create-tasks"
            element={<AuthenticatedRoute element={<PostAdtasks />} />}
          />


<Route
            path="/advertise/create-engagement-tasks"
            element={<AuthenticatedRoute element={<PostEngagemntTasks />} />}
          />
        </Routes>
      </>
    </QueryClientProvider>
  );
}

export default App;
