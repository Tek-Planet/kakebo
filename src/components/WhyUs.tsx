import { quality, support, sustainable, trusted, why } from "../assets";
import styles, { layout } from "../style";

type Props = {
  reverse?: boolean;
};

const WhyUs = (props: Props) => {
  const { reverse } = props;
  return (
    <section
      id="product"
      className={`flex ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row pl-0 md:pl-5"
      } flex-col  `}
    >
      <div className={`${layout.sectionInfo}  `}>
        <div className="flex bg-redprimary w-14 h-[2px] mb-5  " />
        <h1 className={` ${styles.heading2} `}>Why Choose Us</h1>
        <p
          className={`font-poppins md:p-0  text-justify  mt-5 md:mt-0 lg:mt-5 leading-8`}
        >
          We offer financial services to meet the unique financial needs of
          persons, savings groups, businesses, other private, publc institutions
          and communities in Sierra Leone. Our community-centric approach
          ensures we offer accessible and impactful financial services,
          fostering trustworthy relationships through transparency and
          reliability. By adopting innovative financial solutions, we drive
          client growth and success, while empowering households to save for
          future needs.
        </p>

        {/* reasons section */}
        {/* top row */}
        <div className=" flex mt-8 justify-between w-full lg:max-w-96">
          <div className="flex gap-1 items-center h-16">
            <img src={sustainable} alt="menu" className="h-[70px]" />
            <div className="flex flex-col  h-full justify-between pt-2">
              <p className={`font-poppins text-md text-redprimary `}>Safety</p>
              <p
                className={`font-poppins text-md text-blueprimary font-semibold `}
              >
                Solutions
              </p>
            </div>
          </div>

          <div className="flex gap-1 items-center h-16">
            <img src={quality} alt="menu" className="h-[70px]" />
            <div className="flex flex-col  h-full justify-between pt-2">
              <p className={`font-poppins text-md text-redprimary `}>
                Dependable
              </p>
              <p
                className={`font-poppins text-md text-blueprimary font-semibold `}
              >
                Services
              </p>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className=" flex mt-8 justify-between w-full lg:max-w-96">
          <div className="flex gap-1 items-center h-16">
            <img src={trusted} alt="menu" className="h-[70px]" />
            <div className="flex flex-col  h-full justify-between pt-2">
              <p className={`font-poppins text-md text-redprimary `}>Quality</p>
              <p
                className={`font-poppins text-md text-blueprimary font-semibold `}
              >
                Services
              </p>
            </div>
          </div>

          <div className="flex gap-1 items-center h-16">
            <img src={support} alt="menu" className="h-[70px]" />
            <div className="flex flex-col  h-full justify-between pt-2">
              <p className={`font-poppins text-md text-redprimary `}>24/7</p>
              <p
                className={`font-poppins text-md text-blueprimary font-semibold `}
              >
                Support
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${layout.sectionImg} mt-10 sm:mt-0 pl-0 md:pl-5 h-full lg:h-[600px] `}
      >
        <img src={why} alt="Conference" className=" object-contain h-full" />
      </div>
    </section>
  );
};

export default WhyUs;
