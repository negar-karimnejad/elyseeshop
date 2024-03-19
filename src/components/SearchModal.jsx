import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Input from './Input';

function SearchModal({ closeSearchModal }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/products/${query}`);
    closeSearchModal();
    setQuery('');
  };

  return (
    <div
      onClick={closeSearchModal}
      className="fixed right-0 top-0 flex h-screen w-full items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-2/3 rounded-md bg-white p-5"
      >
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <label htmlFor="" className="font-yekanB text-stone-500">
            کلمه مورد نظر را جستجو کنید:
          </label>
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-2"
          />
          <Button type="submit">جستجو</Button>
        </form>
      </div>
    </div>
  );
}

export default SearchModal;
