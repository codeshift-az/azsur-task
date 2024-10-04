import React from 'react';
import Container from '@components/ui/Container.tsx';
import SectionHeadline from '@components/ui/SectionHeadline.tsx';
import BlogItem from '@components/blog/BlogItem.tsx';

import blog1 from "@assets/blog/1.jpg";
import blog2 from "@assets/blog/2.jpg";
import blog4 from "@assets/blog/4.jpg";

const blogs = [
  {
    image: blog1,
    date: { day: '23', month: 'Jan' },
    title: 'Beguiled and demo',
    author: 'UsdTheme',
    comments: 0,
    description: 'Redug Lagre dolor sit amet, consectetur adipisicing elit. Dignissimos, culpa nobis at perspiciatis sit sint, adipisci neque illum. Adipisci dolores, vitae! Voluptatem consequatur.',
    link: '#'
  },
  {
    image: blog2,
    date: { day: '05', month: 'Feb' },
    title: 'Beguiled and demo',
    author: 'UsdTheme',
    comments: 0,
    description: 'Redug Lagre dolor sit amet, consectetur adipisicing elit. Dignissimos, culpa nobis at perspiciatis sit sint, adipisci neque illum. Adipisci dolores, vitae! Voluptatem consequatur.',
    link: '#'
  },
  {
    image: blog4,
    date: { day: '19', month: 'Mar' },
    title: 'Beguiled and demo',
    author: 'UsdTheme',
    comments: 0,
    description: 'Redug Lagre dolor sit amet, consectetur adipisicing elit. Dignissimos, culpa nobis at perspiciatis sit sint, adipisci neque illum. Adipisci dolores, vitae! Voluptatem consequatur.',
    link: '#'
  }
];

const BlogSection: React.FC = () => {
  return (
    <div className="blog-area area-padding">
      <Container>
        <SectionHeadline>
          Our Latest News
        </SectionHeadline>
        <div className="row">
          <div className="blog-carousel">
            {blogs.map((blog, index) => (
              <BlogItem
                key={index}
                image={blog.image}
                date={blog.date}
                title={blog.title}
                author={blog.author}
                comments={blog.comments}
                description={blog.description}
                link={blog.link}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogSection;
