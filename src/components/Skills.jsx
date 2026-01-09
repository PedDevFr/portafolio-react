import './Skills.css'

const Skills = () => {
  const tools = [
    {
      name: 'HTML',
      description: 'LENGUAJE DE MARCADO',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS',
      description: 'HOJAS DE ESTILO',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'JavaScript',
      description: 'LENGUAJE DE PROGRAMACIÓN',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Node.js',
      description: 'ENTORNO DE EJECUCIÓN',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
    },
    {
      name: 'React',
      description: 'BIBLIOTECA DE INTERFAZ',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Laravel',
      description: 'FRAMEWORK PHP',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg'
    },
    {
      name: 'PHP',
      description: 'LENGUAJE DE PROGRAMACIÓN',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    },
    {
      name: 'MySQL',
      description: 'BASE DE DATOS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
      name: 'GitHub',
      description: 'CONTROL DE VERSIONES',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      name: 'Postman',
      description: 'API TESTING',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg'
    },
    {
      name: 'Figma',
      description: 'DISEÑO UI/UX',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <h2 className="skills__title">
          Pila de <span className="skills__title-highlight">herramientas</span>
        </h2>
        <div className="skills__grid">
          {tools.map((tool, index) => (
            <div key={index} className="skills__card">
              <div className="skills__icon">
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className={`skills__icon-img ${tool.name === 'GitHub' ? 'skills__icon-github' : ''}`}
                />
              </div>
              <h3 className="skills__name">{tool.name}</h3>
              <p className="skills__description">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
