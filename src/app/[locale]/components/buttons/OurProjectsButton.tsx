import { Link } from "@/i18n/routing";

export default function OurProjectsButton(){
    return(
        <div>
            <div className="bg-[#FF7F3E]/80 px-6 py-3 rounded-full">
                <Link href="/our-projects" className="text-lg font-normal">مشاهدة مشاريعنا</Link>
            </div>
        </div>
    )
}