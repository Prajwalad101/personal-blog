import { BsMoon, BsSunFill } from 'react-icons/bs';

function ThemeSwitcher() {
  return (
    <div className='p-2 rounded bg-gray-200 drop-shadow-lg sm:hidden'>
      <BsMoon size={19} />
    </div>
  );
}

export default ThemeSwitcher;
