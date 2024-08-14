import styles from "../style";

import { motion } from "framer-motion";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  AboutCarousal,
  AboutUs,
  Mission,
  OurClients,
  WhyUs,
} from "../components";
import { hero } from "../assets";
import { donors, staffs } from "../constants";

const AboutUsPage = () => {
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
            title="About Us"
            // content="Our services range from drilling and blasting consumable products to providing equipment and logistics services in the mining industry. We are committed to offering industry-leading product quality, innovation and excellent customer service."
          />
        </div>
      </div>

      {/* about section */}
      <div className={` ${styles.paddingX}  ${styles.paddingY} bg-secondary`}>
        <AboutUs
          title="Who we are"
          content="Formed in 2023, Kakebo Financial Services is dedicated to empowering Sierra Leoneans through innovative and accessible financial solutions. With a deep understanding of the local communities, markets, and ecosystems, we strive to meet the unique financial needs of our clients. We manage 11 credit unions across the nation, providing essential financial services and technical assistance to ensure efficient and effective operations. Our community-centric approach drives us to prioritize the needs of the people we serve, ensuring that our offerings are both impactful and accessible."
          showButton={false}
          subContent="We uphold the highest standards of integrity and transparency, fostering strong and trustworthy relationships with our clients. By continuously adopting innovative financial solutions, we aim to enhance our services and drive growth and success for our clients. In addition, we are committed to empowering households by providing the tools and knowledge necessary to save for the future and navigate financial challenges. At Kakebo, we believe in building a brighter financial future for Sierra Leone, one community at a time."
        />
      </div>

      {/* services section */}
      <div className={` ${styles.paddingX}  ${styles.paddingY}  bg-primary`}>
        <Mission />
      </div>
      {/* why choose us */}

      <div className={` ${styles.paddingX} ${styles.paddingY}  bg-secondary`}>
        <WhyUs />
      </div>

      <div className={` ${styles.paddingX} `}>
        <OurClients items={donors} title="Our Partners" />
      </div>

      <div className={` bg-primary ${styles.paddingX} ${styles.paddingY} `}>
        <div className=" items-center flex flex-col gap-4">
          <div className="flex bg-redprimary w-14 h-[2px]   " />
          <p className={` ${styles.heading2} `}>OUR STAFF</p>

          <div className="w-full">
            <div
              className={`flex flex-wrap  ${styles.textSize} font-semibold  w-full justify-between rounded-full shadow-lg m-1 p-2 bg-blueprimary text-white `}
            >
              <p className="text-center w-[35%]">Credit Union</p>

              <p className="text-center w-[20%] ">NAME</p>
              {/* <p className="text-center w-[20%] ">POSITION</p> */}

              {/* <p className="text-center w-[25%]  ">CONTACT</p> */}
            </div>

            {staffs.map((item, index) => {
              if (index !== 0)
                return (
                  <div
                    key={index.toString()}
                    className={`flex flex-wrap ${styles.textSize}
                  ${index % 2 === 0 && "bg-gray-300"}
                  flex w-full justify-between p-2 rounded-full shadow-lg m-1 `}
                  >
                    <p className="text-center w-[35%]">
                      {index > 0 && staffs[index - 1].email === item.email
                        ? ""
                        : item.email}
                    </p>

                    <p className="text-center w-[20%] ">{item.name}</p>

                    {/* <p className="text-center w-[20%] ">{item.position}</p> */}

                    {/* <p className="text-center w-[25%]  ">{item.phone}</p> */}
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUsPage;
