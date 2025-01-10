"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "../../../../../public/img1.jpeg"
import img2 from "../../../../../public/img2.jpeg"
import img3 from "../../../../../public/img3.jpeg"
import img4 from "../../../../../public/img4.jpeg"
import img5 from "../../../../../public/img5.jpeg"

export default function ImagesSlider() {
  const cards = [
    { id: 1 ,img: img1},
    { id: 2, img: img2},
    { id: 3 ,img: img3},
    { id: 4 ,img: img4},
    { id: 5 ,img: img5},
  ];

  return (
    <div className="relative h-full overflow-hidden flex flex-col items-center ">
      {/* <div className="absolute bottom-0 bg-gradient-to-t z-30 from-[#133E87] to-transparent h-[20vh] w-full"></div> */}
      {/* <div className="absolute top-0 bg-gradient-radial from-[#2575ff] to-transparent z-30 h-[30vh] w-full"></div> */}

      
      <motion.div
        className="absolute flex flex-col "
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 30, // Adjust speed by changing duration
          ease: "linear",
        }}
      >
        
        {/* Original Cards */}
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white relative shadow-lg rounded-sm my-2  overflow-hidden min-h-72 min-w-[90vw] lg:min-h-[340px] lg:min-w-[540px] mx-auto"
          >
            <Image
             alt="img"
             src={card.img} 
             layout="fill"
             objectFit="cover"
            />
             {/* <h3 className="text-xl font-semibold">{card.id}</h3>
            <p className="text-gray-600">{card.content}</p>  */}
          </div>
        ))}

        {/* Duplicate Cards for Seamless Scroll
        {cards.map((card) => (
          <div
            key={`${card.id}-duplicate`}
            className="bg-white shadow-lg rounded-lg p-4 h-52 w-64 mx-auto"
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-gray-600">{card.content}</p>
          </div>
        ))} */}
        
      </motion.div>
 
    </div>
  );
}
