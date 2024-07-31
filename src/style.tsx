const styles = {
  boxWidth: "lg:max-w-[1900px] w-full",

  heading2:
    "font-poppins font-semibold text-[28px] md:text-[48px] md:leading-[70.8px] leading-[35px] text-blueprimary",

  heading3:
    "font-poppins font-semibold text-[28px] md:text-[38px] md:leading-[50.8px] leading-[45px] text-blueprimary",

  paragraph:
    "font-poppins text-[15px]  md:text-[18px] leading-[30.8px] md:leading-[35.8px]",

  paragraph2:
    "font-poppins text-[13px]  md:text-[2px] leading-[30.8px] md:leading-[35.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  textSize: "text-[14px] sm:text-md lg:text-lg font-poppins text-justify",
};

export const layout = {
  section: `flex sm:flex-row flex-col `,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter}  relative`,

  sectionInfo: `flex-[1] ${styles.flexStart} flex-col`,
};

export default styles;
