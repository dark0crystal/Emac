"use client"
import { MotionDiv } from "../MotionDiv"
import img1 from "../../../../../public/img1.jpeg"
import img2 from "../../../../../public/img2.jpeg"
import img3 from "../../../../../public/img3.jpeg"
import img4 from "../../../../../public/img4.jpeg"
import img5 from "../../../../../public/img5.jpeg"
import img6 from "../../../../../public/imag17.png"
import Card from "./Card"
import { useRef ,useEffect } from "react"
import { animate, useMotionValue,motion } from "framer-motion"
import useMeasure from "react-use-measure"

const CardContent =[
                    {title:"almoug" ,image:img6},
                    {title:"almoug" ,image:img6},
                    {title:"almoug" ,image:img6},
                    {title:"almoug" ,image:img6},
                    {title:"almoug" ,image:img6},
                    
                ];

export default function OurClients(){

    let [ref ,{width}] = useMeasure();
    const xTranslation =useMotionValue(0);

    useEffect(()=>{
        let controls;
        let finalPosition = - width/3;

        controls = animate(xTranslation , [0,finalPosition],{
            ease:"linear",
            duration:10,
            repeat:Infinity,
            repeatType:"loop",
            repeatDelay:0,
            
        });
        return controls.stop;
    },[xTranslation,width])
    return(
        <div dir="ltr" className="overflow-hidden">
            <motion.div className="flex gap-16 w-max" ref={ref} style={{x:xTranslation}}>
                {/* dublicate the cards  */}
                {[...CardContent , ...CardContent ,...CardContent].map((content,index)=>(
                    <Card key={index} title={content.title} image={content.image}/>
                ))}
            </motion.div>
        </div>
    )
}