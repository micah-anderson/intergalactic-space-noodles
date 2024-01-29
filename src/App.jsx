import { Routes, Route } from "react-router-dom";

import {
  NavBar,
  Footer,
  About,
  LandingPage,
  Music,
  Pics,
  Writing,
  Likes,
  Contact,
  NotFound,
} from "./components";


const App = () => {
  return (
    <div className="App w-full overflow-hidden">
      <NavBar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="music" element={<Music />} />
        <Route path="pics" element={<Pics />} />
        <Route path="writing" element={<Writing />} />
        <Route path="likes" element={<Likes />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
