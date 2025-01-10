import { Link } from "@/i18n/routing";

export default function ContactUsButton(){
    return(
        <div>
            <div className="bg-violet-400/70 px-8 py-3 rounded-full">
                <Link href="/about" className="text-xl font-normal">احجز موعد</Link>
            </div>
        </div>
    )
}