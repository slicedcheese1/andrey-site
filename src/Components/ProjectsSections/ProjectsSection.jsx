import './ProjectsSection.css';
import OticaPainel from '../../images/OticaPainel.jpg';

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      imgUrl: OticaPainel,
      title: 'Lunari ERP',
      description: 'Lunari é um Software integrado responsável pelo Controle de Estoque, Vendas e Finanças. ',
      lastUpdated: '3 mins ago',
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
