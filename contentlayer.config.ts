import { defineDocumentType, makeSource } from "contentlayer/source-files"
import remarkGfm from "remark-gfm"

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`, /** pattern to find markdowns files in (src/posts) location  */
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    image: { type: "string", required: true },
    summary: { type: "string", required: true },
    ogImage: { type: "string", required: true },
    author: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/articles/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: "src/posts", /** .md files location */
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
})