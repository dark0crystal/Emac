"use client"
import {SubmitHandler, useForm} from "react-hook-form"
import { useTranslations } from "next-intl";
import { MotionDiv } from "../MotionDiv";

type FormFields ={
    email:string;
    emailSubject:string;
    emailText: string;
}
export default function ContactUs(){
    const t = useTranslations("contact-us")
    const {register ,handleSubmit} =useForm<FormFields>();
    const onSubmit:SubmitHandler<FormFields> =(data)=>{
        console.log(data)
    }
   

    return(
        <div className="h-fit">
            <div className="flex flex-col">
                {/* contact with gmail form*/}
                <MotionDiv
                 className="flex items-center justify-center min-h-screen bg-gray-100"
                 initial={{ opacity: 0, y: 150 }} // Initial state
                 whileInView={{ opacity: 1, y: 0 }} // Animation while in view
                 viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
                 transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
                 >
                    <form 
                        onSubmit={handleSubmit(onSubmit)} 
                        className="flex flex-col w-full max-w-lg bg-white shadow-md rounded-lg p-6 space-y-6"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 text-center">Contact Us</h2>

                        <input
                            {...register("email")}
                            type="text"
                            placeholder={t("formPlaceHolders.email")}
                            className="h-12 px-4 border border-sky-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />

                        <input
                            {...register("emailSubject")}
                            type="text"
                            placeholder={t("formPlaceHolders.subject")}
                            className="h-12 px-4 border border-sky-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />

                        <textarea
                            {...register("emailText")}
                            placeholder={t("formPlaceHolders.text")}
                            className="h-28 px-4 py-2 border border-sky-700 rounded-3xl resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full h-12 bg-sky-700 text-white font-semibold rounded-3xl hover:bg-sky-800 transition"
                        >
                            {t("formLabels.submit")}
                        </button>
                    </form>
                </MotionDiv>

                {/* social network links */}
                <MotionDiv
                className=""
                 initial={{ opacity: 0, y: 150 }} // Initial state
                 whileInView={{ opacity: 1, y: 0 }} // Animation while in view
                 viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
                 transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
                >
                    {/* whatsapp icon*/}
                    <div>

                    </div>
                    {/* phone number icon*/}
                    <div>
                        
                    </div>
                </MotionDiv>
            </div>
        </div>
    )
}