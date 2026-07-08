import config from "@config/config.json";
import SeoMeta from "@layouts/SeoMeta";
import Pagination from "@layouts/components/Pagination";
import Post from "@layouts/components/Post";
import { getSinglePage } from "@lib/contentParser";
import { sortByDate } from "@lib/utils/sortFunctions";

const { blog_folder } = config.settings;

export const generateStaticParams = async () => {
  const getAllSlug = getSinglePage(`src/content/${blog_folder}`);
  const allSlug = getAllSlug.map((item) => item.slug);
  const { pagination } = config.settings;
  const totalPages = Math.ceil(allSlug.length / pagination);
  const paths = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({ slug: (i + 1).toString() });
  }

  return paths;
};

const BlogPagination = async ({ params }) => {
  const { slug } = await params;
  const currentPage = parseInt(slug || "1");
  const { pagination } = config.settings;
  const posts = getSinglePage(`src/content/${blog_folder}`);
  const totalPages = Math.ceil(posts.length / pagination);

  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const currentPosts = sortByDate(posts.slice(indexOfFirstPost, indexOfLastPost));

  return (
    <>
      <SeoMeta title={`Page ${currentPage}`} pathname={`/page/${slug}`} />
      <div className="section container">
        <div className="row">
          <div className="mx-auto lg:col-10">
            <div className="row">
              {currentPosts.map((post, i) => (
                <Post
                  className="col-12 mb-6 sm:col-6"
                  key={"key-" + i}
                  post={post}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
      </div>
    </>
  );
};

export default BlogPagination;
