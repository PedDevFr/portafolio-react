import './About.css'
import aboutImage from '../assets/WhatsApp Image 2026-01-08 at 17.20.47.jpeg'
import cvPdf from '../assets/CV_Pedro_Infante.pdf'

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = cvPdf
    link.download = 'CV_Pedro_Infante.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__card">
          <div className="about__content">
            <div className="about__image-wrapper">
              <img 
                src={aboutImage} 
                alt="Acerca de mí" 
                className="about__image"
              />
            </div>
            <div className="about__text-wrapper">
              <h2 className="about__title">Acerca de <span className="about__title-highlight">mí</span></h2>
              <p className="about__tagline">Una mezcla de lógica de código y estética de diseño.</p>
              <p className="about__text">
                Desarrollador Web con más de 2 años de experiencia creando aplicaciones web responsivas y aplicaciones móviles, transformando diseños de Figma en interfaces funcionales. He participado activamente en proyectos donde implemento interfaces frontend, integro servicios REST y desarrollo lógica backend, incluyendo el modelamiento de bases de datos.
                <br />
                <br /> Mi experiencia también abarca soporte TI y administración de contenidos web en WordPress. Soy egresado de la carrera de Desarrollo de Software en SENATI, donde adquirí las bases técnicas que aplico en cada proyecto.
                <br />
                <br /> Me enfoco en crear soluciones prácticas y bien organizadas, priorizando la claridad del código, la correcta integración de servicios y una excelente experiencia de usuario.
              </p>
              <button className="about__download-btn" onClick={handleDownloadCV}>
                Descargar CV
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="about__download-icon">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
