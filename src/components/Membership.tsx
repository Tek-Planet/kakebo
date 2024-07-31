import styles from "../style";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import CountUp from "react-countup";
import { GeneralListModel } from "../types";

type Props = {
  memberObject: GeneralListModel[];
};

const Membership = ({ memberObject }: Props) => {
  const [count, setCount] = useState(false);
  return (
    <div
      id="clients"
      className={` flex flex-col relative ${styles.paddingY}  `}
    >
      <div className=" items-center flex flex-col mb-5">
        <div className="flex bg-redprimary w-14 h-[2px]   " />

        <p className={` ${styles.heading2} `}>Our Membership</p>

        <p className={` font-semibold ${styles.textSize} `}>
          Our numbers speak for themselves
        </p>
      </div>

      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        <div className={`flex flex-wrap justify-evenly`}>
          {memberObject.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-y-3 p-5 md:w-[33%] lg:w-[20%] w-full justify-between items-center  rounded-[20px]  bg-white    m-2  shadow-lg "
            >
              <h1>
                {count && (
                  <CountUp
                    className={`${styles.heading3}`}
                    start={0}
                    end={parseInt(item.title)}
                    duration={10}
                    delay={0}
                  />
                )}
              </h1>
              <p className={` font-semibold ${styles.textSize} `}>{item.id}</p>
            </div>
          ))}
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Membership;
