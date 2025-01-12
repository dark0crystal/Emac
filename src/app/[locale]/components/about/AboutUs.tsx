import { useTranslations } from "next-intl"
import { MotionDiv } from "../MotionDiv"
export default function About(){
    const t= useTranslations("about")
    return(
        <div className="flex  items-center justify-center  w-screen md:mt-6  h-[70vh] md:px-[8vw] lg:px-[12vw]">
            <div className="w-[95vw] md:w-full ">
                <MotionDiv 
                className="mt-4 text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 150 }} // Initial state
                whileInView={{ opacity: 1, y: 0 }} // Animation while in view
                viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
                >
                    <div className="w-fit">
                        <h2 className="relative z-20 text-2xl md:text-4xl font-bold text-center my-12">
                            {t("title")}
                            <span className="absolute -z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-full h-4 md:h-5 bg-blue-400/40"></span>
                        </h2>
                    </div>
                    <div className="h-[2px] w-full bg-black/70 mt-6"/>
                </MotionDiv>
                <MotionDiv
                className="my-8 text-center"
                initial={{ opacity: 0, y: 150 }} // Initial state
                whileInView={{ opacity: 1, y: 0 }} // Animation while in view
                viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
                >
                    <p className="text-xl md:text-2xl ">{t("description")}</p>
                </MotionDiv>
            </div>
        
        </div>
    )
}