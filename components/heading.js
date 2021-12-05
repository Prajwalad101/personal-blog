import Image from 'next/image';

function Heading() {
  return (
    <div>
      <div className='my-10'>
        <Image src='/images/profile.png' width={75} height={75} />
      </div>
      <div className='font-IBM'>
        <p className=' opacity-70 text-heading2 font-sans font-medium'>
          Personal blog by
        </p>
        <h1 className='font-IBM font-extrabold text-3xl'>Prajwal Adhikari</h1>
        <p className='font-medium opacity-90 text-heading3 my-3'>
          On Javascript, React, NextJs and new ways to confuse myself
        </p>
      </div>
    </div>
  );
}

export default Heading;
