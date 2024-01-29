import { AboutPreview, PreviewCards } from "./index.js";

const LandingPage = () => {
  return (
    <div className='text-micahDarkestGrey'>
      <div className='bg-gradient-to-r from-micahDarkestGrey to-micahBlack max-w-[screen.xxl] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-micahPlantGreen m:text-2xl s:text-xl font-bold p-2 mt-40 hover:drop-shadow-4xl'>
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

{
  /* <Typed
            className="m:text-5xl s:text-4xl text-xl font-bold m:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */
}

//     <div
//       className="relative min-h-screen bg-no-repeat bg-cover"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="bg-micahBlack bg-opacity-50 min-h-screen">

//         <header className="text-white body-font">
//           <div className="container mx-auto flex flex-wrap p-5 flex-col m:flex-row items-center">
//             <nav className="m:ml-auto">
//               {/* Additional navigation, if necessary */}
//             </nav>
//           </div>
//         </header>

//         <main className="px-4 py-24">
//           <div className="container mx-auto flex flex-col items-center">
//             <h1 className="text-6xl text-center font-custom leading-none text-white mb-4">
//               I'm going <span className="text-micahVibrantGreen"> outside</span>
//             </h1>
//             <p className="text-xl text-gray-300 mb-12 max-w-lg">
//               And I'm
//               <span className="text-micahVibrantPink"> decisively</span>, going
//               to <span className="text-micahVibrantBlue"> chill</span>
//                And I'm really really excited for that. It's just so much
//               fun having so much fun!
//             </p>
//             {/* Additional content here - spaced out for other text */}
//             <p className="text-base font text-gray-400 max-w-lg text-center">
//               {/* Placeholder for additional text */}
//             </p>
//             {/* Maybe I will add more text or buttons here */}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };
