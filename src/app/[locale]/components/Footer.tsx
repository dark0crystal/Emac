import { GrFanOption } from "react-icons/gr";
import { TbCarFanFilled } from "react-icons/tb";
import { MdOutlineElectricBolt } from "react-icons/md";
import { LuHousePlug } from "react-icons/lu";
import { MdElectricalServices } from "react-icons/md";
import { useTranslations } from "next-intl";
import Image from "next/image";
import brand from "../../../../public/logo.png"
import { MotionDiv } from "./MotionDiv";



export default function Footer() {
    const t= useTranslations("footer")
    return (
        <div className="h-[70vh] bg-[#F6F4F0] flex flex-col">
            <div className=" flex justify-center items-center">
                <MotionDiv
                className="flex bg-gradient-to-r from-blue-400 via-blue-300 to-blue-300 shadow-lg shadow-slate-400 w-[90vw]  md:w-[70vw] rounded-3xl p-10 flex-col justify-center items-center mt-20"
                initial={{ opacity: 0, y: 150 }} // Initial state
                whileInView={{ opacity: 1, y: 0 }} // Animation while in view
                viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
                >
                    <div className="relative mx-10 md:mx-20 w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
                        <Image 
                            alt="brand"
                            src={brand}
                            layout="fill"
                            objectFit="contain" 
                        />
                    </div>
                    <div>
                        <p className="text-black text-center">{t("CompanyfullName")}</p>
                    </div>
                </MotionDiv>

            </div>
            {/*  */}
            <MotionDiv 
            className=" flex flex-col md:flex-row justify-center mt-12"
            initial={{ opacity: 0, y: 150 }} // Initial state
            whileInView={{ opacity: 1, y: 0 }} // Animation while in view
            viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
            >
                {/* copyrights */}
                <div className=" flex justify-center items-center mx-8">
                    <h1 className="mx-1 text-black/70">
                    <span className="font-bold text-lg text-black/40">. </span>
                        {t("copyright")} 
                    </h1>
                    <h1 className="font-semibold text-[#4335A7]/80 mx-1">
                        {t("companyName")} 
                    </h1>
                 </div>
                 {/* designer */}
                <div className=" flex justify-center items-center ">
                    <h1 className="mx-1 text-black/70">
                        <span className="font-bold text-lg text-black/40">. </span>
                        {t("designedBy")} 
                    </h1>
                    <h1 className="font-semibold text-[#4335A7]/80 mx-1">
                        {t("designerName")}
                    </h1>
                 </div>
                 
                
            </MotionDiv>
            
            <div>
                 <h1>{t("location")}</h1>
            </div>
          
        </div>
    );
}
