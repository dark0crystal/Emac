import Image from "next/image";
import img1 from "../../../../../public/img1.jpeg"
export default function OurProjects() {
  const projects = [
    {
      id: 1,
      title: "Electrical Solutions",
      description: "Providing innovative electrical services.",
      image: "../../../../../public/img1.jpeg"
    },
    {
      id: 2,
      title: "Mechanical Solutions",
      description: "Delivering top-notch mechanical projects.",
      image: "../../../../../public/img1.jpeg"
    },
    {
      id: 3,
      title: "Air Conditioning",
      description: "Efficient and reliable AC installation.",
      image: "../../../../../public/img1.jpeg"
    }
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-8">Our Projects</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105"
          >
            <div className="relative h-60 w-full">
              <Image
                src={img1}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
