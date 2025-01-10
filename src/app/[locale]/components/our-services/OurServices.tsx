import Image from "next/image";
import img1 from "../../../../../public/img1.jpeg";
import img2 from "../../../../../public/img2.jpeg";
import img3 from "../../../../../public/img3.jpeg";
import { useTranslations } from "next-intl";

export default function OurServices() {
    const t = useTranslations("our-services")
    const services = [
        { title: t("our-services-cards.card1.title"), description: t("our-services-cards.card1.description"), img: img1 },
        { title: t("our-services-cards.card2.title"), description: t("our-services-cards.card2.description"), img: img2 },
        { title: t("our-services-cards.card3.title"), description: t("our-services-cards.card3.description"), img: img3 },
    ];

    return (
        <div className="h-fit w-screen  flex flex-col items-center p-10 my-24">
            <div>
                <h1 className="text-2xl md:text-4xl font-bold text-center my-12">{t("title")}</h1>
            </div>
            {services.map((service, index) => (
                <div
                    key={index}
                    className="relative w-[90vw] lg:max-w-[1100px] h-[300px] rounded-xl overflow-hidden shadow-lg mb-10"
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
                </div>
            ))}
        </div>
    );
}
