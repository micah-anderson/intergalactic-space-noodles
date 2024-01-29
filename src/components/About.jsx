import React from "react";
import Avatar from "../assets/AVATARISDOPE.jpg";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-screen-xxl mx-auto grid m:grid-cols-2 gap-8'>
        <img className='w-[500px] mx-auto my-4' src={Avatar} alt='Avatar of Micah' />
        <div className='flex flex-col justify-center'>
          <p className='text-micahPlantGreen font-bold text-2xl'>Hi, I'm Micah</p>
          <h1 className='m:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            I'm Currently Learning Web Development at{" "}
            <a
              target='_blank'
              className='hover:text-micahVibrantBlue'
              href='https://start.digitalcareerinstitute.org/discover-dci/?utm_feeditemid=&utm_device=c&utm_campaign_id=13121939688&utm_adgroup_id=126237567750&utm_ad_id=648072419711&utm_term=dci%20career%20institute&utm_source=google&utm_medium=ppc&utm_campaign=DE_SEM_Brand_EN&utm_content=126237567750&hsa_cam=13121939688&hsa_mt=p&hsa_src=g&hsa_acc=9628643656&hsa_net=adwords&hsa_kw=dci%20career%20institute&hsa_tgt=aud-1006070586653:kwd-299481417299&hsa_ver=3&hsa_grp=126237567750&hsa_ad=648072419711&gad_source=1&gadclid=CjwKCAiAk9itBhASEiwA1my_6zFrPJjEnDO56Cqz-V3b5hYFMgtL7DuZIYnnA_dmUqjjKjdIOFTC_hoCEEYQAvD_BwE'>
              DCI career Institute.
            </a>
          </h1>
          <h2 className='m:text-2xl text-xl font-bold text-gray-500 hover:drop-shadow-4xl'>
            I'm liking it and learning a lot! We have phenominal teachers and an
            incredible class.
          </h2>
          <p>
            Born and raised in Canada on the west coast of British Columbia, I have a
            deep love for nature and adventure, including exploring 🏔️, camping 🏕️, and
            fishing 🎣.
          </p>
          <p>
            I'm a family man, and my journey to Europe for ice hockey led me to meet the
            love of my life. Now, we have two wonderful kids together 👨‍👩‍👧‍👦.
          </p>
          {""}
          <p>
            I'm passionate about fitness 🏋️‍♂️ and maintaining a healthy lifestyle. I
            embrace a growth 💹 mindset 🧠 and love problem-solving 🧩.
          </p>
          <h3 className='text-2xl font-bold mt-4'>Hobbies and Interests</h3>
          <ul className='list-disc pl-6'>
            <li>Spending quality time and playing with my kids. 🐒</li>
            <li>Reading books. 📚</li>
            <li>Mountain biking. 🚲</li>
            <li>Making music. 🎹</li>
            <li>Cleaning up after my kids. 😆</li>
          </ul>
          <button className='bg-micahVibrantYellow w-[200px] rounded-md font-medium my-6 mx-auto py-3 transition ease-out duration-150 hover:bg-fuchsia-500 hover:text-white'>
            <Link to='/contact'>Contact me</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
