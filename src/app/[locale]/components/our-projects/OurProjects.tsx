import Image from "next/image";
import img1 from "../../../../../public/img1.jpeg";
import { useTranslations } from "next-intl";
import { MdArrowOutward } from "react-icons/md";

export default function OurProjects() {
  const t = useTranslations("our-projects");
  const projects = [
    {
      id: 1,
      title: t("project1.title"),
      description: t("project1.description"),
      image: "../../../../../public/img1.jpeg",
    },
    {
      id: 2,
      title: t("project2.title"),
      description: t("project2.description"),
      image: "../../../../../public/img1.jpeg",
    },
    {
      id: 3,
      title: t("project3.title"),
      description: t("project3.description"),
      image: "../../../../../public/img1.jpeg",
    },
    {
      id: 4,
      title: t("project4.title"),
      description: t("project4.description"),
      image: "../../../../../public/img1.jpeg",
    },
  ];

  return (
    <div className="p-8 h-fit flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-center mb-8">{t("")}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-center items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative flex justify-center rounded-3xl min-w-[350px] m-2 h-[40vh] md:h-[45vw] md:w-[90vw] md:min-h-[45vh] lg:max-w-[650px] lg:w-[300px] lg:min-w-[550px] lg:min-h-[380px] lg:max-h-[400px] shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105"
          >
            <div className="h-full">
              <Image
                src={img1}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute h-fit w-[95%] bg-white/80 p-4 rounded-3xl bottom-4 flex flex-row justify-between items-center">
                
                <div>
                    <MdArrowOutward />
                </div>
                <div className="">
                    <h3 className="text-start">{project.title}</h3>
                    <p className="text-gray-600 mt-2 text-start">{project.description}</p>
                </div>
                </div>

          </div>
        ))}
      </div>
    </div>
  );
}
