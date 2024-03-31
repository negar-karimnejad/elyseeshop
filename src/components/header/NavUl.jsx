import { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function NavUl({ children, title }) {
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <div className="relative font-medium border-b border-dashed border-white">
      <div
        onClick={() => setActiveMenu((prev) => (prev === title ? "" : title))}
        className="p-3 flex items-end cursor-pointer"
      >
        <MdOutlineKeyboardArrowLeft />
        {title}
      </div>
      {activeMenu === title && (
        <ul className="list-disc bottom-0 px-10 py-2 right-0 bg-white flex flex-col gap-3">
          {children}
        </ul>
      )}
    </div>
  );
}

export default NavUl;
