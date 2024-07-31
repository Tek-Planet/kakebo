import { LogoSlider } from ".";
import styles from "../style";
import { Menus } from "../types";

type Props = {
  title: string;
  items: Menus[];
  showItemLabel?: boolean;
};

const OurClients = ({ title, items, showItemLabel }: Props) => {
  return (
    <section className=" py-[40px]  lg:py-[80px]">
      <h2 className={`${styles.heading2} text-center pb-3 md:pb-4 mb-8`}>
        {title}
      </h2>
      <LogoSlider items={items} showItemLabel={showItemLabel} />
    </section>
  );
};

export default OurClients;
