import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const components = {
  ...shortcodes,
};

const MDXContent = ({ content }) => {
  return (
    <MDXRemote
      source={content}
      components={components}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
    />
  );
};

export default MDXContent;
