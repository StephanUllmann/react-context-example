import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { themeToggle } = useContext(ThemeContext);
  return (
    <header>
      <nav>
        <ul className='flex gap-4'>
          <li>
            <a href='#'>bla</a>
          </li>
          <li>
            <a href='#'>bla</a>
          </li>
          <li>
            <a href='#'>bla</a>
          </li>
          <li>
            <a href='#'>bla</a>
          </li>
        </ul>
      </nav>
      <button onClick={themeToggle}>Light Mode / Dark Mode</button>
    </header>
  );
};

export default Navbar;
