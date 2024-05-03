import { useEffect } from "react";
import {Routes, Route, useNavigationType, useLocation,} from "react-router-dom";

import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/login/Login";
import ForgotPassword from './pages/auth/forgotpassword/ForgotPassword'
import EmailVerificationMessage from "./pages/auth/login/EmailVerificationMessage";
import ForgotPasswordMessage from "./pages/auth/forgotpassword/ForgotPasswordMessage";
import ResetPassword from "./pages/auth/passwordreset/ResetPassword";
import ResetPasswordMessage from "./pages/auth/passwordreset/ResetPasswordMessage";

import CreateEventPage from "./pages/event/create-event/CreateEventPage";

import Events1 from "./pages/Events1";
import SingleEvent from "./pages/event/events/SingleEvent";
import Events3 from "./pages/Events3";
import Explore from "./pages/Explore";
import Explore1 from "./pages/Explore1";
import Eventsww from "./pages/Eventsww";
import Events from "./pages/event/events/Events";
import Events21 from "./pages/Events21";
import Events31 from "./pages/event/create-event/CreateEvent";
import Events4 from "./pages/event/create-event/EventsPreview";
import SingleEvent22 from "./pages/SingleEvent22";
import Post from "./pages/Post";
import CommunityView from "./pages/community/CommunityView";
import Profile from "./pages/ProfilePersonal";
import Profile3 from "./pages/Profile3";
import Profile1 from "./pages/ProfileOverview2";
import Event1 from "./pages/event/events/RequestEvent";
import Events5 from "./pages/Events5";
import Events12 from "./pages/Events12";
import Event11 from "./pages/Event11";
import Event2 from "./pages/Event2";
import Event3 from "./pages/Event3";
import EventPreview from "./pages/event/create-event/EventsPreview";
import Event5 from "./pages/Event5";
import LandingPage from "./pages/LandingPage";
import Events6 from "./pages/Events6";
import Profile4 from "./pages/Profile4";
import Profile5 from "./pages/Profile5";
import Profile6 from "./pages/Profile6";
import Profile2 from "./pages/Profile2";
import Profile7 from "./pages/Profile7";
//import CreateEvent from "./pages/Event1";
import ProfileOverview from "./pages/ProfileOverview";
import ProfilePersonal from "./pages/ProfilePersonal";
import { EventContextProvider } from "./contexts/EventProvider";
import EventPage from "./pages/event/events/EventPage";
import RequestEvent from "./pages/event/events/RequestEvent";
import CreateCommunity from "./pages/community/CreateCommunity";
import { UserContextProvider } from "./contexts/userProvider";
import Registration from "./pages/event/event-registration/Registeration";
import RegistrationMessage from "./pages/event/event-registration/RegistrationMessage";
import ProfileEvent from "./pages/profile/event/ProfileEvent";
import ProfileCommunity from "./pages/profile/community/ProfileCommunity";
import CommunityList from "./pages/community/CommunityList";
import { CommunityContextProvider } from "./contexts/CommunityProvider";
import CommunityPage from "./pages/community/CommunityPage";

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
    <UserContextProvider>
    <CommunityContextProvider>  
    <EventContextProvider>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verification-message" element={<EmailVerificationMessage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-password-message" element={<ForgotPasswordMessage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/password-reset-message" element={<ResetPasswordMessage />} />

      <Route path="/events3" element={<Events1 />} />
      <Route path="/app/event/details" element={<SingleEvent />} />
      <Route path="/app/register-event" element={<Registration />} />
      <Route path="/app/registration-message" element={<RegistrationMessage />} />
      <Route path="/events5" element={<Events3 />} />
      <Route path="/app/create-event" element={<CreateEventPage />} />
      <Route path="/app/request-event" element={<RequestEvent />} />
      <Route path="/eventsww" element={<Events />} />
      <Route path="/events10" element={<Events1 />} />
      <Route path="/event1" element={<Event1 />} />
      <Route path="/event2" element={<Event2 />} />
      <Route path="/event3" element={<Event3 />} />
      <Route path="/app/event/event-preview" element={<EventPreview />} />
      <Route path="/event5" element={<Event5 />} />
      <Route path="/app/events" element={<EventPage />} />

      <Route path="/app/create-community" element={<CreateCommunity />} />
      <Route path="/app/community" element={<CommunityPage />} />
      
      
      <Route path="/explore1" element={<Explore1 />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/events6" element={<Events />} />
      <Route path="/events2" element={<Events1 />} />
      <Route path="/events1" element={<SingleEvent22 />} />
      <Route path="/events7" element={<Events3 />} />
      <Route path="/events8" element={<Events />} />
      <Route path="/post1" element={<Post />} />
      
      <Route path="/landing-page" element={<LandingPage />} />

      <Route path="/app/profile" element={<ProfileOverview />} />
      <Route path="/app/profile/personal-details" element={<ProfilePersonal />} />
      <Route path="/app/profile/events" element={<ProfileEvent />} />
      <Route path="/app/profile/communities" element={<ProfileCommunity />} />
      <Route path="/mentor-basic" element={<Profile3 />} />
      <Route path="/profile2" element={<Profile />} />
      <Route path="/pro" element={<Profile4 />} />
      <Route path="/mentor-premium" element={<Profile5 />} />
      <Route path="/profile5" element={<Profile6 />} />
      <Route path="/profile6" element={<Profile />} />
      <Route path="/profile7" element={<Profile7 />} />
    </Routes>
    </EventContextProvider>
    </CommunityContextProvider>
    </UserContextProvider>

  );
}
export default App;
