import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";
import Mahorat from "../assets/mahorat-tech.jpg";
import Uztea from "../assets/UzTea.jpg";
import Raled from "../assets/raled.jpg";
import Goodly from "../assets/goodly.jpg";
import FacebookSvg from "../assets/icons/FacebookSvg";
import InstagrammSvg from "../assets/icons/InstagrammSvg";
import TelegramSvg from "../assets/icons/TelegramSvg";
import YouTubeSvg from "../assets/icons/YouTubeSvg";
import Modal from "../components/Modal";
import Deepen from "../assets/deepen.png";
import MenuBarSvg from "../assets/icons/MenuBarSvg";
import i18n from "../i18n";
import { t } from "i18next";

const RootLayout = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "uzb"
  );

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleModal = () => {
    setShowModal(true);
  };

  const handleChangeLanguage = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <nav
        className={` ${
          scrolled && "scrolled"
        } fixed top-0 left-0 w-full h-[120px] z-40 bg-white`}
      >
        <div className="container">
          <div className="nav-content flex items-center justify-between">
            <button className="menuBar-mobile">
              <MenuBarSvg />
            </button>
            <div className="project-logo">
              <NavLink to={"/"}>
                <img
                  className="h-auto max-w-[180px] max-h-[115px]"
                  src={Logo}
                  alt="mahorat-logo"
                />
              </NavLink>
            </div>
            <div
              className={`nav-links flex ${
                language === "uzb" || language === "Узб" ? "gap-3" : "gap-7"
              } nav-link-mobile`}
            >
              <NavLink
                to={"/"}
                className="nav-link-item text-[#182B98] font-bold hover:text-[#F44749] text-[16px]"
              >
                {t("Home")}
              </NavLink>
              <NavLink
                to={"about"}
                className="nav-link-item text-[#182B98] font-bold hover:text-[#F44749] text-[16px]"
              >
                {t("About")}
              </NavLink>
              <NavLink
                to={"services"}
                className="nav-link-item text-[#182B98] font-bold hover:text-[#F44749] text-[16px]"
              >
                {t("Services")}
              </NavLink>
              <NavLink
                to={"projects"}
                className="nav-link-item text-[#182B98] font-bold hover:text-[#F44749] text-[16px]"
              >
                {t("Projects")}
              </NavLink>
              <NavLink
                to={"experts"}
                className="nav-link-item text-[#182B98] font-bold hover:text-[#F44749] text-[16px]"
              >
                {t("Experts")}
              </NavLink>
              <a
                className="nav-link-item text-[#182B98] font-bold hover:text-[#F44749] text-[16px]"
                href="#"
                target="_blank"
              >
                {t("Raled")}
              </a>
              <NavLink
                to={"contact"}
                className="nav-link-item text-[#182B98] font-bold hover:text-[#F44749] text-[16px]"
              >
                {t("Contact")}
              </NavLink>
            </div>
            <div className="nav-btn flex items-center gap-4">
              <button
                className="bg-[#182B98] text-white px-6 py-2 rounded-md hover:bg-[#576ce3] duration-300"
                onClick={handleModal}
              >
                {t("Apply")}
              </button>
              <select
                value={language}
                onChange={handleChangeLanguage}
                className="border-2 border-[#182B98] px-4 py-1.5 rounded-md text-[#182B98] cursor-pointer language-mobile"
              >
                <option value="uzb" className="cursor-pointer text-center">
                  O'zbekcha
                </option>
                <option value="eng" className="cursor-pointer text-center">
                  English
                </option>
                <option value="rus" className="cursor-pointer text-center">
                  Russian
                </option>
                <option value="Узб" className="cursor-pointer text-center">
                  Узбекча
                </option>
              </select>
            </div>
          </div>
        </div>
      </nav>
      {showModal && <Modal setShowModal={setShowModal} />}
      <Outlet />
      <footer>
        <div className="container">
          <h1 className="text-center text-[56px] font-bold border-b-2 border-[#F44749] py-5">
            {t("Our Partners")}
          </h1>
          <div className="flex py-10 justify-between">
            <a href="https://mahorat.tech/" target="_blank">
              <div className="partner-cart bg-[#F1F1F1] border p-12">
                <img src={Mahorat} alt="mahorat-tech" />
              </div>
            </a>
            <a href="https://www.uztea.uz/" target="_blank">
              <div className="partner-cart bg-[#F1F1F1] border p-12">
                <img src={Uztea} alt="uztea" />
              </div>
            </a>
            <a href="https://raled-eight.vercel.app/" target="_blank">
              <div className="partner-cart bg-[#F1F1F1] border p-12">
                <img src={Raled} alt="raled" />
              </div>
            </a>
            <a href="https://deepen.uz/" target="_blank">
              <div className="partner-cart bg-[#F1F1F1] border p-12 h-[233px] flex justify-center items-center">
                <img
                  width={200}
                  className="mt-[33px]"
                  src={Deepen}
                  alt="deepen"
                />
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="footer relative z-10">
            <div className="overlay absolute z-20">
              <div className="footer-content h-full">
                <div className="container">
                  <h2 className="text-white font-bold text-[26px] tracking-wider pt-5 pb-14">
                    Mahorat & Management
                  </h2>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-white font-bold text-xl pb-3">
                        {t("Location")}
                      </p>
                      <p className="text-[#AAAAAA] text-lg py-2 font-light">
                        Safdosh Street, 10
                      </p>
                      <p className="text-[#AAAAAA] text-lg font-light pb-4">
                        Tashkent, Uzbekistan
                      </p>
                      <a
                        className="bg-[#212529] text-[#AAAAAA] px-3 py-2.5 rounded text-lg"
                        href="https://yandex.uz/maps/10335/tashkent/house/YkAYdANhSEwHQFprfX52dn5lZg==/?ll=69.242193%2C41.277415&utm_source=share&z=18"
                        target="_blank"
                      >
                        {t("Direction")}
                      </a>
                    </div>
                    <div>
                      <p className="text-white font-bold text-xl pb-3">
                        {t("Opening Hours")}
                      </p>
                      <p className="text-[#AAAAAA] text-lg py-2 font-light">
                        {t("Monday - Friday")}
                      </p>
                      <p className="text-[#AAAAAA] text-lg font-light pb-3">
                        10:00 AM - 08:00 PM
                      </p>
                      <p className="text-[#AAAAAA] text-lg font-light">
                        Tel:
                        <span className="cursor-pointer hover:text-white hover:underline duration-500">
                          +998 95 195-00-55
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-white font-bold text-xl pb-3">
                        {t("Social")}
                      </p>
                      <div className="flex gap-3">
                        <a
                          className="text-[#AAAAAA] text-lg py-2 font-light"
                          href="https://www.facebook.com/watch/mahoratLC/"
                        >
                          <FacebookSvg />
                        </a>
                        <a
                          className="text-[#AAAAAA] text-lg py-2 font-light"
                          href="https://www.instagram.com/mahoratmanagement/"
                        >
                          <InstagrammSvg />
                        </a>
                        <a
                          className="text-[#AAAAAA] text-lg py-2 font-light"
                          href="https://t.me/mahorat_management"
                        >
                          <TelegramSvg />
                        </a>
                        <a
                          className="text-[#AAAAAA] text-lg py-2 font-light"
                          href="https://www.youtube.com/channel/UC5a9BbxxGgeOJaZ2wdA9-xg"
                        >
                          <YouTubeSvg />
                        </a>
                      </div>
                      <p className="text-[#AAAAAA] text-lg font-light pt-24">
                        © 2022 Mahorat & Management. {t("All rights reserved.")}
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='footer-bg'></div> */}
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
