import { useState } from 'react';

function NavItem({ active }) {
  let className =
    'flex justify-start top-20 pt-16 gap-16 flex-col items-center translate-x-0 transition duration-500 ease-in w-1/2 h-screen absolute right-0  bg-gray-100';

  if (active) {
    className += ' translate-x-0';
  } else {
    className += ' translate-x-full';
  }

  return (
    <ul className={className}>
      <li className={active ? ' opacity-0 navFade' : 'opacity-0'}>
        <button>Home</button>
      </li>
      <li className={active ? ' opacity-0 navFade' : ' opacity-0'}>
        <button>Blog</button>
      </li>
      <li className={active ? ' opacity-0 navFade' : 'opacity-0'}>
        <button>About</button>
      </li>
    </ul>
  );
}

export default NavItem;
