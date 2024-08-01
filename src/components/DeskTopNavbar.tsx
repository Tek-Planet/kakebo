import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { contact, navLinks } from "../constants";
import { hoverVariant } from "../variants";
import { location, close, logo, caret, phone, mail } from "../assets";

const DeskTopNavbar = () => {
  const [toggle, setToggle] = useState(false);

  const normalLink = "font-semibold  text-white text-sm";

  const handleToggle = () => setToggle(!toggle);

  return (
    <nav className="w-full flex py-4 justify-between items-center bg-blueprimary ">
      {/* location */}
      {/* call icone */}
      <NavLink
        to={""}
        target={"_blank"}
        className={`${normalLink} flex items-center  gap-2 `}
      >
        <div className="bg-redprimary p-[6px] rounded-full">
          <motion.img
            variants={hoverVariant}
            whileHover="hover"
            src={location}
            alt="menu"
            className="h-4"
          />
        </div>
        {contact.address}
      </NavLink>

      <div className="flex  gap-5">
        {/* call icone */}
        <NavLink
          to={""}
          target={"_blank"}
          className={`${normalLink} flex items-center  gap-2 `}
        >
          <div className="bg-redprimary p-[6px] rounded-full">
            <motion.img
              variants={hoverVariant}
              whileHover="hover"
              src={phone}
              alt="menu"
              className="h-4"
            />
          </div>
          <a href="tel:+232 76332287"> {contact.phone}</a>
        </NavLink>
        {/* mail icon */}
        <NavLink
          to={""}
          target={"_blank"}
          className={`${normalLink} flex items-center  gap-2 `}
        >
          <div className="bg-redprimary p-[6px] rounded-full">
            <motion.img
              variants={hoverVariant}
              whileHover="hover"
              src={mail}
              alt="menu"
              className="h-4"
            />
          </div>
          <a href="mailto:info@kakebofinancialservices.com">{contact.email}</a>
        </NavLink>
      </div>
    </nav>
  );
};

export default DeskTopNavbar;
