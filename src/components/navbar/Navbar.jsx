import { BiSearch } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="bg-light">
        <div className="container py-2 text-secondary d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-1">
            0123456789
            <FaPhoneAlt />
          </div>
          <form role="search">
            <label className="bg-white d-flex rounded-5 px-4 py-1 align-items-center gap-3 border border-radius-50">
              <BiSearch />
              <input
                className="border-0"
                type="search"
                placeholder="جستجو"
                aria-label="Search"
              />
            </label>
          </form>
          <Link to="https://www.instagram.com/" className="link-danger">
            <BsInstagram />
          </Link>
        </div>
      </div>
      <div className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  مراقبت از پوست
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  لوازم آرایشی
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  مراقبت از مو
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  محصولات بدن
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  عطر و ادکلن
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  برندها
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  وبلاگ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  مشاوره رایگان
                </a>
              </li>
              {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
            </ul>

            <Link className="navbar-brand" href="/">
              <img src="./images/logo.png" alt="" style={{ width: "70px" }} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
