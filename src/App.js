import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CopyRight from "./components/copyRight/CopyRight";
import IntroContacts from "./components/IntroContacts/IntroContacts";
import MyFooter from "./components/myFooter/MyFooter";
import MyNav from "./components/myNav/MyNav";
import PopupWindow from "./components/pupupWindow/PopupWindow";
import AboutDoctor from "./pages/aboutDoctor/AboutDoctor";
import AboutUs from "./pages/aboutus/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Offers from "./pages/offers/Offers";
import Daily from "./pages/profilePages/daily/Daily";
import Profile from "./pages/profilePages/profile/Profile";
import Program from "./pages/profilePages/program/Program";
import Training from "./pages/profilePages/training/Training";
import Service from "./pages/service/Service";

function App() {
  return (
    <>
      <IntroContacts></IntroContacts>
      <MyNav></MyNav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/offers" element={<Offers></Offers>}></Route>
        <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/profile/program" element={<Program></Program>}></Route>
        <Route path="/profile/training" element={<Training></Training>}></Route>
        <Route path="/profile/daily" element={<Daily></Daily>}></Route>
      </Routes>
      <MyFooter></MyFooter>
      <CopyRight></CopyRight>


    </>
  );
}

export default App;
