import { GrFanOption } from "react-icons/gr";
import {useTranslations} from 'next-intl';

export default function Card3(){
    const t  = useTranslations("cards.card3")
    return(
        <div className=" rounded-lg bg-white/55 border flex flex-col w-full  h-[350px]   md:min-w-[400px]  md:h-[350px]  lg:w-[400px]   lg:h-[350px]">
            <div className="relative flex h-[10vh] ">
                <div className="absolute top-4 right-4 ">
                    <GrFanOption size={60} className="text-sky-700"/>
                </div>
               
            </div>
            <div>
                <h1 className="text-black ">{t("paragraph")}</h1>
            </div>
        </div>
    )
}