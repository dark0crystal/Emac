import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
export default function ContactUsButton(){
    const t=useTranslations("HomePage")
    return(
        <div>
            <div className="bg-blue-700/90 px-8 py-3 rounded-full">
                <Link href="#contact-us" className="text-xl text-white font-normal">{t("contactUs")}</Link>
            </div>
        </div>
    )
}