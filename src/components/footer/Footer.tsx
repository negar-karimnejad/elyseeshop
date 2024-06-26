import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { footerLinksList } from '../../data/data';
import Instagram from '../Instagram';
import FooterLink from './FooterLink';

function Footer() {
  const ScrollUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="relative bg-pink-200 pt-5 dark:bg-stone-700">
      <div className="container p-5">
        <button
          onClick={ScrollUp}
          className="absolute -top-8 left-0 rounded-tr-md bg-pink-200 p-2 hover:text-pink-600 dark:bg-stone-700 dark:text-white dark:hover:text-pink-600"
        >
          <MdOutlineKeyboardDoubleArrowUp
            className="hover:animate-bounce"
            size={20}
          />
        </button>
        <div className="md:flex md:justify-center">
          <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {footerLinksList.map((link, index) => (
              <FooterLink key={index} link={link} />
            ))}
            <div>
              <h2 className="ext-stone-700 mb-3 font-vazirBold uppercase text-stone-800 dark:text-white">
                نشانی
              </h2>
              <ul className="flex flex-col gap-2 font-medium text-stone-600 dark:text-stone-400">
                <li className="max-w-80">
                  خوزستان، ماهشهر، شهرک بعثت، هزارواحدی، میدان کیمیا، مجتمع
                  تجاری الماس شهر، فروشگاه الیزه{' '}
                  <span className="font-BKoodak">06152427352</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="float-end mt-2">
          <Instagram />
        </div>
        <div className="mt-20 text-center" style={{ direction: 'ltr' }}>
          <span className="text-[11px] text-stone-600 dark:text-stone-400">
            ©{new Date().getFullYear()} ALL RIGHTS RESERVED | POWERED BY
            <Link
              to="/"
              className="text-stone-700 transition-all hover:text-stone-900 hover:underline dark:text-stone-500 dark:hover:text-stone-200"
            >
              {' '}
              KAREN PARDAZ
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
