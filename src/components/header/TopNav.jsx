import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaPhoneAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Input from '../Input';
import Instagram from '../Instagram';

function TopNav({ scrollPosition }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/products/${query}`);
    setQuery('');
  };

  return (
    <div
      className={`bg-stone-100 dark:bg-stone-800 max-lg:hidden ${
        scrollPosition > 2 ? 'hidden' : ''
      }`}
    >
      <div className="container flex items-center justify-between py-1.5 text-stone-400 dark:text-stone-200">
        <div className="flex items-center gap-1">
          0123456789
          <FaPhoneAlt size={13} />
        </div>
        <form className="w-[500px]" onSubmit={submitHandler}>
          <label className="rounded-5 flex items-center gap-3 rounded-full border border-stone-300 bg-white px-4 py-1 dark:bg-stone-800">
            <button
              type="submit"
              className="cursor-pointer hover:text-pink-500 dark:hover:text-white"
            >
              <BiSearch size={17} />
            </button>
            <Input
              className="border-0 bg-white dark:bg-stone-800"
              type="text"
              placeholder="جستجو"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
          </label>
        </form>
        <Instagram />
      </div>
    </div>
  );
}

export default TopNav;
