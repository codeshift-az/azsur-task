import { useTranslation } from 'react-i18next';

// Helmet
import { Helmet } from 'react-helmet-async';

// Components
import Layout from '@/components/Layout';
import HeroSlider from '../../components/heroslider';
import SubSection from '@components/subscribe';
import ServiceSection from '@components/service';
import ProjectSection from '@components/projects';
import AboutUsSection from '@components/about';
import TestimonialsSection from '@components/testimonials';
import BlogSection from '@components/blog';
import BrandSection from '@components/brands';

const Home = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'home' });

  const pageTitle = import.meta.env.VITE_PROJECT_NAME;

  return (
    <Layout>
      <Helmet>
        <title>{pageTitle}</title>

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={t('description')} />
        <meta name="description" content={t('description')} />
      </Helmet>
      <HeroSlider />
      <SubSection />
      <ServiceSection />
      <ProjectSection />
      <AboutUsSection />
      <TestimonialsSection />
      <BlogSection />
      <BrandSection />
      <SubSection />
    </Layout>
  );
};

export default Home;
