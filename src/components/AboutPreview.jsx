import { Link } from "react-router-dom";
import Avatar from "../assets/AVATARISDOPE.jpg";

const AboutPreview = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-screen-xxl mx-auto grid m:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Avatar} alt='Avatar of Micah' />
        <div className='flex flex-col justify-center'>
          <p className='text-micahPlantGreen font-bold '>Hi I'm Micah</p>
          <h1 className='m:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            I'm Currently Learning Web Development at{" "}
            <a
              target='_blank'
              className='hover:text-micahVibrantBlue'
              href='https://start.digitalcareerinstitute.org/discover-dci/?utm_feeditemid=&utm_device=c&utm_campaign_id=13121939688&utm_adgroup_id=126237567750&utm_ad_id=648072419711&utm_term=dci%20career%20institute&utm_source=google&utm_medium=ppc&utm_campaign=DE_SEM_Brand_EN&utm_content=126237567750&hsa_cam=13121939688&hsa_mt=p&hsa_src=g&hsa_acc=9628643656&hsa_net=adwords&hsa_kw=dci%20career%20institute&hsa_tgt=aud-1006070586653:kwd-299481417299&hsa_ver=3&hsa_grp=126237567750&hsa_ad=648072419711&gad_source=1&gclid=CjwKCAiAk9itBhASEiwA1my_6zFrPJjEnDO56Cqz-V3b5hYFMgtL7DuZIYnnA_dmUqjjKjdIOFTC_hoCEEYQAvD_BwE'>
              DCI career Institute.
            </a>
          </h1>
          <h2 className='m:text-2xl text-xl font-bold text-gray-500 hover:drop-shadow-4xl'>
            I'm liking it and learning a lot.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, officia
            perspiciatis. Consequuntur delectus harum ea ducimus rem labore facere
            veniam consequatur cupiditate provident architecto vitae aliquam officia
            perspiciatis, assumenda quia.
          </p>
          <button className='bg-black text-micahVibrantYellow w-[200px] rounded-md font-medium my-6 mx-auto m:mx-0 py-3 transition ease-out duration-150 hover:bg-micahVibrantYellow hover:text-black'>
            <Link to='/about'>Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;
