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
import { useTranslations } from "next-intl"

const CardContent =[
    {title:"almoug" ,image:img6},
    {title:"almoug" ,image:img6},
    {title:"almoug" ,image:img6},
    {title:"almoug" ,image:img6},
    {title:"almoug" ,image:img6},
    
];

export default function OurClients() {
    const t =useTranslations("our-clients")
    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);
  
    useEffect(() => {
      let controls;
      let finalPosition = -width / 3;
  
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: 30,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
  
      return controls.stop;
    }, [xTranslation, width]);
  
    return (
        <div>
            <div className="flex flex-col items-center">
            <h2 className="relative z-20 text-2xl md:text-4xl font-bold text-center my-12">
            {t("title")}
                <span className="absolute -z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-full h-4 md:h-5 bg-blue-400/40"></span>
            </h2>
            </div>
      <div
        dir="ltr"
        className="overflow-hidden relative -z-10 h-[12vh] flex flex-col justify-center m-16"
      >
        {/* Gradient effect from both sides */}
        <div className="absolute z-20 inset-0 bg-gradient-to-r from-[#fff] via-transparent to-[#fff]"></div>
  
        <motion.div
          className="flex gap-16 w-max"
          ref={ref}
          style={{ x: xTranslation }}
        >
          {/* Duplicate the cards */}
          {[...CardContent, ...CardContent, ...CardContent].map(
            (content, index) => (
              <Card key={index} title={content.title} image={content.image} />
            )
          )}
        </motion.div>
      </div>
      </div>
    );
  }
  