import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-black text-white">
      <h1 className="text-6xl font-extrabold text-center">
        <span className="text-blue-500">💩 Looks like we got a 404:</span> Page{" "}
        <span className="text-red-600">NOT</span> Found
      </h1>
      <NavLink to="/">
        <button>Back To Home</button>
      </NavLink>
      <h5></h5>
    </div>
  );
}

export default NotFound;