import { useState } from "react";
import { CustomTextInput } from ".";
import { about, logo } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const Quote = () => {
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [name, setName] = useState<string>("");

  const onSubmit = async (e: any) => {
    e.preventDefault();

    // const body: MessageModel = {
    //   name,
    //   email,
    //   content,
    //   createdAt: new Date().getTime(),
    // };

    // let response: any = await dispatch(addMessage(body));
    // if (!response.payload) {
    //   alert.show("Unable to send your message please try again later", {
    //     type: "error",
    //   });
    //   return;
    // }

    // alert.show("Message sent", {
    //   type: "success",
    // });
    setContent("");
    setEmail("");
    setName("");
  };
  return (
    <section id="product" className={`${layout.section} `}>
      <div className={`${layout.sectionImg}`}>
        <img src={logo} alt="Conference" className="w-full h-auto" />
      </div>

      <div className={`${layout.sectionInfo} mt-10 sm:mt-0`}>
        <div className="flex bg-redprimary w-14 h-[2px]  " />
        <h1 className={` ${styles.heading2} `}>Free Quote</h1>
        <p
          className={`font-poppins md:p-0 sm:max-w-[300px] lg:max-w-[400px]  font-semibold mt-5 md:mt-0 lg:mt-5 leading-6`}
        >
          Get in touch with our experts to access a range of our mining
          services. Simply fill in the form to get a free quote.
        </p>

        {/* form section */}

        <form
          onSubmit={onSubmit}
          className=" flex flex-col w-full gap-6  max-w-[650px] my-4  rounded-lg py-6  items-center "
        >
          <CustomTextInput
            placeholder="Full Name"
            inputType="text"
            value={name}
            handleChange={setName}
          />

          <div className="flex w-full gap-2">
            <CustomTextInput
              placeholder="Your Email"
              inputType="text"
              value={email}
              handleChange={setEmail}
            />
            <CustomTextInput
              placeholder="Your Mobile"
              inputType="text"
              value={email}
              handleChange={setEmail}
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
            text="Get A Free Quote"
          />
        </form>
      </div>
    </section>
  );
};

export default Quote;
