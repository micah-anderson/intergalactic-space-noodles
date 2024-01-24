import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Filler from "./pages/Filler";
import Music from "./pages/Music";
import Pics from "./pages/Pics";
import Writing from "./pages/Writing";
import Likes from "./pages/Likes";
import ContactMe from "./pages/ContactMe";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  return (
    <div className="App flex">
      <NavBar />
      <Routes>
        {/* Parent Route is Home */}
        <Route path="/" element={<Home />} />
        <Route index element={<Filler />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="music" element={<Music />} />
        <Route path="pics" element={<Pics />} />
        <Route path="writing" element={<Writing />} />
        <Route path="things-i-like" element={<Likes />} />
        <Route path="contact-me" element={<ContactMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
