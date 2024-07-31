import { avatar, star } from "../assets";
import styles from "../style";

const TopStoriesCard = () => {
  return (
    <div className="relative bg-white w-[320px] lg:w-[350px] rounded-xl py-4 px-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="bg-black h-[60px] w-[60px] rounded-full">
          <img src={avatar} className="object-cover w-full h-full" alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className={`${styles.paragraph} font-bol`}>Kiyotaka Ayanakoji</h3>
          <p className={`${styles.paragraph}`}>Project</p>
        </div>
      </div>
      <div>
        <h2 className={`${styles.paragraph2} font-bold mb-2`}>Case Studies</h2>
        <p className={styles.paragraph}>
          The WISE project has instilled pride in all of us. We are a registered
          group that is recognised legally by the council with the help of SEND
          Sierra Leone. The creation and ownership of bank accounts to help
          manage the money we receive from SEND and earn from our businesses has
          exposed us to banking and this is helping us manage our finances
          better.
        </p>
      </div>
      <img src={star} className="absolute h-6 top-4 -right-2" alt="" />
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[70px] right-[30px]"
      >
        <path
          d="M31.8203 24.7399H41.2003C41.0403 34.0799 39.2003 35.6199 33.4603 39.0199C32.8003 39.4199 32.5803 40.2599 32.9803 40.9399C33.3803 41.5999 34.2203 41.8199 34.9003 41.4199C41.6603 37.4199 44.0203 34.9799 44.0203 23.3399V12.5599C44.0203 9.13988 41.2403 6.37988 37.8403 6.37988H31.8403C28.3203 6.37988 25.6603 9.03988 25.6603 12.5599V18.5599C25.6403 22.0799 28.3003 24.7399 31.8203 24.7399Z"
          fill="#D8DDE4"
        />
        <path
          d="M10.18 24.7399H19.56C19.4 34.0799 17.56 35.6199 11.82 39.0199C11.16 39.4199 10.94 40.2599 11.34 40.9399C11.74 41.5999 12.58 41.8199 13.26 41.4199C20.02 37.4199 22.38 34.9799 22.38 23.3399V12.5599C22.38 9.13988 19.6 6.37988 16.2 6.37988H10.2C6.66 6.37988 4 9.03988 4 12.5599V18.5599C4 22.0799 6.66 24.7399 10.18 24.7399Z"
          fill="#D8DDE4"
        />
      </svg>
    </div>
  );
};

export default TopStoriesCard;
