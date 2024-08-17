import React, { FC } from "react";
import Link from "next/link";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

const ArticleCard: FC<Post> = (post) => {
    return (
        <article className="flex flex-col justify-between px-5 py-6 md:px-8 rounded-lg border border-gray-100 dark:border-none shadow-lg dark:bg-gray-900 ">
            <div>
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <time dateTime={post.date} className="mt-2 block text-gray-600">
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
                <div className="line-clamp-3 mt-6 text-lg w-full text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: post.body.html }} />
            </div>
            <Link href={post.url} className={"bg-slate-800 mt-8 w-fit font-semibold text-white hover:bg-slate-700 rounded-full py-2 px-4 duration-300"}>
                Read Article →
            </Link>
        </article>
    );
};

export default ArticleCard;