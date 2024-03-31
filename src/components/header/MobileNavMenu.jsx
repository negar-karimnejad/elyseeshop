import { Link } from "react-router-dom";
import NavUl from "./NavUl";
import NavMobileDropdownLink from "./NavMobileDropdownLink";

const linkStyles =
  "block px-7 font-yekanB py-2 border-b border-dashed border-white";

function MobileNavMenu() {
  return (
    <div className="lg:hidden" id="mobile-menu">
      <div className="bg-pink-100">
        <NavUl title="مراقبت از پوست">
          <NavMobileDropdownLink title="مراقبت پوست" to="" />
          <NavMobileDropdownLink title="مراقبت از چشم" to="" />
          <NavMobileDropdownLink title="پاک کننده های صورت" to="" />
          <NavMobileDropdownLink title="ابزار جانبی پوست" to="" />
        </NavUl>
        <NavUl title="لوازم آرایشی">
          <NavMobileDropdownLink title="آرایش صورت" to="" />
          <NavMobileDropdownLink title="آرایش چشم" to="" />
          <NavMobileDropdownLink title="آرایش ابرو" to="" />
          <NavMobileDropdownLink title="آرایش لب" to="" />
          <NavMobileDropdownLink title="آرایش ناخن" to="" />
          <NavMobileDropdownLink title="ابزار آرایش" to="" />
        </NavUl>
        <NavUl title="مراقبت از مو">
          <NavMobileDropdownLink title="لوازم رنگ مو" to="" />
          <NavMobileDropdownLink title="بهداشت و مراقبت مو" to="" />
          <NavMobileDropdownLink title="حالت دهنده مو" to="" />
        </NavUl>
        <NavUl title="محصولات بدن">
          <NavMobileDropdownLink title="مراقبت از بدن" to="" />
          <NavMobileDropdownLink title="دئودورانت و ضد تعریق" to="" />
          <NavMobileDropdownLink title="اصلاح صورت و بدن" to="" />
          <NavMobileDropdownLink title="بهداشت شخصی" to="" />
        </NavUl>
        <NavUl title="عطر و ادکلن">
          <NavMobileDropdownLink title="عطر و ادکلن" to="" />
          <NavMobileDropdownLink title="غلظت" to="" />
          <NavMobileDropdownLink title="نوع رایحه" to="" />
        </NavUl>

        <Link to="" className={linkStyles}>
          برندها
        </Link>
        <Link to="" className={linkStyles}>
          وبلاگ
        </Link>
        <Link to="" className={linkStyles}>
          مشاوره رایگان
        </Link>
      </div>
    </div>
  );
}

export default MobileNavMenu;
