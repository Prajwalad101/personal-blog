import { HiMenuAlt2 } from 'react-icons/hi';
import ThemeSwitcher from './ThemeSwitcher';

function MainNavigation() {
  return (
    <div className='mx-auto flex flex-row justify-between px-7 mt-3 max-w-2xl'>
      <HiMenuAlt2 size={30} className='sm:hidden' />
      <div className='sm:flex justify-between flex-grow hidden'>
        <p>Home</p>
        <p>Blog</p>
        <p>About</p>
      </div>
      <ThemeSwitcher />
    </div>
  );
}

export default MainNavigation;
