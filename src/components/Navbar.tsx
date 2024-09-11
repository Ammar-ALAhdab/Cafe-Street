import { useState, useEffect } from "react";
import logo from "../assets/logo_coffe.svg";
import cart from "../assets/icons/icons_cart.svg";
import search from "../assets/icons/akar-icons_search.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";

const LINKS = [
  { label: "About us", href: "#about" },
  { label: "Our Product", href: "#products" },
  { label: "Delivery", href: "#delivery" },
];

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollYFlag, setScrollYFlag] = useState(false);
  const [windowInnerWidth, setWindowInnerWidth] = useState(0);

  // Handle Burger/X Menu Icon Button To Open And Close NavMenu
  const handleMenuNav = () => {
    setScrollYFlag(true);
    setOpenMenu(!openMenu);
  };

  // Handle Resize To Hide Side NavMenu
  useEffect(() => {
    const handleResize = () => {
      setWindowInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if (windowInnerWidth > 834) {
      setOpenMenu(false);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowInnerWidth]);

  // Handle Disallow Scrolling When NavMenu is Open
  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [openMenu]);
  // Handle Change Background Of Header When Scrolling
  useEffect(() => {
    const handleScroll: EventListenerOrEventListenerObject = () => {
      if (window.scrollY > 0) {
        setScrollYFlag(true);
      } else {
        setScrollYFlag(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYFlag]);
  return (
    <nav
      className={`flex justify-between items-center py-4 absolute top-0 left-0 z-30 w-full ${
        openMenu ? "bg-orange-200" : "bg-transparent"
      } xl:px-20 xs:px-10  max-xs:px-4 transition-colors`}
    >
      <button
        className="p-2 hidden max-md:block cursor-pointer"
        onClick={handleMenuNav}
      >
        {openMenu ? (
          <FontAwesomeIcon icon={faX} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="lg" />
        )}
      </button>
      <img src={logo} alt="cafe logo" />
      <ul className="hidden md:flex justify-between items-center md:gap-4 lg:gap-8 text-lg ">
        {LINKS.map((link, index) => {
          return (
            <li
              key={index}
              className="hover:text-primary
              text-center transition-colors cursor-pointer"
            >
              <a href={link.href} onClick={() => setOpenMenu(false)}>
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-between items-center gap-8">
        <div className="hidden md:flex justify-between items-center gap-4 rounded-full w-[222px] h-10 bg-white p-4">
          <img src={search} alt="search icon" className="cursor-pointer" />
          <input
            type="search"
            name="searchBar"
            id="searchBar"
            className="w-full outline-none text-xs text-light"
          />
        </div>
        <img src={cart} alt="cart icon" className="cursor-pointer" />
      </div>
      <div
        className={`flex justify-center items-start max-md:w-svw h-screen z-50 absolute ${
          openMenu ? "left-0" : "-left-[1000px]"
        } bg-secondary text-white py-10 transition-all duration-500 top-[70px]`}
      >
        <ul className="flex-1 flex justify-center items-center gap-10  flex-col">
          {LINKS.map((link) => {
            return (
              <li
                key={link.label}
                className="hover:bg-primary w-full 
              p-2 text-center transition-colors cursor-pointer"
                onClick={() => setOpenMenu(false)}
              >
                <a href={link.href} className="text-center">
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
