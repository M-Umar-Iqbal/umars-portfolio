import React, { FC } from "react";

import { Metadata } from "next";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ArticleCard from "@/components/ArticlesCard";

export const metadata: Metadata = {
  title: "Articles | Umar Iqbal",
  description: "Read my thoughts on software development, design, and more.",
};

const Articles: FC = () => {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <MaxWidthWrapper className="mt-8 mb-64">
      <h1 className="text-3xl font-bold">All Articles 📝</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-8">
        {posts?.map((post, idx) => (
          <ArticleCard key={idx} {...post} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Articles;
