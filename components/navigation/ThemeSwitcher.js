import { useTheme } from 'next-themes';
import { BsMoon, BsSunFill } from 'react-icons/bs';
import { useLoaded } from '../hooks/useLoaded';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  // check if the component is rendered on the client
  const loaded = useLoaded();
  return (
    <div
      className='p-2 rounded drop-shadow-xl hover:drop-shadow-lg hover:cursor-pointer bg-gray-200 dark:bg-gray-700'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' && loaded ? (
        <BsSunFill size={19} />
      ) : (
        <BsMoon size={19} />
      )}
    </div>
  );
}

export default ThemeSwitcher;
