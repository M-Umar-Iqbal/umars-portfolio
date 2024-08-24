import React, { FC } from "react";
import { Metadata } from "next";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export const metadata: Metadata = {
  title: "Uses | Umar Iqbal",
  description: "Frontend developer, Content creator, and Public speaker",
};

const Uses: FC = () => {
  return (
    <MaxWidthWrapper className="mt-8 mb-64">
      <h1 className="text-3xl font-bold">All Uses 💻</h1>
      <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert mt-8">
        <h3>Computer / Office</h3>
        <ul>
          <li>13.3&quot; Macbook M1 (2020)</li>
          <li>keyboard &quot;Logitech MX Keys S&quot; Black</li>
          <li>Sony CH-720N</li>
        </ul>
        <h3>Coding</h3>
        <ul>
          <li>
            Editor: VSCode (
            <a href="https://github.com/M-Umar-Iqbal/vs-code-settings" target="_blank">
              Settings / Extensions
            </a>
            )
          </li>
          <li>Theme: Bluloco theme (dark)</li>
          <li>Terminal: zsh</li>
        </ul>
        <h3>Software</h3>
        <ul>
          <li>Chrome Browser</li>
          <li>Figma</li>
          <li>Spotify</li>
        </ul>
        <h3>Other Tech</h3>
        <ul>
          <li>Airpods</li>
          <li>Android Phone</li>
        </ul>
      </div>
    </MaxWidthWrapper>
  );
};

export default Uses;
