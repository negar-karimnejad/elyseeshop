import { Link } from 'react-router-dom';

const FooterLink = ({ link }) => {
  return (
    <div>
      <h2 className="font-vazirBold mb-3 uppercase text-stone-700 dark:text-white">
        {link.heading}
      </h2>
      <ul className="flex flex-col gap-2 font-medium text-stone-600 dark:text-stone-400">
        {link.links.map((item) => (
          <li key={item}>
            <Link
              to=""
              className="transition-all hover:text-stone-700 hover:underline  dark:text-stone-300 dark:hover:text-stone-100"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLink;
