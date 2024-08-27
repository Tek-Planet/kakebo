import styles, { layout } from "../style";

import { motion } from "framer-motion";

import {
  AboutCarousal,
  AboutUs,
  MobileTransferSlider,
  ServiceCard,
} from "../components";
import { hero, rocket, why } from "../assets";
import { useLocation } from "react-router-dom";
import { GeneralListModel } from "../types";
import { interestRates } from "../constants";
import { Key } from "react";

const SavingsPage = () => {
  const location = useLocation();

  // Access the state object to get the passed data
  const { item } = location.state;

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
            image={hero}
            title={item?.title}
            content={item.content}
            buttonText={item?.buttonText}
          />
        </div>
      </div>

      {/* about section */}
      <div className={` bg-secondary ${styles.paddingX}  ${styles.paddingY}`}>
        <AboutUs
          content={item.description}
          showButton={false}
          image={item.mainImage}
          title={"Welcome to Kakebo " + item.subheading}
          plans={item.plans}
          planName={item.title}
        />
      </div>

      {/* constact info */}
      {/*  */}
      <div className={` bg-primary ${styles.paddingX} ${styles.paddingY} `}>
        <section
          id="contact"
          className={`flex ${"sm:flex-row pl-0 md:pl-5"} flex-col  `}
        >
          <div className={`${layout.sectionInfo}  `}>
            <div className="flex bg-redprimary w-14 h-[2px] mb-5  " />
            <h1 className={` ${styles.heading2} `}>
              Why Choose Kakebo {item.subheading}
            </h1>

            {/* reasons section */}
            {/* top row */}
            <div className=" flex  justify-between w-full lg:max-w-[600px]">
              {item.reason && (
                <div className="mt-5 ">
                  {item.reason.map((item: GeneralListModel) => (
                    <div key={item.id} className=" mt-3">
                      <p
                        className={`font-poppins md:p-0 text-justify   font-semibold  leading-8`}
                      >
                        {item.title}{" "}
                        <span className="font-normal">{item.content}</span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-5 items-center lg:max-w-[600px] mt-5">
              <img src={rocket} alt="menu" className="h-[25px] " />

              <p
                className={`font-poppins md:p-0 font-semibold  leading-8 text-justify`}
              >
                <span className="font-normal">{item.notes}</span>
              </p>
            </div>
          </div>

          <div className={`${layout.sectionImg} mt-10 sm:mt-0 pl-0 md:pl-5 `}>
            <img src={why} alt="Conference" className="" />
          </div>
        </section>
      </div>

      <div className={` bg-primary ${styles.paddingX} ${styles.paddingY} `}>
        <h2 className={`${styles.heading3} text-center pb-3 md:pb-4 mb-8`}>
          {`Our ${item.title} ${
            item.title === "Loan" || item.title === "Savings"
              ? "Plans"
              : item.title === "Mobile Money Transfer"
              ? "Services"
              : ""
          } Include`}
        </h2>
        {item?.title === "Mobile Transfer" ? (
          <MobileTransferSlider items={item.plans} />
        ) : (
          <div className={`flex flex-wrap justify-evenly`}>
            {item.plans?.map((item: { id: Key | null | undefined }) => (
              <ServiceCard key={item.id} item={item} onClick={() => {}} />
            ))}
          </div>
        )}
      </div>

      {item?.title === "Loans" && (
        <div className={` bg-primary ${styles.paddingX} ${styles.paddingY} `}>
          <div className=" items-center flex flex-col gap-4">
            <div className="w-full">
              <p
                className={`${styles.textSize} font-semibold text-blueprimary mb-3`}
              >
                WHAT IS THE INTEREST ON OUR LOAN FACILITIES?
              </p>
              <p className={` ${styles.textSize} `}>
                Just 3% per every payment on a reducing balance method!
              </p>
              <p className={` ${styles.textSize} `}>
                For example: If you take a loan of NLe 6,000 to be paid in 6
                months, at the amount of NLe 1,000 a month, the interest and
                repayment would be as follows:
              </p>
              <div
                className={` text-[10px] sm:text-sm ${styles.textSize} font-semibold  flex w-full justify-between rounded-full shadow-lg m-1 p-2 bg-blueprimary text-white  mt-5`}
              >
                <p className="w-[20%] text-center">PERIOD (MONTHS) </p>

                <p className="w-[20%] text-center">PRINCIPAL (NLe)</p>
                <p className="w-[20%] text-center">PRINCIPAL ($)</p>

                {/* <p className="w-[20%] text-center">INTEREST (NLe)</p> */}

                <p className="w-[20%] text-center">TOTAL (NLe)</p>
                <p className="w-[20%] text-center">TOTAL ($)</p>

                <p className="w-[20%] text-center">BALANCE (NLe)</p>
                <p className="w-[20%] text-center">BALANCE ($)</p>
              </div>

              {interestRates.map((item, index) => (
                <div
                  className={`text-[10px] sm:text-sm ${styles.textSize} 
                ${index % 2 === 0 && "bg-gray-300"}
                flex w-full justify-between p-2 rounded-full shadow-lg m-1 `}
                >
                  <p className="w-[20%] text-center">{item.period} </p>

                  <p className="w-[20%] text-center">{item.principal}</p>
                  <p className="w-[20%] text-center">{item.USDPrincipal}</p>
                  {/* <p className="w-[20%] text-center">{item.interest}</p> */}

                  <p className="w-[20%] text-center">{item.total}</p>
                  <p className="w-[20%] text-center">{item.USDTotal}</p>

                  <p className="w-[20%] text-center">{item.balance}</p>
                  <p className="w-[20%] text-center">{item.USDBalance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SavingsPage;
