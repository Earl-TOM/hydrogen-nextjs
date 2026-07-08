import SeoMeta from "@layouts/SeoMeta";
import NotFound from "@layouts/404";
import { getRegularPage } from "@lib/contentParser";

const NotFoundPage = async () => {
  const data = await getRegularPage("404");

  return (
    <>
      <SeoMeta title="Page Not Found" pathname="/404" />
      <NotFound data={data} />
    </>
  );
};

export default NotFoundPage;
