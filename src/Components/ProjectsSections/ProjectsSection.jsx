import './ProjectsSection.css';

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      imgUrl: '/Images/OticaPainel.jpg',
      title: 'Project 1',
      description: 'Breve descrição sobre o projeto 1. Clique para saber mais.',
      lastUpdated: '3 mins ago',
      link: 'https://www.example.com',
    },
    {
      id: 2,
      imgUrl: 'https://via.placeholder.com/350x200?text=Project+2',
      title: 'Project 2',
      description: 'Breve descrição sobre o projeto 2. Clique para saber mais.',
      lastUpdated: '5 mins ago',
      link: 'https://www.example.com',
    },
    {
      id: 3,
      imgUrl: 'https://via.placeholder.com/350x200?text=Project+3',
      title: 'Project 3',
      description: 'Breve descrição sobre o projeto 3. Clique para saber mais.',
      lastUpdated: '10 mins ago',
      link: 'https://www.example.com',
    },
    {
      id: 4,
      imgUrl: 'https://via.placeholder.com/350x200?text=Project+4',
      title: 'Project 4',
      description: 'Breve descrição sobre o projeto 4. Clique para saber mais.',
      lastUpdated: '20 mins ago',
      link: 'https://www.example.com',
    },
  ];

  return (
    <div className="projects-cards-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.imgUrl} alt={project.title} />
          <div className="project-card-body">
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <div className="project-card-footer">
              <small>Last updated {project.lastUpdated}</small>
              <a href={project.link} target="_blank" rel="noreferrer">
                Ver Detalhes
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsSection;
