import { useState } from 'react'
import './NavBar.css'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMenuOpen(false)
    
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const navbar = document.querySelector('.navbar')
      const navbarHeight = navbar ? navbar.offsetHeight : 0
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight - 20

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const menuItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' }
  ]

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="navbar__logo-link"
          >
            <span className="navbar__logo-text">&lt; PED &gt;</span>
          </a>
        </div>
        
        <button 
          className={`navbar__toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="navbar__item">
              <a 
                href={item.href} 
                className="navbar__link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
