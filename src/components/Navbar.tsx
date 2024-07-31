import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";
import { hoverVariant } from "../variants";
import { menu, close, logo, caret } from "../assets";
import { GeneralListModel } from "../types";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const activeLink = "font-semibold text-linkactive group text-sm md:text-lg ";
  const normalLink =
    "font-semibold  text-blueprimary hover:text-linkactive group text-sm md:text-lg ";

  const handleToggle = () => setToggle(!toggle);

  const [item, setItem] = useState(0);

  return (
    <nav className="w-full flex justify-between items-center h-[70px]  ">
      <NavLink to="/">
        <motion.img
          variants={hoverVariant}
          whileHover="hover"
          src={logo}
          alt="logo"
          className="h-[45px] object-contain"
        />
      </NavLink>

      {/* desktop view */}
      <ul className="list-none lg:flex hidden gap-5 justify-end items-center flex-1">
        {navLinks.map((nav, index) => {
          return (
            <motion.li
              key={index.toString()}
              whileHover={{
                originX: 0,
              }}
              transition={{ type: "spring", stiffness: 150 }}
              className="group"
            >
              <NavLink
                to={`/${nav.id}`}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <span className="capitalize ">{nav.title}</span>
              </NavLink>

              {nav.subNav && (
                <div className="bg-white absolute shadow-lg rounded-lg p-2  z-50  top-33 hidden group-hover:md:block hover:md:block sidebar">
                  {nav.subNav.map((subnav: GeneralListModel, index: number) => {
                    return (
                      <motion.li
                        key={index.toString()}
                        whileHover={{
                          scale: 1.05,
                          originX: 0,
                        }}
                        transition={{ type: "spring", stiffness: 130 }}
                        className="mt-2"
                      >
                        <NavLink
                          to={{
                            pathname: `${nav.id}/${subnav.title}`,
                          }}
                          state={{ item: subnav }}
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                        >
                          <span className="capitalize  text-sm ">
                            {subnav.title}
                          </span>
                        </NavLink>
                      </motion.li>
                    );
                  })}
                </div>
              )}
            </motion.li>
          );
        })}
      </ul>

      {/* mobile view */}
      <div className="lg:hidden flex flex-1 justify-end items-center w-full">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[25px] h-[25px] object-contain"
          onClick={handleToggle}
        />

        {toggle && (
          <div className="p-6  bg-white absolute top-[72px] right-0   w-full  z-50 sidebar">
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-3 w-full">
              {navLinks.map(
                (nav, index) =>
                  nav.subNav ? (
                    <li
                      key={index}
                      // onClick={handleToggle}
                    >
                      <div
                        onClick={() => {
                          if (item !== index) setItem(index);
                          else setItem(0);
                        }}
                        className="flex items-center gap-2"
                      >
                        <span className={`${normalLink} `}>{nav.title}</span>
                        <img src={caret} alt="" />
                      </div>

                      {nav.subNav && item === index && (
                        <ul className=" list-none flex flex-col gap-3 border border-gray-300 p-2  w-[300px]">
                          {nav.subNav.map((subNav, subIndex) => (
                            <li onClick={handleToggle} key={subIndex}>
                              <NavLink
                                to={{
                                  pathname: `${nav.id}/${subNav.title}`,
                                }}
                                state={{ item: subNav }}
                                className={({ isActive }) =>
                                  isActive ? activeLink : normalLink
                                }
                              >
                                {subNav.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={index} onClick={handleToggle}>
                      <NavLink
                        to={nav.id}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        {nav.title}
                      </NavLink>
                    </li>
                  )

                // stsrt
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
