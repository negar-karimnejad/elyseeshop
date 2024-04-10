import { useState } from 'react';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';

function NavUl({ children, title }) {
  const [activeMenu, setActiveMenu] = useState('');

  return (
    <div className="relative border-b border-dashed border-white">
      <div
        onClick={() => setActiveMenu((prev) => (prev === title ? '' : title))}
        className="flex cursor-pointer items-end p-3"
      >
        {activeMenu === title ? (
          <MdOutlineKeyboardArrowDown />
        ) : (
          <MdOutlineKeyboardArrowLeft />
        )}
        {title}
      </div>
      {activeMenu === title && (
        <ul className="bottom-0 right-0 flex list-disc flex-col gap-3 bg-white px-10 py-2 dark:bg-stone-700">
          {children}
        </ul>
      )}
    </div>
  );
}

export default NavUl;
