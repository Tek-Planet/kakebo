import styles from "../style";

import { motion } from "framer-motion";

import { AboutCarousal, Contact, MapContainer } from "../components";
import { hero } from "../assets";

const ContactPage = () => {
  return (
    <motion.div
      id="home"
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-secondary w-full overflow-hidden"
    >
      {/* carousal */}
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <AboutCarousal
            image={hero}
            title={"Contact Us"}
            content={
              "Interested in any of our services and want to know more?. Simply fill in the form and will get back to you."
            }
          />

          <div className={`${styles.paddingX} ${styles.paddingY} `}>
            <Contact isContact />
          </div>

          <MapContainer />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
