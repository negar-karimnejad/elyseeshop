import { Link } from "react-router-dom";
import Instagram from "./Instagram";

function Footer() {
  return (
    <footer class="bg-white dark:bg-cyan-900 pt-5">
      <div class="container p-5">
        <div class="md:flex md:justify-center">
          <div class="gap-10 grid grid-cols-4 max-lg:grid-cols-2">
            <div>
              <h2 class="mb-3 text-stone-900 uppercase dark:text-white">
                صفحه نخست
              </h2>
              <ul class="text-stone-400 font-medium flex flex-col gap-2">
                <li>
                  <Link
                    to=""
                    class="hover:underline hover:text-stone-300 transition-all"
                  >
                    ورود / ثبت نام
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    class="hover:underline hover:text-stone-300 transition-all"
                  >
                    برندها
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    class="hover:underline hover:text-stone-300 transition-all"
                  >
                    خبرها
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-3 text-stone-900 uppercase dark:text-white">
                باشگاه مشتریان
              </h2>
              <ul class="text-stone-400 font-medium flex flex-col gap-2">
                <li>
                  <Link
                    to=""
                    class="hover:underline hover:text-stone-300 transition-all"
                  >
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    class="hover:underline hover:text-stone-300 transition-all"
                  >
                    قوانین و مقررات
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    class="hover:underline hover:text-stone-300 transition-all"
                  >
                    حریم خصوصی
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-3 text-stone-900 uppercase dark:text-white">
                راهنمای سفارش و خرید
              </h2>
              <ul class="text-stone-400 font-medium flex flex-col gap-2">
                <li>
                  <Link
                    to=""
                    class="hover:underline hover:text-stone-300 transition-all"
                  >
                    سوالات متداول
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    class="hover:underline hover:text-stone-300 transition-all"
                  >
                    ثبت شکایات و انتقادات
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    class="hover:underline hover:text-stone-300 transition-all"
                  >
                    تماس با ما
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-3 text-stone-900 uppercase dark:text-white">
                نشانی
              </h2>
              <ul class="text-stone-400 font-medium flex flex-col gap-2">
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
        <div class="text-center mt-20" style={{ direction: "ltr" }}>
          <span class="text-[11px] text-stone-400 ">
            ©{new Date().getFullYear()} ALL RIGHTS RESERVED | POWERED BY
            <Link
              to=""
              class="hover:underline hover:text-stone-300 transition-all text-stone-500"
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
