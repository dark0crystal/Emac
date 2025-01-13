"use client";

import Image from "next/image";
import { motion, useMotionValue, animate } from "framer-motion";
import img1 from "../../../../../public/img1.jpg";
import img2 from "../../../../../public/img2.jpg";
import img3 from "../../../../../public/img3.jpg";
import img4 from "../../../../../public/img4.jpg";
import img5 from "../../../../../public/img5.jpg";
import useMeasure from "react-use-measure";
import { useEffect } from "react";

export default function ImagesSlider() {
  const cards = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
  ];

  const [ref, { height }] = useMeasure();
  const yTranslation = useMotionValue(0);

  useEffect(() => {
    if (!height) return;

    const finalPosition = -height/2; // Adjust based on duplication for seamless loop

    const controls = animate(yTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
    });

    return controls.stop;
  }, [yTranslation, height]);

  return (
    <div className="relative h-full overflow-hidden flex flex-col items-center">
      <motion.div
        className="h-max gap-4"
        ref={ref}
        style={{ y: yTranslation }}
      >
        {/* Render Images */}
        {[...cards, ...cards].map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="relative shadow-lg rounded-sm my-2 overflow-hidden min-h-[340px] min-w-[90vw] lg:min-w-[540px]"
          >
            <Image
              alt={`Image ${card.id}`}
              src={card.img}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
