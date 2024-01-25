import { Routes, Route } from "react-router-dom";

import {
  NavBar,
  Footer,
  AboutMe,
  LandingPage,
  Filler,
  Music,
  Pics,
  Writing,
  Likes,
  ContactMe,
  NotFound,
} from "./components";

const App = () => {
  return (
    <div className="App bg-micahDarkestGrey w-full overflow-hidden">
      <NavBar />
      <Routes>
        {/* Parent Route is Home */}
        <Route path="/" element={<LandingPage />} />
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
