import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Divider from "../Divider";
import { navMenu } from "../../data/data";

function NavDropdownList({ id }) {
  const [list, setList] = useState(null);

  useEffect(() => {
    navMenu.map((item) => {
      if (item.id === id) {
        setList(item.list);
      }
    });
  }, [id]);

  return (
    <div className="bg-white absolute top-11 border -right-40 shadow p-5 min-w-max flex gap-10">
      {list?.map((l) => (
        <ul className="flex flex-col gap-1">
          {l.map((item, index) => (
            <li key={index}>
              <Link
                to=""
                className={`text-base  ${
                  index === 0 ? "text-pink-500 font-yekanB" : "pr-2"
                }`}
              >
                {index === 0 && (
                  <Divider className="border-r pl-2 border-dashed border-pink-500" />
                )}
                {item}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default NavDropdownList;
