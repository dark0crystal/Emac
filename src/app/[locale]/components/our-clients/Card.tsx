import Image from "next/image"
type Card ={
    image:any
    title:string
}

export default function Card({image ,title}:Card){
    return(
        <div 
        className="relative overflow-hidden flex flex-col justify-center items-center w-[150px] h-[150px]">
            <div className="">
                <p>{title}</p>
            </div>

            <div>

            </div>
            <Image  src={image} alt="our clients" fill style={{objectFit:"cover"}} />
        </div>
    )
}