import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Signup1 from "./pages/Signup1";
import Login from "./pages/Login";
import Login1 from "./pages/Login1";
import Signup2 from "./pages/Signup2";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPassword1 from "./pages/ForgotPassword1";
import ForgotPassword2 from "./pages/ForgotPassword2";
import ForgotPassword3 from "./pages/ForgotPassword3";
import Events1 from "./pages/Events1";
import Events2 from "./pages/Events2";
import Events3 from "./pages/Events3";
import Explore from "./pages/Explore";
import Explore from "./pages/Explore1";
import Events from "./pages/Events";
import Events1 from "./pages/Events11";
import Events2 from "./pages/Events21";
import Events3 from "./pages/Events31";
import Events from "./pages/Events4";
import Post from "./pages/Post";
import Community from "./pages/Community";
import Community from "./pages/Community1";
import Profile from "./pages/Profile";
import Profile3 from "./pages/Profile3";
import Profile from "./pages/Profile1";
import Event1 from "./pages/Event1";
import Events from "./pages/Events5";
import Events1 from "./pages/Events12";
import Event1 from "./pages/Event11";
import Event2 from "./pages/Event2";
import Event3 from "./pages/Event3";
import Event4 from "./pages/Event4";
import Event5 from "./pages/Event5";
import LandingPage from "./pages/LandingPage";
import Events from "./pages/Events6";
import Profile4 from "./pages/Profile4";
import Profile5 from "./pages/Profile5";
import Profile6 from "./pages/Profile6";
import Profile from "./pages/Profile2";
import Profile7 from "./pages/Profile7";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signup1":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/login1":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password1":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password2":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password3":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/events3":
        title = "";
        metaDescription = "";
        break;
      case "/events4":
        title = "";
        metaDescription = "";
        break;
      case "/events5":
        title = "";
        metaDescription = "";
        break;
      case "/explore1":
        title = "";
        metaDescription = "";
        break;
      case "/explore":
        title = "";
        metaDescription = "";
        break;
      case "/events6":
        title = "";
        metaDescription = "";
        break;
      case "/events2":
        title = "";
        metaDescription = "";
        break;
      case "/events1":
        title = "";
        metaDescription = "";
        break;
      case "/events7":
        title = "";
        metaDescription = "";
        break;
      case "/events8":
        title = "";
        metaDescription = "";
        break;
      case "/post1":
        title = "";
        metaDescription = "";
        break;
      case "/community":
        title = "";
        metaDescription = "";
        break;
      case "/community1":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/profile1":
        title = "";
        metaDescription = "";
        break;
      case "/profile2":
        title = "";
        metaDescription = "";
        break;
      case "/event":
        title = "";
        metaDescription = "";
        break;
      case "/events9":
        title = "";
        metaDescription = "";
        break;
      case "/events10":
        title = "";
        metaDescription = "";
        break;
      case "/event1":
        title = "";
        metaDescription = "";
        break;
      case "/event2":
        title = "";
        metaDescription = "";
        break;
      case "/event3":
        title = "";
        metaDescription = "";
        break;
      case "/event4":
        title = "";
        metaDescription = "";
        break;
      case "/event5":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/events11":
        title = "";
        metaDescription = "";
        break;
      case "/profile3":
        title = "";
        metaDescription = "";
        break;
      case "/profile4":
        title = "";
        metaDescription = "";
        break;
      case "/profile5":
        title = "";
        metaDescription = "";
        break;
      case "/profile6":
        title = "";
        metaDescription = "";
        break;
      case "/profile7":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signup1" element={<Signup1 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login1" element={<Login1 />} />
      <Route path="/signup" element={<Signup2 />} />
      <Route path="/forgot-password1" element={<ForgotPassword />} />
      <Route path="/forgot-password2" element={<ForgotPassword1 />} />
      <Route path="/forgot-password3" element={<ForgotPassword2 />} />
      <Route path="/forgot-password" element={<ForgotPassword3 />} />
      <Route path="/events3" element={<Events1 />} />
      <Route path="/events4" element={<Events2 />} />
      <Route path="/events5" element={<Events3 />} />
      <Route path="/explore1" element={<Explore />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/events6" element={<Events />} />
      <Route path="/events2" element={<Events1 />} />
      <Route path="/events1" element={<Events2 />} />
      <Route path="/events7" element={<Events3 />} />
      <Route path="/events8" element={<Events />} />
      <Route path="/post1" element={<Post />} />
      <Route path="/community" element={<Community />} />
      <Route path="/community1" element={<Community />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile1" element={<Profile3 />} />
      <Route path="/profile2" element={<Profile />} />
      <Route path="/event" element={<Event1 />} />
      <Route path="/events9" element={<Events />} />
      <Route path="/events10" element={<Events1 />} />
      <Route path="/event1" element={<Event1 />} />
      <Route path="/event2" element={<Event2 />} />
      <Route path="/event3" element={<Event3 />} />
      <Route path="/event4" element={<Event4 />} />
      <Route path="/event5" element={<Event5 />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/events11" element={<Events />} />
      <Route path="/profile3" element={<Profile4 />} />
      <Route path="/profile4" element={<Profile5 />} />
      <Route path="/profile5" element={<Profile6 />} />
      <Route path="/profile6" element={<Profile />} />
      <Route path="/profile7" element={<Profile7 />} />
    </Routes>
  );
}
export default App;
