import { MdPerson, MdKeyboardArrowRight } from "react-icons/md";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaAppStore,
  FaAndroid,
  FaInfoCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer !mt-0 !shadow-none">
      <div className="footer__top container mx-auto flex flex-wrap">
        <div className="basis-full px-6 pt-4 sm:basis-6/12 md:px-0 lg:basis-1/5 col uppercase">
          <h3 className="relative">Giới thiệu</h3>
          <div className="col-content">
            <ul>
              <li>
                <NavLink>
                  <MdKeyboardArrowRight className="inline-block align-middle" />
                  Về chúng tôi
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <MdKeyboardArrowRight className="inline-block align-middle" />
                  Thỏa thuận sử dụng
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <MdKeyboardArrowRight className="inline-block align-middle" />
                  Cơ chế bảo mật
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <MdKeyboardArrowRight className="inline-block align-middle" />
                  Cách sử dụng
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-full px-6 pt-4 sm:basis-6/12 md:px-0 lg:basis-1/5 col uppercase">
          <h3 className="relative">Hỗ trợ</h3>
          <div className="col-content">
            <ul>
              <li>
                <NavLink>
                  <MdKeyboardArrowRight className="inline-block align-middle" />
                  Góp ý
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <MdKeyboardArrowRight className="inline-block align-middle" />
                  Rạp & giá vé
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <MdKeyboardArrowRight className="inline-block align-middle" />
                  Tuyển dụng
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <MdKeyboardArrowRight className="inline-block align-middle" />
                  Dịch vụ khách hàng
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-full px-6 pt-4 sm:basis-6/12 md:px-0 lg:basis-1/5 col uppercase">
          <h3 className="relative">Library used</h3>
          <div className="col-content">
            <ul>
              <li>
                <NavLink>
                  <MdKeyboardArrowRight className="inline-block align-middle" />
                  ReactJS & redux-thunk
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <MdKeyboardArrowRight className="inline-block align-middle" />
                  React-router-dom
                </NavLink>
              </li>

              <li>
                <NavLink>
                  <MdKeyboardArrowRight className="inline-block align-middle" />
                  Axios, immer, moment...
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-full px-6 pt-4 sm:basis-6/12 md:px-0 lg:basis-1/5 col uppercase">
          <h3 className="relative">Download app</h3>
          <div className="mobile-app">
            <a className="app__item" href="#url">
              <FaAppStore className="inline pr-3" /> <span>IOS</span>
            </a>
            <a className="app__item" href="#url">
              <FaAndroid className="inline pr-3" /> <span>Android</span>
            </a>
          </div>
        </div>
        <div className="basis-full px-6 pt-4 sm:basis-6/12 md:px-0 lg:basis-1/5 col uppercase">
          <h3 className="relative">Kết nối & thông tin</h3>
          <div className="social flex">
            <a className="social__item mx-1" href="#url">
              <FaFacebookSquare />
            </a>
            <a className="social__item mx-1" href="#url">
              <FaYoutubeSquare />
            </a>
            <a className="social__item mx-1" href="#url">
              <FaTwitterSquare />
            </a>
            <a className="social__item mx-1" href="#url">
              <FaInstagramSquare />
            </a>
          </div>
          <div className="members">
            <h4 className="normal-case text-sm pb-1 pt-2">Triển khai dự án:</h4>
            <ul className="capitalize text-xs">
              <li className="leading-5 flex items-center tracking-wide">
                <MdPerson className="inline-block mr-1 text-green-600" /> Lưu
                Hoàng Đức
              </li>
              <li className="leading-5 flex items-center tracking-wide">
                <MdPerson className="inline-block mr-1 text-green-600" /> Nguyễn
                Quang Minh
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bot text-center">
        <p>
          <FaInfoCircle className="inline-block mr-3 align-middle" />
          <span className="align-middle">
            Cybersoft, BC64 Front End: 09/2023 ~ 03/2024
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
