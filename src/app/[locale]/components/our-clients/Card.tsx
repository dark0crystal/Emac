import Image from "next/image"
type Card ={
    image:any
    title:string
}

export default function Card({image ,title}:Card){
    return(
        <div 
        className="relative flex flex-col justify-center items-center min-w-[120px] min-h-[80px] rounded-xl">
            {/* <div className="">
                <p>{title}</p>
            </div> */}

            <div>

            </div>
            <Image  src={image} alt="our clients" fill style={{objectFit:"fill"}} />
        </div>
    )
}