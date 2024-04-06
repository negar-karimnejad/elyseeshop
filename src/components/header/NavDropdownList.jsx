import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navMenu } from '../../data/data';
import Divider from '../Divider';

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
    <div className="absolute -right-40 top-6 flex min-w-max gap-10 border bg-white p-5 shadow dark:border-stone-900 dark:bg-stone-600">
      {list?.map((l) => (
        <ul className="flex flex-col gap-1">
          {l.map((item, index) => (
            <li key={index}>
              <Link
                to=""
                className={`text-sm ${
                  index === 0
                    ? 'font-vazirBold hover:text-pink-400 text-[14px] text-pink-500 dark:text-pink-400'
                    : 'pr-2 transition-all hover:text-stone-950'
                }`}
              >
                {index === 0 && (
                  <Divider className="border-r border-dashed border-pink-500 pl-2" />
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
