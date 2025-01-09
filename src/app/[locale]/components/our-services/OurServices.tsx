import Image from "next/image";
import img1 from "../../../../../public/img1.jpeg";
import img2 from "../../../../../public/img2.jpeg";
import img3 from "../../../../../public/img3.jpeg";

export default function OurServices() {
    const services = [
        { title: "Service 1", description: "It's a good service", img: img1 },
        { title: "Service 2", description: "Another great service", img: img2 },
        { title: "Service 3", description: "Our premium service", img: img3 },
    ];

    return (
        <div className="h-fit w-screen bg-yellow-200 flex flex-col items-center p-10">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="relative w-[90vw] lg:w-[80vw] h-[300px] rounded-xl overflow-hidden shadow-lg mb-10"
                >
                    <Image
                        src={service.img}
                        alt={`Service ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                    <div className="relative z-20 h-full flex flex-col justify-end p-5 text-white">
                        <h1 className="text-2xl font-bold mb-2">{service.title}</h1>
                        <p className="text-sm">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
