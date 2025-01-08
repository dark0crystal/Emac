import { GrFanOption } from "react-icons/gr";
export default function Footer(){
    return(
        <div className="h-[80vh] bg-[#F6F4F0] grid grid-rows-3">
            <div>
                <div className="h-1/3 bg-slate-600">

                </div>
                <div className="h-1/3 bg-emerald-400">
                    
                </div>
                <div className="flex h-1/3 bg-orange-300">
    <GrFanOption className="w-60 h-60 sm:w-9 sm:h-9 lg:w- lg:h-12" />
    <GrFanOption className="w-6 h-6 sm:w-9 sm:h-9 lg:w-12 lg:h-12" />
    <GrFanOption className="w-6 h-6 sm:w-9 sm:h-9 lg:w-12 lg:h-12" />
</div>

            </div>
        </div>
    )
}