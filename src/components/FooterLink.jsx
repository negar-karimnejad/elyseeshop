import { Link } from "react-router-dom";

const FooterLink = ({ link }) => {
  return (
    <div>
      <h2 className="mb-3 text-stone-900 uppercase dark:text-white">
        {link.heading}
      </h2>
      <ul className="text-stone-600 dark:text-stone-400 font-medium flex flex-col gap-2">
        {link.links.map((item) => (
          <li key={item}>
            <Link
              to=""
              className="hover:underline hover:text-stone-700 dark:text-stone-300  dark:hover:text-stone-100 transition-all"
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
