// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  /** pattern to find markdowns files in (src/posts) location  */
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    image: { type: "string" },
    summary: { type: "string", required: true }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/articles/${post._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/posts",
  /** .md files location */
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-B2ZICFQZ.mjs.map
