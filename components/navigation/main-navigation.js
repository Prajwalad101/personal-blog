import { useState } from 'react';

import ThemeSwitcher from './ThemeSwitcher';
import NavItem from './nav-item';

function MainNavigation() {
  const [isActive, setIsActive] = useState();

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  let burgerClassname = 'sm:hidden ';

  return (
    <nav className='flex justify-between items-center px-7 my-4 mx-auto max-w-3xl'>
      {/* NavItem */}
      <NavItem active={isActive} setActive={setIsActive} />
      {/* Burgur Menu */}
      <div
        onClick={toggleClass}
        className={isActive ? burgerClassname + 'toggle' : burgerClassname}
      >
        <div className='line1 w-6 h-3 bg-black m-1'></div>
        <div className='line2 w-4 h-3 bg-black m-1'></div>
        <div className='line3 w-6 h-3 bg-black m-1'></div>
      </div>
      <ThemeSwitcher />
    </nav>
  );
}

export default MainNavigation;
