import Image from 'next/image';

import Social from './social';

function About() {
  return (
    <div className='container mx-auto px-7 max-w-3xl flex  flex-col items-center mt-20 gap-10'>
      {/* ABOUT */}
      <h1 className='text-4xl font-Poppins font-black bg-blue-200 dark:bg-dark-text md:text-5xl'>
        About
      </h1>
      {/* ABOUT CARD */}
      <div className='w-9/12  p-10 rounded-md bg-gray-100 dark:bg-dark-card shadow-xl'>
        <div className='flex justify-center'>
          <Image
            src='/images/profile.png'
            width={100}
            height={100}
            layout='responsive'
          />
        </div>
        <p className='font-Poppins  font-semibold text-2xl my-5'>Hello 👋</p>
        <p className='font-firaCode'>
          I am a Front-End web developer from Kathmandu currently studying
          computer science. I like building cool websites, learning new
          technologies and experimenting with them.
        </p>
      </div>
      <Social />
    </div>
  );
}

export default About;
