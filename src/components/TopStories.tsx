import styles from "../style";

import TopStoriesSlider from "./TopStoriesSlider";

const OurIdentity = () => {
  return (
    <section className={` flex flex-col gap-8`}>
      <div className=" items-center flex flex-col gap-4">
        <div className="flex bg-redprimary w-14 h-[2px]   " />

        <p className={` ${styles.heading2} `}>Our Client Stories</p>

        <p
          className={`font-poppins md:p-0  font-semibold mt-5 md:mt-0  leading-8`}
        >
          Empowering households, businesses, and communities.
        </p>
      </div>

      <TopStoriesSlider />
    </section>
  );
};

export default OurIdentity;
