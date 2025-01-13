import { useTranslations } from "next-intl";
import Image from "next/image";
import brand from "../../../../public/logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";

export default function Footer() {
    const t = useTranslations("footer");

    return (
        <footer className="bg-sky-950 text-white py-6">
            <div className="container mx-auto flex flex-col items-center space-y-4">
                {/* Profile and Title */}
                <div className="flex flex-col items-center justify-center space-x-4 bg-blue-100 rounded-3xl h-[20vh] w-[90vw] md:w-[70vw]">
                    <Image
                        src={brand}
                        alt="Profile Picture"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                    <div>
                        <p className="text-sm md:text-lg text-center text-black mt-2">{t("CompanyfullName")}</p>
                    </div>
                </div>
                <div className="">

                </div>

               <div className="bg-slate-600 h-[1px] w-screen"/>
                <div className="text-center">
            <div className="flex flex-col md:flex-row justify-center md:justify-between  w-screen px-8 py-4" >
                <div className="flex flex-row gap-2 justify-center items-center">
                    <h1>{t("copyright")}</h1>
                    <h1>{t("companyName")}</h1>
                </div>

                {/*  */}
               

                <div className="flex flex-row gap-4 justify-center items-center mt-2 md:mt-0">
                   
                    {/* Contact Email */}
                    <div >
                        <a
                        href="https://mail.google.com/mail/?view=cm&to=emacsoman@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-gray-400 hover:text-blue-800"
                        >
                    
                        <BiLogoGmail size={35}/>  
                            </a>
                    </div>

                        {/* Social Network Links */}
                        <div className="flex justify-center items-center space-x-4">
                            {/* WhatsApp Icon */}
                            <a
                            href="https://wa.me/92280983" // Replace with your WhatsApp number
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-green-800"
                            >
                            <FaWhatsapp size={35} />
                            </a>
                        </div>
               </div>


               <div className="flex flex-row gap-2 justify-center items-center mt-4 md:mt-0">
                
                    <h1>{t("designedBy")}</h1>
                    <a className="text-cyan-600" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/_5lo_9/">{t("designerName")}</a>
                </div>
            </div>
        </div>
        </div>
    </footer>
    );
}
