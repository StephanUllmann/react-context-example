import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Card = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`w-96 h-40 border border-slate-500 ${theme === 'light' ? 'bg-teal-300' : 'bg-teal-800'}`}></div>
  );
};

export default Card;
