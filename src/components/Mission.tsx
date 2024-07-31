import { vissionmission } from "../assets";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.5,
        when: "beforeChildren",
      }}
      id="product"
      className={`${layout.section}  `}
    >
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 40 }}
        className={`${layout.sectionInfo} pl-0 sm:pl-5 w-full max-w-1/2 `}
      >
        {/* missinon */}
        <div className="flex bg-redprimary w-14 h-[2px] mb-3  " />
        <h1 className={` ${styles.heading2} `}>Our Mission</h1>
        <p
          className={`font-poppins md:p-0   mt-5 md:mt-0 lg:mt-3 text-justify  md:max-w-[350px] xl:max-w-[500px] w-full`}
        >
          To provide high-quality financial services and advisory support while
          promoting mindful savings and spending, investments, and financial
          literacy.
        </p>

        {/* vision */}

        <div className="flex bg-redprimary w-14 h-[2px] mb-3 mt-10 " />
        <h1 className={` ${styles.heading2} `}>Our Vision</h1>
        <p
          className={`font-poppins md:p-0  mt-5 md:mt-0  text-justify md:max-w-[350px] xl:max-w-[500px] w-full`}
        >
          To empower local businesses with financial knowledge and resources for
          sustainable growth and prosperity.
        </p>
      </motion.div>

      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 140 }}
        className={`${layout.sectionImg} mt-10 sm:mt-0 flex-1 `}
      >
        <img src={vissionmission} alt="Conference" className=" h-auto" />
      </motion.div>
    </motion.section>
  );
};

export default Mission;
