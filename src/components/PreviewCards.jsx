import { Link } from "react-router-dom";
import vecteezy_1 from "../assets/vecteezy_1.jpg";
import vecteezy_2 from "../assets/vecteezy_2.jpg";
import vecteezy_3 from "../assets/vecteezy_3.jpg";
import vecteezy_4 from "../assets/vecteezy_4.jpg";

const PreviewCards = () => {
  return (
    <div className='w-full py-10 px-4 bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <div className='max-w-screen-xxl mx-auto grid grid-cols-1 m:grid-cols-2 l:grid-cols-4 gap-8'>
        {/* Card template starts */}
        {[
          { title: "Music", image: vecteezy_1, link: "/music", alt: "Music icon" },
          {
            title: "Pics",
            image: vecteezy_2,
            link: "/pics",
            alt: "Picture icon",
            dark: true,
          },
          {
            title: "Writing",
            image: vecteezy_3,
            link: "/writing",
            alt: "Writing icon",
          },
          {
            title: "Vids",
            image: vecteezy_4,
            link: "https://www.youtube.com",
            alt: "Youtube icon",
            dark: true,
            external: true,
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ${
              card.dark ? "bg-micahBlack text-micahLightGrey" : "bg-white"
            }`}>
            <img
              className='w-full h-48 object-cover rounded-t-lg'
              src={card.image}
              alt={card.alt}
            />
            <h2 className='text-3xl font-bold text-center py-6'>{card.title}</h2>
            <div className='text-center font-medium px-6 py-4'>
              <p className='text-gray-600'>
                Explore exclusive {card.title.toLowerCase()} content here.
              </p>
            </div>
            <button
              className={`w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ${
                card.dark ? "bg-white text-micahBlack" : "bg-micahPlantGreen"
              } hover:bg-purple-500 hover:text-white hover:border-transparent hover:shadow-lg`}>
              {card.external ? (
                <a href={card.link} target='_blank' rel='noopener noreferrer'>
                  Discover
                </a>
              ) : (
                <Link to={card.link}>Discover</Link>
              )}
            </button>
          </div>
        ))}
        {/* Card template ends */}
      </div>
    </div>
  );
};

export default PreviewCards;
