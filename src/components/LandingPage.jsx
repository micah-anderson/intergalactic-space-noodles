import { AboutPreview, PreviewCards } from "./index.js";

const LandingPage = () => {
  return (
    <div className='text-micahDarkestGrey'>
      <div className='bg-gradient-to-r from-micahDarkestGrey to-micahBlack max-w-[screen.xxl] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-blue-500 m:text-2xl s:text-xl font-bold p-2 mt-40 hover:drop-shadow-4xl'>
          Hey whatsup 👋
        </p>
        <h1 className='text-white m:text-7xl s:text-6xl text-4xl textfont-bold m:py-6 s:py-5 hover:drop-shadow-4xl'>
          I'm <span className='text-micahPlantGreen font-bold'>Micah</span>
        </h1>
        <div className='flex justify-center items-center'>
          <p className='m:text-5xl s:text-4xl text-xl font-bold py-4 hover:drop-shadow-4xl text-gray-700'>
            A{" "}
            <span className='font-bold text-white hover:text-micahVividSkyBlue'>
              Frontend{" "}
            </span>
            <span className='font-bold hover:text-purple-500'>Developer</span>
          </p>
        </div>
        <p className='m:text-2xl text-xl font-bold text-gray-500 hover:drop-shadow-4xl'>
          My special interests are Web3, Blockchain, Web Privacy, Security Systems and
          Sustainable Energy
        </p>
        <button className='bg-micahPlantGreen w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:drop-shadow-4xl'>
          Learn more
        </button>
      </div>
      <AboutPreview />
      <PreviewCards />
    </div>
  );
};

export default LandingPage;