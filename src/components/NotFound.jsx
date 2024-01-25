import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const NotFound = () => {
  return (
    <div className="bg-black text-white">
      <h1 className="text-6xl font-extrabold text-center">
        <span className="text-blue-500">💩 Looks like we got a 404:</span> Page{" "}
        <span className="text-red-600">NOT</span> Found
      </h1>
      <NavLink to="/">
        <button>Back To Landing Page</button>
      </NavLink>
      <h5>Or stay as long as you want...</h5>
      <Footer />
    </div>
  );
};

export default NotFound;
