"use client";
import gmailIcon from "../../../../../public/gmail.png"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { MotionDiv } from "../MotionDiv";

export default function ContactUs() {
  const t = useTranslations("contact-us");

  return (
    <div className="h-[50vh] text-center p-8 mt-20">
      {/* Title */}
      <MotionDiv
       className="flex flex-col items-center"
       initial={{ opacity: 0, y: 150 }} // Initial state
            whileInView={{ opacity: 1, y: 0 }} // Animation while in view
            viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
       >
            <h2 className="relative z-20 text-2xl md:text-4xl font-bold text-center my-12">
            {t("title")}
                <span className="absolute -z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-full h-4 md:h-5 bg-blue-400/40"></span>
            </h2>
      </MotionDiv>


      <MotionDiv
       className="flex flex-row gap-8 md:gap-32 justify-center items-center"
       initial={{ opacity: 0, y: 150 }} // Initial state
            whileInView={{ opacity: 1, y: 0 }} // Animation while in view
            viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
       >

      {/* Contact Email */}
      <div className="">
        <a
          href="https://mail.google.com/mail/?view=cm&to=emacsoman@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-blue-600 hover:text-blue-800"
        >
        <div><Image src={gmailIcon} alt="gmail icon" height={70} width={75}/></div>

         
        </a>
      </div>

      {/* Social Network Links */}
      <div className="flex justify-center items-center space-x-4">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/92280983" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-green-600 hover:text-green-800"
        >
          <FaWhatsapp size={50} />
        </a>
      </div>
      </MotionDiv>
    </div>
  );
}
