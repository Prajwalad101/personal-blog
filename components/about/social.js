import { MdEmail } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

function Social() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-Poppins text-2xl font-bold  bg-blue-100'>
        Social / Contact:
      </h1>
      <div className='flex gap-5 mt-5'>
        <div className='bg-black text-white rounded-full p-2 hover:-translate-y-1 cursor-pointer'>
          <MdEmail size={30} />
        </div>
        <div className='bg-black rounded-full p-2 text-white hover:-translate-y-1 hover:cursor-pointer'>
          <BsGithub size={30} />
        </div>
        <div className='bg-black text-white rounded-full p-2 hover:-translate-y-1 hover:cursor-pointer'>
          <BsLinkedin size={30} />
        </div>
      </div>
    </div>
  );
}

export default Social;
