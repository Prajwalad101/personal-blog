import Image from 'next/image';

function Heading() {
  return (
    <div className='mb-20'>
      <div className='my-5'>
        <Image src='/images/profile.png' width={80} height={80} />
      </div>
      <div className='font-IBM'>
        <span className='opacity-70 text-heading2 font-sans font-medium'>
          Personal Blog by
        </span>
        <h1 className='font-IBM font-extrabold text-3xl'>Prajwal Adhikari</h1>
        <p className='font-AlegreyaSans font-regular opacity-90 text-heading3 my-3 '>
          On{' '}
          <span className='font-medium'>
            {' '}
            Javascript, React, NextJs, Tailwind{' '}
          </span>
          and new ways to confuse myself
        </p>
      </div>
    </div>
  );
}

export default Heading;
