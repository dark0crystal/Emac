import { GrAchievement } from "react-icons/gr";
import {useTranslations} from 'next-intl';
import { GrCurrency } from "react-icons/gr";

export default function Card2(){
    const t =useTranslations("cards.card1")
    return(
        <div className=" rounded-lg bg-white/55 border flex flex-col w-full  h-[350px]   md:min-w-[400px]  md:h-[350px]  lg:w-[400px]   lg:h-[350px]">
            <div className="relative flex h-[10vh] ">
                <div className="absolute top-4 right-4 ">
                <div className="bg-slate-200/55 p-4 rounded-full">
                    <GrCurrency size={55} className="text-green-700"/>
                    </div>
                </div>
                
               
            </div>
            <div>
                <h1>{t("")}</h1>
            </div>
            <div>
                <h1 className="text-black ">{t("paragraph")}</h1>
            </div>
        </div>
    )
}