// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./ui/Loader";

// Layouts
const PublicLayout = lazy(() => import("./ui/PublicLayout"));
const AppLayout = lazy(() => import("./ui/AppLayout"));

// Pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const CarpoolDashboard = lazy(() => import("./features/Carpool Details/CarpoolDashboard"));
const Chat = lazy(() => import("./features/chat/Chat"));
const FindRide = lazy(() => import("./features/Ride/FindRide"));
const OfferRide = lazy(() => import("./features/Ride/OfferRide"))
const Toast = lazy(() => import("./features/Notifications/Toast"));


function App() 
{
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="login" element={<Login />} />
          </Route>


          {/* App-specific Routes with Map or Fullscreen Views */}
          <Route path="/app" element={<AppLayout />}>
          <Route path="findRide" element={<FindRide />} />
          <Route path="offerRide" element={<OfferRide />} />
          <Route path="carpoolDashboard" element={<CarpoolDashboard />} />
          <Route path="chat" element={<Chat />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<PageNotFound />} />
          
        </Routes>
        <Toast />
      </Suspense>
    </BrowserRouter>
    
  );
}

export default App;
