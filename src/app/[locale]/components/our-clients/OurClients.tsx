import { MotionDiv } from "../MotionDiv"
import img1 from "../../../../../public/img1.jpeg"
import img2 from "../../../../../public/img2.jpeg"
import img3 from "../../../../../public/img3.jpeg"
import img4 from "../../../../../public/img4.jpeg"
import img5 from "../../../../../public/img5.jpeg"
import Card from "./Card"

const CardContent =[
                    {title:"almoug" ,image:img1},
                    {title:"almoug" ,image:img2},
                    {title:"almoug" ,image:img3},
                    {title:"almoug" ,image:img4},
                    {title:"almoug" ,image:img5},

                ];

export default function OurClients(){
    return(
        <div>
            <div className="flex">
                {CardContent.map((content,index)=>(
                    <Card key={index} title={content.title} image={content.image}/>
                ))}
            </div>
        </div>
    )
}