import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className='cursor-pointer hover:p-0 hover:bg-none9-'>
      <NavLink to='/'>
        <h1 className='w-full text-3xl font-jetbrains font-bold text-micahVividSkyBlue border border-micahPlantGreen'>
          <span className='p-2 text-micahVibrantYellow hover:uppercase hover:text-micahPink'>
            Anderson
          </span>
        </h1>
      </NavLink>
    </div>
  );
};

const Logo4Burger = () => {
  return (
    <div className='hover:m-0'>
      <NavLink to='/'>
        <h1 className='w-full text-3xl font-jetbrains font-bold text-micahVividSkyBlue m-4'>
          <span className='hover:uppercase hover:text-micahVibrantOrange underline underline-offset-8 hover:underline-offset-4'>
            mi
          </span>
          <span className='text-micahVibrantYellow hover:uppercase hover:text-micahPlantGreen border-x-micahVividSkyBlue'>
            cah
          </span>
          <span className=' hover:text-micahVibrantPink'>.</span>
        </h1>
      </NavLink>
    </div>
  );
};
export { Logo, Logo4Burger };
