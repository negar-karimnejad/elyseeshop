import { Link } from 'react-router-dom';
interface NavMobileDropdownLinkProps {
  title: string;
  to: string;
  onClick: () => void;
}
function NavMobileDropdownLink({
  title,
  to,
  onClick,
}: NavMobileDropdownLinkProps) {
  return (
    <li onClick={onClick}>
      <Link
        to={to}
        className="font-vazirBold transition-all hover:text-pink-600"
      >
        {title}
      </Link>
    </li>
  );
}

export default NavMobileDropdownLink;
