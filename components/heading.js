import Image from 'next/image';

function Heading() {
  return (
    <div className='mb-20'>
      <div className='my-5'>
        <Image src='/images/profile.png' width={80} height={80} />
      </div>
      <div className='font-IBM'>
        <span className='opacity-70 text-heading2 font-firaCode font-medium '>
          Personal Blog by
        </span>
        <h1 className='font-Poppins font-extrabold text-3xl '>
          Prajwal Adhikari
        </h1>
        <p className='font-Poppins font-normal text-heading2 my-3 '>
          On Javascript, React, NextJs, Tailwind and new ways to confuse myself
        </p>
      </div>
    </div>
  );
}

export default Heading;
