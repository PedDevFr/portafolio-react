import './Hero.css'
import DarkVeil from './DarkVeil'
import ProfileCard from './ProfileCard'
import avatarImage from '../assets/WhatsApp Image 2026-01-03 at 01.18.57.jpeg'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__darkveil">
        <DarkVeil />
      </div>
      <div className="hero__content">
        <div className="hero__left">
          <p className="hero__greeting">Hola, soy</p>
          <h2 className="hero__name">Pedro Infante Poma</h2>
          <p className="hero__un">UN</p>
          <p className="hero__role">Desarrollador de software</p>
          <div className="hero__social">
            <a 
              href="https://github.com/PedDevFr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hero__icon">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/pedro-infante-poma/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hero__icon">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          <p className="hero__description">
            Transformo ideas en sistemas de software funcionales que resuelven problemas reales.
          </p>
        </div>
        <div className="hero__right">
          <ProfileCard
            showUserInfo
            handle="pedroinfante"
            status="Online"
            contactText="Contactar"
            avatarUrl={avatarImage}
            miniAvatarUrl={avatarImage}
            onContactClick={() => {
              // Aquí puedes agregar la lógica para el contacto
              console.log('Contact clicked');
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
