import { about, hero } from "../assets";
import styles, { layout } from "../style";
import { GeneralListModel } from "../types";
import Button from "./Button";
import { motion } from "framer-motion";

type Props = {
  title?: string;
  content?: string;
  subContent?: string;
  showButton: boolean;
  image?: string;
  buttonText?: string;
  onclick?: () => void;
  plans?: GeneralListModel[];
  planName?: string;
};

const AboutUs = (props: Props) => {
  const { title, content, showButton, subContent, image, buttonText, onclick } =
    props;
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
        className={`${layout.sectionImg}`}
      >
        <img
          src={image ? image : hero}
          alt={title}
          className="h-full object-contain  "
        />
      </motion.div>

      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 140 }}
        className={`${layout.sectionInfo}  pl-0 md:pl-10 `}
      >
        <div className="flex mt-10 md:mt-0 bg-redprimary w-14 h-[2px] mb-5  " />
        {title && <h1 className={` ${styles.heading2} `}>{title}</h1>}
        {content && (
          <p
            className={`font-poppins md:p-0 text-justify  mt-5 md:mt-0 lg:mt-5 leading-8`}
          >
            {content}
          </p>
        )}
        {subContent && (
          <p
            className={`font-poppins md:p-0 text-justify  mt-5 md:mt-0 lg:mt-5 leading-8`}
          >
            {subContent}
          </p>
        )}

        {/* {plans && (
          <div className="mt-5">
            <h1 className={` ${styles.heading3} `}>
              {`Our ${planName} ${
                planName === "Loan" || planName === "Savings"
                  ? "Plans"
                  : planName === "Mobile Money Transfer"
                  ? "Services"
                  : ""
              } Include`}
            </h1>
            {plans.map((item) => (
              <div key={item.id} className="">
                <p
                  className={`font-poppins md:p-0 font-semibold  text-justify    leading-8`}
                >
                  {item.title}{" "}
                  <span className="font-normal">{item.content}</span>
                </p>
              </div>
            ))}
          </div>
        )} */}
        {showButton && (
          <Button
            onclick={() => {
              if (onclick) onclick();
            }}
            styles={
              "text-primary bg-redprimary lg:max-w-1/2 p-2 mt-4 md:mt-5 mb-4 md:mt-0  lg:text-[16px] "
            }
            text={buttonText ? buttonText : "Explore More"}
          />
        )}
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;
