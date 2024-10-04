import type { FC } from 'react';

type BlogItemProps = {
  image: string;
  date: {
    day: string;
    month: string;
  };
  title: string;
  author: string;
  comments: number;
  description: string;
  link: string;
}

const BlogItem: FC<BlogItemProps> = ({
                                       image,
                                       date,
                                       title,
                                       author,
                                       comments,
                                       description,
                                       link,
                                     }) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
      <div className="banner-box">
        <a href={link} className="image-blog">
          <img src={image} alt={title} />
          <span className="date-time">
            <span className="days">{date.day}</span>
            <span className="months">{date.month}</span>
          </span>
        </a>
        <div className="single-blog">
          <a href={link}><h4 className="sec-head">{title}</h4></a>
          <p className="author">By {author}<span> ( {comments} comments )</span></p>
          <p>{description}</p>
          <a className="blog-btn" href={link}> Read More</a>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
