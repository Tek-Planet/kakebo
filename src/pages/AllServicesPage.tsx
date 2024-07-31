import styles from "../style";

import { motion } from "framer-motion";

import { AboutCarousal, EquipmentCard, ServiceCard } from "../components";
import { hero } from "../assets";
import { navLinks } from "../constants";
import { useNavigate } from "react-router-dom";

const AllServicesPage = () => {
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
            title={"Our Services"}
            content={
              "We provide a wide range of financial services to meet your needs."
            }
          />

          <div
            className={`${styles.paddingX} ${styles.paddingY}  flex flex-wrap justify-evenly`}
          >
            {navLinks[2].subNav?.map((item) => (
              <ServiceCard
                key={item.id}
                showButton
                item={item}
                onClick={() => {
                  navigate(`/services/${item.title}`, {
                    state: { item },
                  });
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AllServicesPage;
