import Link from "next/link";
import { LuEye } from "react-icons/lu";

export const Article = ({ project }) => {
  return (
    <Link href={project.link}>
      <article className="p-4 md:p-8">
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {project.title}
        </h2>

        <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {project.description}
        </p>
        <div className="pt-4 flex md:flex-row flex-wrap">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="leading-5 mb-2 border border-zinc-700 text-gray-300 bg-transparent rounded-md text-xs tracking-wide italic mr-2 p-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
};
