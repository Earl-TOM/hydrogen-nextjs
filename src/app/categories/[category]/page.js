import config from "@config/config.json";
import SeoMeta from "@layouts/SeoMeta";
import Post from "@layouts/components/Post";
import { getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import { sortByDate } from "@lib/utils/sortFunctions";
import { slugify } from "@lib/utils/textConverter";

const { blog_folder } = config.settings;

export const generateStaticParams = async () => {
  const allCategory = getTaxonomy(`src/content/${blog_folder}`, "categories");
  return allCategory.map((category) => ({ category }));
};

const Category = async ({ params }) => {
  const { category } = await params;
  const posts = getSinglePage(`src/content/${blog_folder}`);
  const filteredPosts = posts.filter((post) =>
    post.frontmatter.categories.find((c) =>
      slugify(c).includes(category)
    )
  );

  return (
    <>
      <SeoMeta title={category} pathname={`/categories/${category}`} />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <h1 className="text-center capitalize">{category}</h1>
              <div className="row pt-12">
                {filteredPosts.map((post, i) => (
                  <Post
                    className="mb-6 sm:col-6"
                    key={"key-" + i}
                    post={post}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
