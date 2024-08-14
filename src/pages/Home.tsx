import styles from "../style";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  AboutUs,
  Carousal,
  Contact,
  Membership,
  OurClients,
  Services,
  TopStories,
  WhyUs,
} from "../components";
import { hero, hero2, hero3, locationblack, next, phoneblack } from "../assets";
import { donors, faq, membership } from "../constants";

const Home = () => {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/aboutus`);
  };

  // i want function when button is clicke should scroll to section
  const scrollToQuote = () => {
    const quoteSection = document.getElementById("contactus");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <div className={` ${styles.flexStart} `}>
        <div className={`${styles.boxWidth} `}>
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop
            interval={3000}
            showArrows={true}
            showStatus={false}
          >
            <Carousal
              image={hero}
              onclick={scrollToQuote}
              placeholder={`Become a member of the \n Credit Union`}
            />

            <Carousal
              image={hero2}
              onclick={scrollToQuote}
              placeholder={`Become a member of the Credit Union`}
            />

            <Carousal
              image={hero3}
              onclick={scrollToQuote}
              placeholder={`Become a member of the Credit Union`}
            />
          </Carousel>
        </div>
      </div>

      {/* about section */}
      <div className={` ${styles.paddingX} ${styles.paddingY} `}>
        <AboutUs
          title="About Us"
          content="Welcome to Kakebo Financial Services! We are a dedicated financial service provider committed to empowering Sierra Leoneans through sustainable financial solutions. Managing 11 credit unions across the nation, we offer a range of financial services tailored to meet the unique needs of our communities."
          showButton={true}
          subContent="Our expert team provides essential technical assistance to ensure our credit unions operate efficiently and effectively, fostering financial inclusion and economic growth. At Kakebo, we believe in building a brighter financial future for Sierra Leone, one community at a time."
          onclick={handleNavigate}
        />
      </div>

      {/* services section */}
      <div className={` ${styles.paddingX} bg-secondary  `}>
        <Membership memberObject={membership[0]} />
      </div>

      <div className={` ${styles.paddingX} `}>
        <Services />
      </div>
      {/* why choose us */}

      <div className={` ${styles.paddingX} ${styles.paddingY} bg-secondary`}>
        <WhyUs />
      </div>

      <div className={` ${styles.paddingX} `}>
        <OurClients title="Our Partners" items={donors} />
      </div>

      {/* Quote section  */}
      {/* <div className={` ${styles.paddingX}  ${styles.paddingY} bg-secondary`}>
        <TopStories />
      </div> */}

      {/* <div id="contactus" className={`${styles.paddingX} ${styles.paddingY} `}>
        <Contact />
      </div> */}

      <div
        id="contactus"
        className={` bg-primary ${styles.paddingX} ${styles.paddingY} `}
      >
        <div className=" items-center flex flex-col gap-4">
          <div className="flex bg-redprimary w-14 h-[2px]   " />
          <p className={` ${styles.heading2} `}>Become a member</p>
          <div
            className={`flex md:flex-row  flex-col  w-full justify-between `}
          >
            {faq && (
              <div className="w-full ">
                {faq.map((item) => {
                  if (item.id === "membership" || item.id === "loan")
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
                              <div className="w-full flex gap-2">
                                <img
                                  src={next}
                                  alt="menu"
                                  className="h-4 flex "
                                />
                                <p className={`${styles.textSize} `}>
                                  {item.title}{" "}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
