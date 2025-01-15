import './ProjectsSection.css';
import { Link } from 'react-router-dom';
import OticaPainel from '../../images/OticaPainel.jpg';

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      imgUrl: OticaPainel,
      title: 'Software para gestão de Óticas',
      description: 'Software integrado responsável pelo Controle de Estoque, Vendas e Finanças.',
      lastUpdated: '3 mins ago',
      link: '/lunari-erp',
      tools: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      ],
    },
  ];

  return (
    <div className="projects-wrapper">
      <div className="projects-cards-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.imgUrl} alt={project.title} />
            </div>
            <div className="project-card-body">
              <h5>{project.title}</h5>
              <p>{project.description}</p>
              <div className="project-card-footer">
                <Link to={project.link}>Saiba Mais</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
