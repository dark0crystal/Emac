import Image from "next/image"

import brand from "../../../../../public/logo.png"

export default function Brand(){
    return(
        <div className="relative mx-10 md:mx-20 w-[70px] h-[70px]">
            <Image 
                alt="brand"
                src={brand}
                layout="fill"
                objectFit="contain"
            />
        </div>
    )
}