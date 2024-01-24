import { Outlet } from 'react-router';
import React from 'react'
import NavBar from '../components/NavBar';


const Home = () => {
  return (
    <div>
      <main>
        <h1 className="text-red-600 text-9xl font-extrabold underline">Home Page (Welcome!)</h1>
      </main>
      <Outlet />
      <NavBar />
    </div>
  );
}

export default Home