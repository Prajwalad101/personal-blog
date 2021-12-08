import { useState } from 'react';

function NavItem({ active }) {
  let navClassName =
    'flex justify-start top-20 pt-16 gap-16 flex-col items-center translate-x-0 transition duration-500 ease-in w-1/2 h-screen absolute right-0 bg-gray-100 sm:top-0 sm:flex-row sm:translate-x-0 sm:transition-none sm:items-start sm:static sm:h-5 sm:bg-white sm:p-0 sm:gap-[120px] sm:w-5/6';

  if (active) {
    navClassName += ' translate-x-0';
  } else {
    navClassName += ' translate-x-full';
  }

  let linkClassName = 'opacity-0 sm:opacity-100';
  if (active) linkClassName += ' navFade';

  return (
    <ul className={navClassName}>
      <li className={linkClassName}>
        <button>Home</button>
      </li>
      <li className={linkClassName}>
        <button>Blog</button>
      </li>
      <li className={linkClassName}>
        <button>About</button>
      </li>
    </ul>
  );
}

export default NavItem;
