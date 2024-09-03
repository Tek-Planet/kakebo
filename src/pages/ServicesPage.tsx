import styles from "../style";

import { motion } from "framer-motion";

import { AboutCarousal, AboutUs, LogoSlider, Membership } from "../components";
import { locationblack, main, phoneblack } from "../assets";
import { useLocation } from "react-router-dom";
import { donors, faq, membership, staffs } from "../constants";

const ServicesPage = () => {
  const location = useLocation();

  // Access the state object to get the passed data
  const { item } = location.state;

  const textStyle =
    "font-poppins font-semibold  text-[15px] opacity-80 leading-[27px] ";
  const rowStyle = "flex  gap-2 items-center mb-2";
  const header =
    "font-poppins font-semibold  text-[20px]  md:text-[24px]  leading-[27px] my-2";
  const divider = "flex bg-redprimary w-16 h-[2px] ";

  return (
    <motion.div
      id="home"
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-primary w-full overflow-hidden"
    >
      {/* carousal */}
      <div className={` ${styles.flexStart}  `}>
        <div className={`${styles.boxWidth} `}>
          <AboutCarousal
            image={main}
            title={item?.title}
            content={item.content}
          />
        </div>
      </div>

      {/* about section */}
      <div className={`  ${styles.paddingX}  ${styles.paddingY}`}>
        <AboutUs
          content={item.description}
          showButton={false}
          image={item.mainImage}
        />
      </div>

      {parseInt(item.id) < 11 && (
        <div className={` ${styles.paddingX} bg-secondary  `}>
          <Membership memberObject={membership[parseInt(item.id)]} />
        </div>
      )}

      {/* donor patners */}
      <div className=" py-[40px]  lg:py-[80px]">
        <h2 className={`${styles.heading2} text-center pb-3 md:pb-4 mb-8`}>
          DONOR PARTNERS
        </h2>
        <LogoSlider items={donors} />
      </div>
      {/* <div className={` bg-secondary ${styles.paddingX} `}>
        <Services />
      </div> */}

      <div className={` bg-primary ${styles.paddingX} ${styles.paddingY} `}>
        <div className=" items-center flex flex-col gap-4">
          <div className="flex bg-redprimary w-14 h-[2px]   " />
          <p className={` ${styles.heading2} `}>OUR STAFF</p>

          <div className="w-full">
            <div
              className={`flex flex-wrap  ${styles.textSize} font-semibold  w-full justify-center rounded-full shadow-lg m-1 p-2 bg-blueprimary text-white `}
            >
              <p className="text-center w-[33%] ">NAME</p>
              {/* <p className="text-center w-[33%] ">POSITION</p> */}

              {/* <p className="text-center w-[33%]  ">CONTACT</p> */}
            </div>

            {/* staffs */}
            {staffs?.map((staff, index) => {
              if (staff?.unionId === item.vid)
                return (
                  <div
                    key={index.toString()}
                    className={`flex flex-wrap ${styles.textSize}
                  ${index % 2 === 0 && "bg-gray-300"}
                  flex w-full justify-center p-2 rounded-full shadow-lg m-1 `}
                  >
                    <p className="text-center w-[33%] ">{staff.name}</p>

                    {/* <p className="text-center w-[33%] ">{staff.position}</p> */}

                    {/* <p className="text-center w-[33%]  ">{staff.phone}</p> */}
                  </div>
                );
            })}
          </div>
        </div>
      </div>

      {/* constact info */}
      {/*  */}

      <div className={` bg-secondary ${styles.paddingX} ${styles.paddingY} `}>
        <div className=" items-center flex flex-col gap-4">
          <div className="flex bg-redprimary w-14 h-[2px]   " />
          <p className={` ${styles.heading2} `}>CONTACT INFORMATION</p>
          {faq[0] &&
            faq[0]?.answer?.map((staff, index) => {
              if (staff?.unionId === item.id)
                return (
                  <div
                    className={`flex md:flex-row  flex-col my-10 w-full md:max-w-[1000px] justify-between `}
                  >
                    <div
                      className={` flex flex-col md:w-auto w-full md:max-w-[350px] md:mr-4 mb-4 md:mb-0 gap-2`}
                    >
                      <div className={divider} />
                      <h4 className={header}>Call Us</h4>
                      <div className={rowStyle}>
                        <img
                          src={phoneblack}
                          alt="menu"
                          className="h-4 flex "
                        />
                        <h4 className={textStyle}>
                          <a
                            href={`tel:+${
                              staff?.contact && staff?.contact[0]?.phone
                            }`}
                          >
                            {staff?.contact && staff?.contact[0]?.phone}
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div
                      className={` flex flex-col md:w-auto w-full md:max-w-[350px] md:mr-4 mb-4 md:mb-0 gap-2`}
                    >
                      <div className={divider} />
                      <h4 className={header}>Visit Us</h4>
                      <div className={rowStyle}>
                        <img
                          src={locationblack}
                          alt="menu"
                          className="h-4 flex "
                        />
                        <h4 className={textStyle}>{staff && staff?.address}</h4>
                      </div>
                    </div>
                  </div>
                );
            })}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
