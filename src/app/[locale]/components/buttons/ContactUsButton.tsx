import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
export default function ContactUsButton(){
    const t=useTranslations("HomePage")
    return(
        <div>
            <div className="bg-violet-400/70 px-8 py-3 rounded-full">
                <Link href="/about" className="text-xl font-normal">{t("contactUs")}</Link>
            </div>
        </div>
    )
}