import config from "@config/config.json";
import SeoMeta from "@layouts/SeoMeta";
import PostSingle from "@layouts/PostSingle";
import { getSinglePage } from "@lib/contentParser";

const { blog_folder } = config.settings;

export const generateStaticParams = async () => {
  const allSlug = getSinglePage(`src/content/${blog_folder}`);
  return allSlug.map((item) => ({ single: item.slug }));
};

const Article = async ({ params }) => {
  const { single } = await params;
  const posts = getSinglePage(`src/content/${blog_folder}`);
  const post = posts?.filter((p) => p.slug == single);

  return (
    <>
      <SeoMeta
        title={post[0].frontmatter.title}
        description={post[0].frontmatter.description}
        pathname={`/posts/${single}`}
      />
      <PostSingle slug={single} post={post} posts={posts} />
    </>
  );
};

export default Article;
