import { useState } from 'react';

import { MdEmail } from 'react-icons/md';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Social() {
  const [copiedMessage, setCopiedMessage] = useState();
  // GitHub
  const githubProfile = 'https://github.com/Prajwalad101';
  // LinkedIn
  const linkedInProfile =
    'https://www.linkedin.com/in/prajwal-adhikari-867489208/';
  // Email
  const email = 'prajwalad101@gmail.com';

  const copyMessage = () => {
    navigator.clipboard.writeText(email);
    setCopiedMessage(true);
    setTimeout(() => {
      setCopiedMessage(false);
    }, 3000);
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-Poppins text-2xl font-bold  bg-blue-100'>
        Social / Contact:
      </h1>
      <div className='flex gap-5 mt-5 items-start'>
        <div className='bg-black text-white rounded-full p-2 hover:-translate-y-1 cursor-pointer flex-grow-0'>
          <button onClick={copyMessage} className='block'>
            <MdEmail size={30} />
          </button>
        </div>
        <div className='bg-black rounded-full p-2 text-white hover:-translate-y-1 hover:cursor-pointer'>
          <a href={githubProfile} target='_blank'>
            <BsGithub size={30} />
          </a>
        </div>
        <div className='bg-black text-white rounded-full p-2 hover:-translate-y-1 hover:cursor-pointer'>
          <a href={linkedInProfile} target='_blank'>
            <BsLinkedin size={30} />
          </a>
        </div>
      </div>
      <p className='font-IBM mt-2'>
        {copiedMessage && 'Email copied to clipboard'}
      </p>
    </div>
  );
}

export default Social;
