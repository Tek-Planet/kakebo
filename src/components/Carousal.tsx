import { Button } from ".";
import styles from "../style";

import { motion } from "framer-motion";

type Props = {
  placeholder: string;
  image?: string;
  onclick: () => void;
};

const Carousal = (props: Props) => {
  const { placeholder, onclick, image } = props;
  return (
    <section className={`flex justify-center items-center `}>
      <motion.div
        initial={{ y: "100vw" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 35 }}
        className={`bg-center relative bg-cover h-[70vh] md:h-[100vh]  object-scale-down  w-full `}
        style={{
          backgroundImage: `url( ${image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 "></div>

        {/* Centered div */}
        <div className="absolute z-10 inset-0 flex flex-col justify-center items-center ">
          <div className="flex flex-col items-center text-white gap-6">
            <p className={`${styles.heading2} text-white`}>
              Become a member of
            </p>

            <p className={`  ${styles.heading2} text-white `}>
              the Credit Union
            </p>

            {/* <p className={`tex-sm font-poppins text-secondaryBlue`}>
              Your One-Stop Shop for all Equipment Rental Needs
            </p> */}

            <Button
              onclick={() => {
                onclick();
              }}
              styles={
                "text-primary bg-redprimary lg:max-w-1/2 w-1/2 lg:text-[18px]"
              }
              text="Join Now"
            />

            {/*  this should be at the bottom of the page */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Carousal;
