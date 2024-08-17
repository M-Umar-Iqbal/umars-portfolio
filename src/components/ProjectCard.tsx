import { FC } from "react";
import BlurImage from "./BlurImage";
import Link from "next/link";

interface IProjectProps {
  name: string;
  description: string;
  demo: string;
  github: string;
  img: string;
  projectTags: string[];
}

export default function ProjectDetailsCard({
  name,
  description,
  demo,
  github,
  img,
  projectTags,
}: IProjectProps) {
  return (
    <article className="dark:bg-gray-900 border border-gray-100 dark:border-none shadow-lg rounded-lg overflow-hidden">
      <div>
        <BlurImage
          src={img}
          height={1080}
          width={2280}
          className="w-full h-full"
          alt={name}
        />
      </div>
      <div className="px-5 py-6">
        <h1 className="text-xl font-bold sm:text-2xl">{name}</h1>
        <div className="h-[100px]">
        <p className="line-clamp-3 w-full pt-3 text-gray-600 dark:text-gray-400 ">
          {description}
        </p>
        </div>
        <ul className="flex gap-3 mt-2">
          {projectTags?.map((tag) => (
            <li className="text-blue-500" key={tag}>
              #{tag}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 mt-6">
          <Link
            href={demo}
            target="_blank"
            className="bg-slate-800 w-fit font-semibold text-white hover:bg-slate-700 rounded-full py-2 px-4 duration-300"
          >
            Demo
          </Link>
          <Link
            href={github}
            target="_blank"
            className="bg-slate-800 w-fit font-semibold text-white hover:bg-slate-700 rounded-full py-2 px-4 duration-300"
          >
            GitHub
          </Link>
        </div>
      </div>
    </article>
  );
};