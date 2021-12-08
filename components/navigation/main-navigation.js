import { useState } from 'react';

import ThemeSwitcher from './ThemeSwitcher';
import NavItem from './nav-item';

function MainNavigation() {
  const [isActive, setIsActive] = useState();

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className='flex justify-between items-center px-7 my-4 mx-auto max-w-3xl'>
      <NavItem active={isActive} />
      {/* Burgur Menu */}
      <div onClick={toggleClass} className={isActive ? 'toggle' : null}>
        <div className='line1 w-6 h-3 bg-black m-1'></div>
        <div className='line2 w-4 h-3 bg-black m-1'></div>
        <div className='line3 w-6 h-3 bg-black m-1'></div>
      </div>
      <ThemeSwitcher />
    </nav>
  );
}

export default MainNavigation;
