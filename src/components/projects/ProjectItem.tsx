import List from '@components/ui/List.tsx';
import type { FC } from 'react';

interface ProjectItemProps {
  image: string;
  title: string;
  category: string;
  imageUrl: string;
  projectUrl?: string;
}

const ProjectItem: FC<ProjectItemProps> = ({ image, title, category, imageUrl, projectUrl }) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
      <div className="single-awesome-project">
        <div className="awesome-img">
          <a href="#">
            <img src={image} alt={title} />
          </a>
          <div className="add-actions">
            <div className="project-dec">
              <h5><a href="#">{title}</a></h5>
              <span>{category}</span>
            </div>
            <List className="project-action-btn">
              <li>
                <a className="venobox" data-gall="myGallery" href={imageUrl}>
                  <i className="fa fa-search-plus"></i>
                </a>
              </li>
              {projectUrl && (
                <li>
                  <a href={projectUrl}>
                    <i className="fa fa-link"></i>
                  </a>
                </li>
              )}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
