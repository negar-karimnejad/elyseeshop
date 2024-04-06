import { Link } from 'react-router-dom';

const FooterLink = ({ link }) => {
  return (
    <div>
      <Link
        to={link.heading.to}
        className="font-vazirBold uppercase text-stone-700 dark:text-white"
      >
        {link.heading.title}
      </Link>
      <ul className="mt-3 flex flex-col gap-2 font-medium text-stone-600 dark:text-stone-400">
        {link.links.map((item) => (
          <li key={item}>
            <Link
              to={item.to}
              className="transition-all hover:text-stone-700 hover:underline  dark:text-stone-300 dark:hover:text-stone-100"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLink;
