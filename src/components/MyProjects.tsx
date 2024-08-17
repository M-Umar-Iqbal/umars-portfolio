"use client";
import React, { useState, FC } from "react";
import { projects } from "@/utils/constants/project";
import ProjectFilter from "./ProjectFilter";
import ProjectDetailsCard from "./ProjectCard";

const matchTags = (current: string[], target: string[]) => {
  return target.every((tag) => current.includes(tag));
};

const MyProjects: FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  let filteredProjects = projects?.filter((proj) =>
    matchTags(proj.projectTags, tags)
  );

  let filteredTags = filteredProjects?.map((prj) => prj.projectTags).flat(1);

  return (
    <div>
      <ProjectFilter
        disabledTags={filteredTags}
        tags={tags}
        onSetTags={setTags}
      />
      <div className="grid gap-6 md:grid-cols-2 mt-8">
        {filteredProjects?.map((project) => (
          <ProjectDetailsCard
            name={project.name}
            description={project.description}
            demo={project.demo}
            github={project.github}
            img={project.img}
            projectTags={project.projectTags}
            key={project.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
