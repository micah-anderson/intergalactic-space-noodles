import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Logo, Logo4Burger } from "./index";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-gradient-to-r from-micahDarkestGrey to-micahBlack'>
      <div className='flex justify-between items-center h-24 max-w-screen-xxl mx-auto text-teal-100 p-4'>
        {/* Start of Top Navbar */}
        <Logo />
        <ul className='hidden m:flex'>
          <NavLink to='about'>
            {" "}
            <li className='p-4 cursor-pointer hover:text-micahPlantGreen hover:drop-shadow-2xl'>
              About
            </li>
          </NavLink>
          <NavLink to='/music'>
            <li className='p-4 cursor-pointer hover:text-micahPlantGreen hover:drop-shadow-2xl'>
              Music
            </li>
          </NavLink>
          <NavLink to='pics'>
            {" "}
            <li className='p-4 cursor-pointer hover:text-micahPlantGreen hover:drop-shadow-2xl'>
              Pics
            </li>
          </NavLink>
          <NavLink to='writing'>
            {" "}
            <li className='p-4 cursor-pointer hover:text-micahPlantGreen hover:drop-shadow-2xl'>
              Writing
            </li>
          </NavLink>
          <NavLink to='likes'>
            {" "}
            <li className='p-4 cursor-pointer hover:text-micahPlantGreen hover:drop-shadow-2xl'>
              Likes
            </li>
          </NavLink>
          <NavLink to='contact'>
            {" "}
            <li className='p-4 cursor-pointer hover:text-micahPlantGreen hover:drop-shadow-2xl'>
              Contact
            </li>
          </NavLink>
        </ul>
        {/* End of Top Navbar */}
        <div className='block m:hidden cursor-pointer' onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Start of Burger Nav*/}
        <ul
          className={
            nav
              ? "fixed left-0 top-0 border-r border-r-micahVibrantRed w-[25%] h-full bg-micahBlack ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }>
          <Logo4Burger />
          <NavLink to='/about'>
            {" "}
            <li className='p-4 cursor-pointer border-b border-blue-300 hover:text-blue-300'>
              About
            </li>
          </NavLink>
          <NavLink to='/music'>
            <li className='p-4 cursor-pointer border-b border-blue-400 hover:text-blue-400'>
              Music
            </li>
          </NavLink>
          <NavLink to='/pics'>
            {" "}
            <li className='p-4 cursor-pointer border-b border-blue-500 hover:text-blue-500'>
              Pics
            </li>
          </NavLink>
          <NavLink to='/writing'>
            {" "}
            <li className='p-4 cursor-pointer border-b border-blue-600 hover:text-blue-600'>
              Writing
            </li>
          </NavLink>
          <NavLink to='/likes'>
            {" "}
            <li className='p-4 cursor-pointer border-b border-blue-700 hover:text-blue-700'>
              Likes
            </li>
          </NavLink>
          <NavLink to='/contact'>
            {" "}
            <li className='p-4 cursor-pointer border-b border-blue-800 hover:text-blue-800'>
              Contact
            </li>
          </NavLink>
        </ul>
        {/* End of Burger Nav*/}
      </div>
    </div>
  );
};

export default Navbar;
