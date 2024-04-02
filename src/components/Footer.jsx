import { Link } from "react-router-dom";
import { footerLinksList } from "../data/data";
import FooterLink from "./FooterLink";
import Instagram from "./Instagram";

function Footer() {
  return (
    <footer className="bg-white dark:bg-cyan-900 pt-5">
      <div className="container p-5">
        <div className="md:flex md:justify-center">
          <div className="gap-10 grid grid-cols-4 max-lg:grid-cols-2">
            {footerLinksList.map((link) => (
              <FooterLink key={link.heading} link={link} />
            ))}
            <div>
              <h2 className="mb-3 text-stone-900 uppercase dark:text-white">
                نشانی
              </h2>
              <ul className="text-stone-400 font-medium flex flex-col gap-2">
                <li>
                  خوزستان، ماهشهر، شهرک بعثت، هزارواحدی، میدان کیمیا، مجتمع
                  تجاری الماس شهر، فروشگاه الیزه 06152427352
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="float-end">
          <Instagram />
        </div>
        <div className="text-center mt-20" style={{ direction: "ltr" }}>
          <span className="text-[11px] text-stone-400 ">
            ©{new Date().getFullYear()} ALL RIGHTS RESERVED | POWERED BY
            <Link
              to=""
              className="hover:underline hover:text-stone-300 transition-all text-stone-500"
            >
              {" "}
              KAREN PARDAZ
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;