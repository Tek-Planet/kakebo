import { motion } from "framer-motion";
import { hoverVariant } from "../variants";

interface Props {
  item: any;
  onClick: (val: any) => void;
}

function EquipmentCard({ item, onClick }: Props) {
  const { description, title } = item;

  return (
    <motion.div
      variants={hoverVariant}
      whileHover={"hover"}
      className="flex flex-col  p-5 md:w-[47%] lg:w-[30%] w-full justify-between items-center  rounded-[20px]  bg-white  lg:h-[300px]  m-2  shadow-lg "
    >
      {/* <img src={item.mainImage} alt="menu" className="h-56 w-full" /> */}
      <p className="font-poppins font-bold text-[12px] md:text-[18px] text-center">
        {title}
      </p>
      <p className="font-poppins font-normal text-[12px] md:text-[16px]  text-center ">
        {description.substring(0, 100) + "..."}
      </p>

      <div className={`flex justify-between  text-linkactive  p-2 `}>
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          onClick={() => {
            onClick(item);
          }}
        >
          <span className="capitalize text-sm  md:text-[16px] cursor-pointer">
            Read More
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default EquipmentCard;
