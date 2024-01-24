import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg h-screen">
      <NavLink to="/">
        <i className="border-lime-500 text-lg">Home</i>
      </NavLink>
      <NavLink to="about-me">
        <i className="border-lime-500 text-lg">🙂</i>
      </NavLink>
      <NavLink to="music">
        <i className="border-lime-500 text-lg">🎵</i>
      </NavLink>
      <NavLink to="pics">
        <i className="border-lime-500 text-lg">📷</i>
      </NavLink>
      <NavLink to="writing">
        <i className="border-lime-500 text-lg">✍️</i>
      </NavLink>
      <NavLink to="things-i-like">
        <i className="border-lime-500 text-lg">😻</i>
      </NavLink>
      <NavLink to="contact-me">
        <i className="border-lime-500 text-lg">📧</i>
      </NavLink>
    </nav>
  );
}


export default NavBar;