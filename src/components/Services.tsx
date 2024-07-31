import { useNavigate } from "react-router";
import { ServiceCard } from ".";
import { navLinks } from "../constants";
import styles from "../style";

const Services = () => {
  let navigate = useNavigate();

  return (
    <div id="clients" className={`flex flex-col relative ${styles.paddingY}  `}>
      <div className=" items-center flex flex-col gap-4">
        <div className="flex bg-redprimary w-14 h-[2px]   " />

        <p className={` ${styles.heading2} `}>Our Services</p>
      </div>

      <div className={`flex flex-wrap justify-evenly`}>
        {navLinks[2].subNav?.map((item) => (
          <ServiceCard
            showButton
            key={item.id}
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
  );
};

export default Services;
