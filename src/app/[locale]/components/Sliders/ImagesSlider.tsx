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
    { id: 1, title: "Card 1", content: "This is card 1." ,img: img1},
    { id: 2, title: "Card 2", content: "This is card 2.", img: img2},
    { id: 3, title: "Card 3", content: "This is card 3." ,img: img3},
    { id: 4, title: "Card 4", content: "This is card 4." ,img: img4},
    { id: 5, title: "Card 5", content: "This is card 5." ,img: img5},
  ];

  return (
    <div className="relative h-full overflow-hidden flex flex-col items-center">

      <motion.div
        className="absolute flex flex-col"
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
