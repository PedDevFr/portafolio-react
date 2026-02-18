import './Projects.css'
import sistemaGestionPedidosImg from '../assets/sistema_gestion_pedidos.png'
import apiPlataformaUdemyImg from '../assets/Api_plataforma_udemy.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión de Pedidos (Mini ERP)',
      description: 'API REST profesional para un sistema de gestión de pedidos desarrollada con Laravel 10+ y MySQL.',
      technologies: ['Laravel', 'PHP', 'MySQL'],
      image: sistemaGestionPedidosImg,
      link: null,
      github: 'https://github.com/PedDevFr/apiPedido'
    },
    {
      id: 2,
      title: 'Proyecto API Gestión de Cursos',
      description: 'API REST profesional desarrollada con Laravel, incluyendo autenticación con tokens, gestión de cursos, control de roles y sistema de inscripción de estudiantes.',
      technologies: ['Laravel', 'Sanctum', 'MySQL', 'REST', 'Postman'],
      image: apiPlataformaUdemyImg,
      link: null,
      github: 'https://github.com/PedDevFr/InectApi'
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <h2 className="projects__title">
          Mis <span className="projects__title-highlight">proyectos</span>
        </h2>
        <p className="projects__subtitle">
          Una muestra de trabajos donde he aplicado mis habilidades técnicas y creatividad
        </p>
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="projects__card">
              <div className="projects__image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="projects__image"
                />
                <div className="projects__overlay">
                  <div className="projects__links">
                    {project.link && project.link !== '#' && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="projects__link"
                        aria-label="Ver proyecto"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                    {project.github && project.github !== '#' && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="projects__link"
                        aria-label="Ver código en GitHub"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="projects__content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>
                <div className="projects__technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="projects__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
