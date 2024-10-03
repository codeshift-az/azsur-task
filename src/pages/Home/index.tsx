import { useTranslation } from "react-i18next";

// Helmet
import { Helmet } from "react-helmet-async";

// Components
import Layout from "@/components/Layout";

const Home = () => {
  const { t } = useTranslation("pages", { keyPrefix: "home" });

  const pageTitle = import.meta.env.VITE_PROJECT_NAME;

  return (
    <Layout>
      <Helmet>
        <title>{pageTitle}</title>

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={t("description")} />
        <meta name="description" content={t("description")} />
      </Helmet>

    </Layout>
  );
};

export default Home;
