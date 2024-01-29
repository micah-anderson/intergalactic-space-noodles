import backgroundImage from "../assets/vecteezy_1.jpg";

const Filler = () => {
  return (
    <div
      className='relative min-h-screen bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='bg-black bg-opacity-50 min-h-screen'>
        <header className='text-white body-font'>
          <div className='container mx-auto flex flex-wrap p-5 flex-col m:flex-row items-center'>
            <nav className='m:ml-auto'></nav>
          </div>
        </header>

        <main className='px-4 py-24'>
          <div className='container mx-auto flex flex-col items-center'>
            <h1 className='text-6xl text-center font-custom leading-none text-white mb-4'>
              Welcome to my world
            </h1>
            <p className='text-xl text-gray-300 mb-12'>
              Young Strong Adventurous Always and Forever Free
            </p>
            <p className='text-base text-gray-400 max-w-lg text-center'></p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Filler;
