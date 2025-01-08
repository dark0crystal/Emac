import { GrFanOption } from "react-icons/gr";
import { TbCarFanFilled } from "react-icons/tb";
import { MdOutlineElectricBolt } from "react-icons/md";
import { LuHousePlug } from "react-icons/lu";
import { MdElectricalServices } from "react-icons/md";
import { useTranslations } from "next-intl";
import Image from "next/image";
import brand from "../../../../public/logo.png"



export default function Footer() {
    const t= useTranslations("footer")
    return (
        <div className="h-[60vh] bg-[#F6F4F0] grid grid-rows-3">
            <div className=" flex justify-center items-center">
                <div className="flex bg-gradient-to-r from-blue-400 via-blue-300 to-blue-300 shadow-lg shadow-slate-400 w-[70vw] rounded-3xl p-10 flex-col justify-center items-center">
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
                </div>

            </div>
            {/*  */}
            <div className=" flex flex-col md:flex-row justify-center">
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
                 
                 
            </div>
            <div className=" flex justify-around items-center ">
                <MdOutlineElectricBolt className="w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36 text-black" />
                <LuHousePlug className="w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36 mx-4 text-black" />
                <MdElectricalServices className="w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36 text-black" />
                <TbCarFanFilled className="w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36 text-black" />
            </div>
        </div>
    );
}
