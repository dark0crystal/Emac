"use client"
import { useState } from "react";
import Image from "next/image";
import img1 from "../../../../../public/img1.jpeg";
import { useTranslations } from "next-intl";
import { MdArrowOutward } from "react-icons/md";

export default function OurProjects() {
  const t = useTranslations("our-projects");
  const [selectedProject, setSelectedProject] = useState(null);

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
    <div className="md:p-8 h-fit flex flex-col justify-center items-center">
      <h2 className="relative z-20 text-2xl md:text-4xl font-bold text-center my-12">
        {t("mainTitle")}
        <span className="absolute -z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-full h-4 md:h-5 bg-blue-400/40"></span>
      </h2>

      {selectedProject ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className=" bg-white rounded-3xl  max-w-xl md:max-w-3xl  lg:max-w-5xl min-h-[500px]  md:min-h-[450px] grid-rows-2  grid md:grid-rows-1   md:grid-cols-2  w-full relative shadow-lg overflow-hidden">
            <button
              className="absolute  bottom-4 z-20  right-4 bg-red-500 text-white rounded-full px-4 py-2"
              onClick={() => setSelectedProject(null)}
            >
              Cancel
            </button>
            <div className="p-6 ">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <p className="mt-4 text-gray-600">{selectedProject.description}</p>
            </div>
            <div className=" relative min-h-[200px] bg-slate-500 md:h-full">
              <Image
                src={img1}
                alt={selectedProject.title}
                layout="fill"
                objectFit="cover"
                className="md:rounded-y-lg"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-center items-center">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="relative flex justify-center rounded-3xl w-[96vw] md:m-2 h-[40vh] md:h-[45vw] md:w-[90vw] md:min-h-[45vh] lg:max-w-[650px] lg:w-[300px] lg:min-w-[540px] lg:min-h-[380px] lg:max-h-[400px] shadow-xl shadow-slate-300 overflow-hidden bg-white transition-transform transform hover:scale-105 cursor-pointer"
            >
              <div className="h-full">
                <Image
                  src={img1}
                  alt={project.title}
                    layout="fill"
                    objectFit="cover"
                />
              </div>
              <div className="absolute h-fit w-[95%] bg-sky-100/90 p-4 md:p-5 rounded-3xl bottom-4 flex flex-row justify-between items-center">
                <div>
                  <h3 className="text-base font-medium md:text-lg md:font-semibold text-black/70">{project.title}</h3>
                  
                </div>
                <div>
                  <MdArrowOutward />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
