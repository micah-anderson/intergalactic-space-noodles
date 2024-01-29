import { ImSoundcloud2 } from "react-icons/im";
import { FaSpotify, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='max-w-screen-xxl mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-black'>
      <div className='text-center'>
        <h1 className='w-full text-3xl font-bold text-micahPlantGreen'>
          Thanks 4 the visit.
        </h1>
        <p className='py-4'>Check out some of the stuff below. If you feel like it.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <ImSoundcloud2
            size={45}
            className="hover:bg-none hover:rounded-lg hover:text-micahPlantGreen hover:shadow-[0_0_10px_theme('colors.white')]"
          />
          <FaInstagram
            size={45}
            className="hover:bg-none hover:rounded-lg hover:text-micahPlantGreen hover:shadow-[0_0_10px_theme('colors.white')]"
          />
          <FaSquareXTwitter
            size={45}
            className="hover:bg-none hover:rounded-lg hover:text-micahPlantGreen hover:shadow-[0_0_10px_theme('colors.white')]"
          />
          <FaGithubSquare
            size={45}
            className="hover:bg-none hover:rounded-lg hover:text-micahPlantGreen hover:shadow-[0_0_10px_theme('colors.white')]"
          />
          <FaSpotify
            size={45}
            className="hover:bg-none hover:rounded-lg hover:text-micahPlantGreen hover:shadow-[0_0_10px_theme('colors.white')]"
          />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-gray-400 hover:text-red-400'>Audio</h6>
          <ul>
            <li className='py-2 text-sm hover:text-red-500'>Tracks</li>
            <li className='py-2 text-sm hover:text-red-600'>Gear</li>
            <li className='py-2 text-sm hover:text-red-700'>Colab</li>
            <li className='py-2 text-sm hover:text-red-800'>Licence</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400 hover:text-purple-400'>Support</h6>
          <ul>
            <li className='py-2 text-sm hover:text-purple-500'>Kofi</li>
            <li className='py-2 text-sm hover:text-purple-600'>Patreon</li>
            <li className='py-2 text-sm hover:text-purple-700'>Wise</li>
            <li className='py-2 text-sm hover:text-purple-800'>Paypal</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400 hover:text-orange-400'>Media</h6>
          <ul>
            <li className='py-2 text-sm hover:text-orange-500'>Pics</li>
            <li className='py-2 text-sm hover:text-orange-600'>Vids</li>
            <li className='py-2 text-sm hover:text-orange-700'>VLOG</li>
            <li className='py-2 text-sm hover:text-orange-800'>Random</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400 hover:text-blue-400'>Projects</h6>
          <ul>
            <li className='py-2 text-sm hover:text-blue-500'>YSA*=</li>
            <li className='py-2 text-sm hover:text-blue-600'>Wthawt?</li>
            <li className='py-2 text-sm hover:text-blue-700'>Cleanup</li>
            <li className='py-2 text-sm hover:text-micahBlack'>ABADDON</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400 hover:text-green-400'>Future</h6>
          <ul>
            <li className='py-2 text-sm hover:text-green-500'>Goals</li>
            <li className='py-2 text-sm hover:text-green-600'>Plans</li>
            <li className='py-2 text-sm hover:text-green-700'>Strategy</li>
            <li className='py-2 text-sm hover:text-green-800'>Join me</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
