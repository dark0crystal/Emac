import { useTranslations } from "next-intl"
export default function About(){
    const t= useTranslations("about")
    return(
        <div className="flex  items-center justify-center  w-screen md:mt-6  h-[70vh] md:px-[8vw] lg:px-[12vw]">
            <div className="w-[95vw] md:w-full ">
                <div className="mt-4 text-center flex flex-col items-center">
                    <div className="w-fit">
                        <h2 className="relative z-20 text-2xl md:text-4xl font-bold text-center my-12">
                            {t("title")}
                            <span className="absolute -z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-full h-4 md:h-5 bg-blue-400/40"></span>
                        </h2>
                    </div>
                    <div className="h-[2px] w-full bg-black/70 mt-6"></div>
                </div>
                <div className="my-8 text-center">
                    <p className="text-xl md:text-2xl ">{t("description")}</p>
                </div>
            </div>
        
        </div>
    )
}