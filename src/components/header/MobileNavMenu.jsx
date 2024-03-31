import { Link } from "react-router-dom";
import NavDropdownLink from "./NavDropdownLink";
import NavUl from "./NavUl";

const linkStyles =
  "block px-7 py-2 font-medium border-b border-dashed border-white";

function MobileNavMenu() {
  return (
    <div className="sm:hidden" id="mobile-menu">
      <div className="bg-red-100">
        <NavUl title="مراقبت از پوست">
          <NavDropdownLink title="مراقبت پوست" to="" />
          <NavDropdownLink title="مراقبت از چشم" to="" />
          <NavDropdownLink title="پاک کننده های صورت" to="" />
          <NavDropdownLink title="ابزار جانبی پوست" to="" />
        </NavUl>
        <NavUl title="لوازم آرایشی">
          <NavDropdownLink title="آرایش صورت" to="" />
          <NavDropdownLink title="آرایش چشم" to="" />
          <NavDropdownLink title="آرایش ابرو" to="" />
          <NavDropdownLink title="آرایش لب" to="" />
          <NavDropdownLink title="آرایش ناخن" to="" />
          <NavDropdownLink title="ابزار آرایش" to="" />
        </NavUl>
        <NavUl title="مراقبت از مو">
          <NavDropdownLink title="لوازم رنگ مو" to="" />
          <NavDropdownLink title="بهداشت و مراقبت مو" to="" />
          <NavDropdownLink title="حالت دهنده مو" to="" />
        </NavUl>
        <NavUl title="محصولات بدن">
          <NavDropdownLink title="مراقبت از بدن" to="" />
          <NavDropdownLink title="دئودورانت و ضد تعریق" to="" />
          <NavDropdownLink title="اصلاح صورت و بدن" to="" />
          <NavDropdownLink title="بهداشت شخصی" to="" />
        </NavUl>
        <NavUl title="عطر و ادکلن">
          <NavDropdownLink title="عطر و ادکلن" to="" />
          <NavDropdownLink title="غلظت" to="" />
          <NavDropdownLink title="نوع رایحه" to="" />
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
