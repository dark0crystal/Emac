import Image from "next/image"
import img1 from "../../../../../public/img1.jpeg"
import img2 from "../../../../../public/img2.jpeg"
import img3 from "../../../../../public/img3.jpeg"

export default function OurServices(){
    const services =[
        {title:"service 1" ,describtion:"its a good service", img:img1},
        {title:"service 1" ,describtion:"", img:img2},
        {title:"service 1" ,describtion:"", img:img3},
        
    ]
    return(
        <div>
            <div>
            {
                services.map((service,index)=>(
                    <div key={index}>
                        <h1>{service.title}</h1>
                        <p>{service.describtion}</p>
                        <Image src={service.img} alt="service img"/>
                    </div>
                ))
            }
            </div>
        </div>
    )
}