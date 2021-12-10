import { useState } from 'react';
import { useTheme } from 'next-themes';

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
      <h1 className='font-Poppins text-2xl font-bold  bg-blue-100 dark:bg-dark-text'>
        Social / Contact:
      </h1>
      <div className='flex gap-8 mt-5 items-start'>
        <div className='bg-black text-white rounded-full p-2 hover:-translate-y-1 cursor-pointer flex-grow-0 dark:bg-gray-200 dark:text-dark'>
          <button onClick={copyMessage} className='block'>
            <MdEmail size={30} />
          </button>
        </div>
        <div className='bg-black rounded-full p-2 text-white hover:-translate-y-1 hover:cursor-pointer  dark:bg-gray-200 dark:text-dark'>
          <a href={githubProfile} target='_blank'>
            <BsGithub size={30} />
          </a>
        </div>
        <div className='bg-black text-white rounded-full p-2 hover:-translate-y-1 hover:cursor-pointer dark:bg-gray-200 dark:text-dark'>
          <a href={linkedInProfile} target='_blank'>
            <BsLinkedin size={30} />
          </a>
        </div>
      </div>
      {copiedMessage && (
        <button className='font-firaCode py-1 px-2 mt-6 bg-blue-200 rounded-md dark:bg-dark-card dark:text-dark-text shadow-xl'>
          {copiedMessage && 'Copied to clipboard'}
        </button>
      )}
    </div>
  );
}

export default Social;
