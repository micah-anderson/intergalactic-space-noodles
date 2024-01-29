import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const NotFound = () => {
  return (
    <div className='bg-black text-white h-screen flex flex-col justify-center items-center pt-80'>
      <h1 className='text-6xl font-extrabold text-center'>
        <span className='text-blue-500'>💩 Looks like we got a 404:</span> Page{" "}
        <span className='text-red-600'>NOT</span> Found
      </h1>
      <NavLink to='/'>
        <button className='mt-40 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-800'>
          Back To Main Page
        </button>
      </NavLink>
    </div>
  );
};

export default NotFound;
