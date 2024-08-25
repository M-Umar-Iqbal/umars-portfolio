import React, { FC } from "react";
import { Metadata } from "next";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MyProjects from "@/components/MyProjects";

export const metadata: Metadata = {
  title: "Projects | Umar Iqbal",
  description: "Projects created by Umar Iqbal",
};

const Projects: FC = () => {
  return (
    <MaxWidthWrapper className="mt-8 mb-64">
      <h1 className="text-3xl font-bold">All Projects 📂</h1>
      <MyProjects />
    </MaxWidthWrapper>
  );
};

export default Projects;
