import { markdownify } from "@lib/utils/textConverter";
import MDXContent from "./partials/MDXContent";

const Default = ({ data }) => {
  const { frontmatter, content } = data;
  const { title } = frontmatter;
  return (
    <section className="!pt-[60px] pb-10">
      <div className="container">
        {markdownify(title, "h1", "h1 mb-20 text-center")}
        <div className="row">
          <div className="mx-auto lg:col-11">
            <div className="content">
              <MDXContent content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Default;
