import { useState } from "react";
import { CustomTextInput } from ".";
import styles, { layout } from "../style";
import Button from "./Button";
import {
  facebook,
  twitter,
  instagram,
  phoneblack,
  locationblack,
} from "../assets";
import { contact } from "../constants";
import axios from "axios";

type Props = {
  isContact?: boolean;
};

const Contact = ({ isContact }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const body: any = {
        name,
        email,
        message: content,
        phoneNumber,
        subject: isContact ? "Contact Us" : "Become a member",
        receiver: "info@kakebofinancialservices.com",
      };

      let response: any = await axios.post(
        `https://multipurpose-api.onrender.com/mails/contactus`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Mail sent");
      console.log(response, "the reposne");
      setContent("");
      setEmail("");
      setName("");
      setPhoneNumber("");
      setLoading(false);
    } catch (error) {
      // console.log(error, "maill error");
      alert("error sending your message");
      setLoading(false);
      throw error;
    }
  };

  const textStyle =
    "font-poppins font-semibold  text-[15px] opacity-80 leading-[27px] ";
  const rowStyle = "flex  gap-2 items-center mb-2";
  const divider = "flex bg-redprimary w-16 h-[2px] ";
  const header =
    "font-poppins font-semibold  text-[20px]  md:text-[24px]  leading-[27px] my-2";
  return (
    <section id="product">
      {/* hero */}
      <div className={`flex lg:flex-row flex-col `}>
        <div className={`flex flex-1 flex-col w-full lg:pr-20 gap-5 `}>
          {/* missinon */}
          <div className="flex bg-redprimary w-14 h-[2px]  " />

          <p className={`font-poppins font-semibold text-[22px]`}>
            {isContact ? "Contact" : "Become a member"}
          </p>

          {/* vision */}

          <h1 className={`${styles.heading3}`}>
            Tell us how we can be of service to you.
          </h1>

          <p className={`font-poppins  text-[22px]`}>
            We provide the best experience with the favour of quality services
            to help you grow your business.
          </p>
        </div>

        {/* form */}
        <div className={`${layout.sectionInfo} mt-10 lg:mt-0`}>
          <div className="flex bg-redprimary w-14 h-[2px]  " />

          {/* form section */}

          <form
            onSubmit={onSubmit}
            className=" flex flex-col w-full gap-6  lg:max-w-[550px] my-4  rounded-lg py-6  items-center "
          >
            <CustomTextInput
              placeholder="Full Name"
              inputType="text"
              value={name}
              handleChange={setName}
            />

            <div className="flex sm:flex-row flex-col w-full  gap-5 md:gap-2">
              <CustomTextInput
                placeholder="Your Email"
                inputType="text"
                value={email}
                handleChange={setEmail}
              />
              <CustomTextInput
                placeholder="Your Mobile"
                inputType="text"
                value={phoneNumber}
                handleChange={setPhoneNumber}
                required={false}
              />
            </div>

            <CustomTextInput
              placeholder="Message"
              inputType="text"
              isTextArea={true}
              value={content}
              row={2}
              handleChange={setContent}
            />
            <Button
              type="submit"
              styles={"text-primary w-full p-2 bg-redprimary rounded-[10px]"}
              disabled={loading ? true : false}
              text={loading ? "Please wait" : "SUBMIT"}
            />
          </form>
        </div>
      </div>
      {/* constact info */}
      {/*  */}
      {isContact && (
        <div
          className={`flex md:flex-row flex-col my-10 w-full justify-between`}
        >
          {/* first portion */}
          <div
            className={` flex flex-col md:w-auto w-full md:max-w-[350px] md:mr-4 mb-4 md:mb-0 gap-2`}
          >
            <div className={divider} />
            <h4 className={header}>Call Us</h4>
            {/* emaail */}

            <div className={rowStyle}>
              <img src={phoneblack} alt="menu" className="h-4 flex " />
              <a href={`tel:+${contact.phone}`}>
                <h4 className={textStyle}>{contact.phone}</h4>
              </a>
            </div>
          </div>
          {/* second portion */}

          {/* third portion */}
          <div
            className={` flex flex-col md:w-auto w-full md:max-w-[350px] md:mr-4 mb-4 md:mb-0 gap-2`}
          >
            <div className={divider} />
            <h4 className={header}>Visit Us</h4>
            <div className={rowStyle}>
              <img src={locationblack} alt="menu" className="h-4 flex " />

              <h4 className={textStyle}>{contact.address}</h4>
            </div>
          </div>
          {/* fourth portion */}
          <div
            className={` flex flex-col  md:w-auto w-full  md:mr-4 mb-4 md:mb-0 gap-2`}
          >
            <div className={divider} />
            <h4 className={header}>Working Hours</h4>
            <p className={textStyle}>Mondays - Fridays (8:00am - 4:00pm)</p>
          </div>
          <div
            className={` flex flex-col  md:w-auto w-full  md:mr-4 mb-4 md:mb-0 gap-2`}
          >
            <div className={divider} />
            <h4 className={header}>Follow Us</h4>

            {/* social media */}
            <div className={`flex gap-2  `}>
              <img src={facebook} alt="fb" className=" object-contain" />
              <img src={twitter} alt="fb" className=" object-contain" />
              <img src={instagram} alt="fb" className=" object-contain" />
            </div>
          </div>
        </div>
      )}

      {/* map */}
    </section>
  );
};

export default Contact;
