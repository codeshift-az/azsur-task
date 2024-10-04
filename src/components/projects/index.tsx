import Container from '@components/ui/Container.tsx';
import useSWR from 'swr';
import { projectFetcher } from '@api/projects/projectApi.ts';
import { ProjectRes } from '@/types/ProjectsRes.ts';
import ProjectItem from '@components/projects/ProjectItem.tsx';
import SectionHeadline from '@components/ui/SectionHeadline.tsx';

const ProjectSection = () => {
  const { isLoading, data } = useSWR<ProjectRes>('?limit=6', projectFetcher);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="project-area area-padding">
      <Container>
        <SectionHeadline>
          Our-latest projects
        </SectionHeadline>

        <div className="row">
          {data?.results?.map((project) => (
            <ProjectItem
              image={project.images[0].image}
              title={project.title}
              category={project.service.title}
              projectUrl="https://google.com"
              imageUrl={project.images[0].image}
              key={project.slug}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProjectSection;