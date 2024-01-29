import React from "react";
import Avatar from "../assets/CHESS.png";

const Writing = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-screen-xxl mx-auto grid m:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <p className='text-micahPlantGreen font-bold'>
            Lessons I’ve learnt and that I'm learning Along the Way
          </p>
          <div className='text-left mt-4'>
            <p className='mb-4'>
              <strong>Ask more questions:</strong> That's how you find the answers.
            </p>
            <p className='mb-4'>
              <strong>Don't be afraid to ask for help:</strong> Even if you love
              problem-solving and finding solutions on your own, having a team is better
              than going solo.
            </p>
            <p className='mb-4'>
              <strong>Balance is everything:</strong> Take breaks and let your mind
              passively figure things out.
            </p>
            <p className='mb-4'>
              <strong>Think first and think more:</strong> Work smart and then harder.
              Having a game plan and sticking to it is crucial. First, create your
              minimum viable product, then spend time fine-tuning and making it pretty.
            </p>
            <p className='mb-4'>
              <strong>Doing less and keeping it simple:</strong> It's not only more
              efficient and effective but also the key to having systems work.
            </p>
            <p className='mb-4'>
              <strong>Work smart and work hard:</strong> Make it work, no matter what.
              Even complex issues can be broken down into smaller components and figured
              out.
            </p>
            <p className='mb-4'>
              <strong>Always be humble and kind:</strong> Love, humility, and gentleness
              are better than negativity and focusing on the faults or failures of
              others. Take responsibility and help sincerely.
            </p>
            <p className='mb-4'>
              <strong>Encourage only:</strong> Be aware of your own weaknesses and
              mistakes.
            </p>
            <p className='mb-4'>
              <strong>Be grateful:</strong> Your joy in life derives from gratitude. It
              reminds you why you are here and gives wealth to the many subtle things in
              life.
            </p>
            <p className='mb-4'>
              <strong>Do not be insecure and do not people please:</strong> Be
              transparently and unashamedly yourself. Be who you want to be.
            </p>
            <p className='mb-4'>
              <strong>If your objective is to do a great job:</strong> Have fun along
              the way.
            </p>
            <p className='mb-4'>
              <strong>Take initiative:</strong> Don't be hesitant to speak out but
              always be mindful.
            </p>
            <p className='mb-4'>
              <strong>Stargaze more often:</strong> Like that time you saw a fox and a
              shooting star in the same 20 seconds.
            </p>
          </div>
        </div>
        <img className='w-[500px] mx-auto my-4' src={Avatar} alt='Avatar of Micah' />
      </div>
    </div>
  );
};

export default Writing;
