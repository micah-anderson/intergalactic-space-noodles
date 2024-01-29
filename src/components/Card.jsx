import Avatar from "../assets/AVATARISDOPE.jpg";

const Card = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
      <img src={Avatar} alt='stuff' className='w-full h-48 object-cover' />
      <div className='px-6 py-4'>
        <h2 className='text-xl font-semibold text-gray-800'>Card Title</h2>
        <p className='text-gray-600 mt-2'>Card Description goes here.</p>
      </div>
    </div>
  );
};

export default Card;
