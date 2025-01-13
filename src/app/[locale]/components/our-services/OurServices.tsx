import Image from "next/image";
import img1 from "../../../../../public/img1.jpg";
import img2 from "../../../../../public/img2.jpg";
import img3 from "../../../../../public/img3.jpg";
import img4 from "../../../../../public/img4.jpg";
import img5 from "../../../../../public/img5.jpg";
import { useTranslations } from "next-intl";
import { MotionDiv } from "../MotionDiv";

export default function OurServices() {
    const t = useTranslations("our-services")
    const services = [
        { title: t("our-services-cards.card1.title"), description: t("our-services-cards.card1.description"), img: img5 },
        { title: t("our-services-cards.card2.title"), description: t("our-services-cards.card2.description"), img: img4 },
        { title: t("our-services-cards.card3.title"), description: t("our-services-cards.card3.description"), img: img1 },
    ];

    return (
        <div className="h-fit w-screen  flex flex-col items-center p-10 my-24">
            <div>
            <h2 className="relative z-20 text-2xl md:text-4xl font-bold text-center my-12">
                {t("title")}
                <span className="absolute -z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-full h-4 md:h-5 bg-blue-400/40"></span>
            </h2>
            </div>
            {services.map((service, index) => (
                <MotionDiv
                    key={index}
                    className="relative w-[90vw] lg:max-w-[1100px] h-[300px] rounded-xl overflow-hidden shadow-lg mb-10"
                    initial={{ opacity: 0, y: 150 }} // Initial state
                    whileInView={{ opacity: 1, y: 0 }} // Animation while in view
                    viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
                    transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
                >
                    <Image
                        src={service.img}
                        alt={`Service ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-800/80 to-transparent z-10"></div>
                    <div className="relative z-20 h-full flex flex-col justify-end p-5 text-white">
                        <h1 className="text-2xl font-bold mb-2">{service.title}</h1>
                        <p className="text-sm">{service.description}</p>
                    </div>
                </MotionDiv>
            ))}
        </div>
    );
}
