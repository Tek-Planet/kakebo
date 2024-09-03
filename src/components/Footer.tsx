import styles from "../style";
import {
  chevronright,
  facebook,
  instagram,
  location,
  mail,
  phone,
  twitter,
  whatsappwhite,
} from "../assets";
import { contact, navLinks } from "../constants";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const textStyle =
    "font-poppins font-semibold text-white text-[15px] opacity-80 leading-[27px] ";
  const rowStyle = "flex  gap-2 items-center mb-2";
  return (
    <section
      className={`${styles.flexStart} ${styles.paddingY} flex-col relative`}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col w-full `}>
        {/* first portion */}
        <div
          className={`flex-[1] flex flex-col md:w-auto w-full md:max-w-[350px] md:mr-4 mb-4 md:mb-0 gap-2`}
        >
          <h4 className="font-poppins font-semibold text-white text-[18px]  leading-[27px] ">
            Address
          </h4>
          <div className="flex bg-redprimary w-full h-[0.5px] my-4   " />
          {/* emaail */}
          <div className={rowStyle}>
            <img src={location} alt="menu" className="h-4 w-6 flex " />

            <h4 className={textStyle}>{contact.address}</h4>
          </div>

          <div className={rowStyle}>
            <img src={mail} alt="menu" className="h-4 flex w-6 " />

            <a href={`mailto:${contact.email}`}>
              <h4 className={textStyle}>{contact.email}</h4>
            </a>
          </div>

          <div className={rowStyle}>
            <img src={whatsappwhite} alt="menu" className="h-6 flex w-6 " />

            <a href={`https://wa.me/${contact.whatsappLink}`}>
              <h4 className={textStyle}>{contact.phone},</h4>
            </a>
            <a href={`https://wa.me/${contact.whatsappLink2}`}>
              <h4 className={textStyle}>{contact.phone2}</h4>
            </a>
          </div>
          <div className="ml-2">
            <h4 className="font-poppins font-semibold text-white text-lg">
              Working Hours
            </h4>
            <p className={textStyle}> Mondays - Fridays (8:00am - 4:00pm)</p>
          </div>

          {/* social media */}
          <div className={`flex gap-2 my-5  min-w-[100px] `}>
            <img src={facebook} alt="fb" className=" object-contain" />
            <img src={twitter} alt="fb" className=" object-contain" />
            <img src={instagram} alt="fb" className=" object-contain" />
          </div>
        </div>
        {/* second portion */}
        <div
          className={`flex-[1] flex flex-col md:w-auto w-full ] md:mr-4 mb-4 md:mb-0 gap-2`}
        >
          <h4 className="font-poppins font-semibold text-white text-[18px]  leading-[27px] ">
            Services
          </h4>
          <div className="flex bg-redprimary w-full h-[0.5px] my-4   " />
          <ul className="list-none  items-center grid ">
            {navLinks[2].subNav?.map((footerlink) => (
              <motion.li
                key={footerlink.title}
                whileHover={{
                  scale: 1.1,
                  originX: 0,
                  color: "#000000",
                }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <NavLink
                  to={{
                    pathname: `services/${footerlink.title}`,
                  }}
                  state={{ item: footerlink }}
                  key={footerlink.title}
                  className={rowStyle}
                >
                  <img src={chevronright} alt="menu" className=" h-5 " />

                  <h4 className={`${textStyle} hover:text-linkactive`}>
                    {footerlink.title}
                  </h4>
                </NavLink>
              </motion.li>
            ))}
          </ul>
          <div className={rowStyle}></div>
        </div>
        {/* third portion */}

        {/* fourth portion */}
        <div
          className={`flex-[1] flex flex-col md:w-auto w-full  md:mr-4 mb-4 md:mb-0 gap-2`}
        >
          <h4 className="font-poppins font-semibold text-white text-[18px]  leading-[27px] ">
            Credit Unions
          </h4>
          <div className="flex bg-redprimary w-full h-[0.5px] my-4   " />
          <ul className="list-none  gap-5 justify-end items-center flex-1">
            {navLinks[3].subNav?.map((footerlink) => (
              <motion.li
                key={footerlink.title}
                whileHover={{
                  scale: 1.1,
                  originX: 0,
                  color: "#000000",
                }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <NavLink
                  to={{
                    pathname: `unions/${footerlink.title}`,
                  }}
                  state={{ item: footerlink }}
                  className={rowStyle}
                >
                  <img src={chevronright} alt="menu" className=" h-5 " />

                  <h4 className={`${textStyle} hover:text-linkactive`}>
                    {footerlink.title}
                  </h4>
                </NavLink>
              </motion.li>
            ))}
          </ul>
          <div className={rowStyle}></div>
        </div>
      </div>
      <div className="flex bg-redprimary w-full h-[0.5px] my-4   " />
      <h4 className={`${textStyle} text-center w-full md:text-center`}>
        © Kakebo 2024, All Right Reserved.
      </h4>
    </section>
  );
};

export default Footer;
