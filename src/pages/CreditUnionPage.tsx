import styles from "../style";

import { motion } from "framer-motion";

import { AboutCarousal, EquipmentCard } from "../components";
import {
  hero,
  info,
  locationblack,
  mailblack,
  person,
  phoneblack,
} from "../assets";
import { faq, interestRates, navLinks, staffs } from "../constants";
import { useNavigate } from "react-router-dom";

const CreditUnionPage = () => {
  let navigate = useNavigate();

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
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <AboutCarousal
            image={hero}
            title={"Our Credit Unions"}
            content={
              "Learn more about the Cooperative Credit Unions that are under KAKEBO management and how they are helping impact the livelihoods and financial security of thousands of households and changing the business landscapes in many communities, towns and cities across Sierra Leone."
            }
          />

          <div
            className={`${styles.paddingX} ${styles.paddingY}  flex flex-wrap justify-evenly`}
          >
            {navLinks[3].subNav?.map((item) => (
              <EquipmentCard
                item={item}
                onClick={() => {
                  navigate(`/unions/${item.title}`, {
                    state: { item: item },
                  });
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className={` bg-primary ${styles.paddingX} ${styles.paddingY} `}>
        <div className=" items-center flex flex-col gap-4">
          <div className="flex bg-redprimary w-14 h-[2px]   " />
          <p className={` ${styles.heading2} `}>FAQ</p>
          <div
            className={`flex md:flex-row  flex-col  w-full justify-between `}
          >
            {faq && (
              <div className="w-full ">
                {faq.map((item, index) => {
                  if (item.id !== "membership" && item.id !== "loan")
                    return (
                      <div key={item.id} className="mb-5">
                        <p
                          className={`${styles.textSize} font-semibold leading-8 text-blueprimary`}
                        >
                          {item.title}{" "}
                        </p>

                        {item.answer &&
                          item?.answer.map((item) => (
                            <div
                              key={item.title}
                              className="flex flex-col gap-2 md:flex-row justify-between mt-5"
                            >
                              <div className="w-full flex-1">
                                <p className={` ${styles.textSize} `}>
                                  {item.heading && (
                                    <span className="font-bold">
                                      {item.heading}
                                    </span>
                                  )}{" "}
                                  {item.title}{" "}
                                </p>
                              </div>

                              {item.address && (
                                <div className=" w-full md:w-[32%] flex  gap-2 items-center">
                                  <img
                                    src={locationblack}
                                    alt="menu"
                                    className="h-4 flex "
                                  />
                                  <p className={`${styles.textSize}`}>
                                    {item.address}{" "}
                                  </p>
                                </div>
                              )}

                              {item.contact && (
                                <div className="w-full md:w-[28%] flex  gap-2 items-center">
                                  <img
                                    src={phoneblack}
                                    alt="menu"
                                    className="h-4 flex "
                                  />
                                  {item.contact &&
                                    item?.contact.map((item) => (
                                      <div key={item.name} className="">
                                        <a href={item.phone}>
                                          <p className={`${styles.textSize} `}>
                                            {item.name}
                                          </p>
                                        </a>
                                      </div>
                                    ))}
                                </div>
                              )}
                            </div>
                          ))}

                        {index === 0 && (
                          <div className={` flex flex-col w-full gap-2  mt-5`}>
                            <div className={"flex gap-2 items-center"}>
                              <img
                                src={info}
                                alt="menu"
                                className="h-4 flex "
                              />

                              <p className={styles.textSize}>
                                For more information contact:
                              </p>
                            </div>

                            <div
                              className={`flex md:flex-row flex-col gap-2 w-full justify-between`}
                            >
                              <div className={"flex gap-2 items-center"}>
                                <img
                                  src={person}
                                  alt="menu"
                                  className="h-4 flex "
                                />
                                <p className={styles.textSize}>
                                  {staffs[0].name +
                                    " (" +
                                    staffs[0].position +
                                    ")"}
                                </p>
                              </div>

                              <div className={"flex gap-2 items-center"}>
                                <img
                                  src={phoneblack}
                                  alt="menu"
                                  className="h-4 flex "
                                />

                                <p className={styles.textSize}>
                                  {staffs[0].phone}
                                </p>
                              </div>

                              <div
                                className={
                                  "flex w-full sm:max-w-[500px] gap-2 items-center"
                                }
                              >
                                <img
                                  src={mailblack}
                                  alt="menu"
                                  className="h-4 flex"
                                />

                                <p
                                  className={`${styles.textSize} text-[14px] sm:text-[1 6px] `}
                                >
                                  {staffs[0].email}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                })}
              </div>
            )}
          </div>

          <div className="w-full">
            <p
              className={`${styles.textSize} font-semibold text-blueprimary mb-3`}
            >
              WHAT IS THE INTEREST ON CREDIT UNION LOANS?
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
              className={` text-[10px] sm:text-sm ${styles.textSize} font-semibold  flex w-full justify-between rounded-full shadow-lg m-1 p-2 bg-blueprimary text-white `}
            >
              <p className="w-[20%] text-center">PERIOD (MONTHS) </p>

              <p className="w-[20%] text-center">PRINCIPAL (NLe)</p>

              <p className="w-[20%] text-center">INTEREST (NLe)</p>

              <p className="w-[20%] text-center">TOTAL (NLe)</p>

              <p className="w-[20%] text-center">BALANCE (NLe)</p>
            </div>

            {interestRates.map((item, index) => (
              <div
                className={`text-[10px] sm:text-sm ${styles.textSize} 
                ${index % 2 === 0 && "bg-gray-300"}
                flex w-full justify-between p-2 rounded-full shadow-lg m-1 `}
              >
                <p className="w-[20%] text-center">{item.period} </p>

                <p className="w-[20%] text-center">{item.principal}</p>
                <p className="w-[20%] text-center">{item.interest}</p>

                <p className="w-[20%] text-center">{item.total}</p>

                <p className="w-[20%] text-center">{item.balance}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CreditUnionPage;
