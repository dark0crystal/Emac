import { useTranslations } from "next-intl"
export default function About(){
    const t= useTranslations("about")
    return(
        <div className="flex  items-center justify-center  w-screen md:mt-6  h-[70vh] md:px-[8vw] lg:px-[12vw]">
            <div className="w-[95vw] md:w-full ">
                <div className="mt-4 text-center">
                    <h1 className="text-2xl md:text-4xl font-bold ">{t("title")}</h1>
                    <div className="h-[2px] w-full bg-black mt-6"></div>
                </div>
                <div className="my-8 text-center">
                    <p className="text-xl md:text-2xl ">{t("description")}</p>
                </div>
            </div>
        
        </div>
    )
}