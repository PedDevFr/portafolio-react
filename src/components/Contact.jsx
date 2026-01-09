import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const EMAILJS_PUBLIC_KEY = '3GBIupBbgiWpSlV8P'
const EMAILJS_SERVICE_ID = 'service_5qsbvt2'
const EMAILJS_TEMPLATE_ID_NOTIFICATION = 'template_a3dfxmh'
const EMAILJS_TEMPLATE_ID_CONFIRMATION = 'template_ceudljj'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [modal, setModal] = useState({ show: false, type: '', title: '', message: '' })

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const showModal = (type, title, message) => {
    setModal({ show: true, type, title, message })
    document.body.style.overflow = 'hidden'
  }

  const hideModal = () => {
    setModal({ show: false, type: '', title: '', message: '' })
    document.body.style.overflow = ''
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && modal.show) {
        hideModal()
      }
    }
    if (modal.show) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => document.removeEventListener('keydown', handleEscape)
  }, [modal.show])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validar campos
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showModal('error', 'Campos incompletos', 'Por favor, completa todos los campos del formulario.')
      return
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      showModal('error', 'Email inválido', 'Por favor, ingresa un correo electrónico válido (ejemplo: nombre@dominio.com)')
      return
    }

    setIsLoading(true)

    try {
      // Enviar correo de confirmación al usuario
      const confirmationData = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: formData.email
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_CONFIRMATION,
        confirmationData
      )

      // Enviar correo de notificación a ti
      const notificationData = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'peinfantepoma@outlook.com'
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_NOTIFICATION,
        notificationData
      )

      setIsLoading(false)
      showModal('success', '¡Mensaje enviado!', 'Tu mensaje ha sido enviado correctamente. Te responderé pronto.')
      setFormData({ name: '', email: '', message: '' })

    } catch (error) {
      setIsLoading(false)
      console.error('Error EmailJS:', error)
      showModal('error', 'Error al enviar', 'Hubo un problema al enviar el mensaje. Por favor, verifica tu conexión e inténtalo de nuevo.')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">
          Vamos a <span className="contact__title-highlight">conectarnos</span>
        </h2>
        <p className="contact__subtitle">
          Siempre estoy abierto a nuevos proyectos o simplemente a charlar. Envíame tu mensaje.
        </p>

        <div className="contact__card">
          <div className="contact__left">
            <div className="contact__status">
              <span className="contact__status-indicator"></span>
              <span className="contact__status-text">ESTADO DEL SISTEMA: EN LÍNEA</span>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div className="contact__info-content">
                <p className="contact__info-label">ENVÍAME UN CORREO ELECTRÓNICO</p>
                <p className="contact__info-value">peinfantepoma@outlook.com</p>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon contact__info-icon--whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                </svg>
              </div>
              <div className="contact__info-content">
                <p className="contact__info-label">CHAT DE WHATSAPP</p>
                <p className="contact__info-value">+51 942 221 250</p>
              </div>
            </div>

            {/* <div className="contact__uplink">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              <span>ESTABLECIENDO ENLACE ASCENDENTE...</span>
            </div> */}
          </div>

          <div className="contact__right">
            <div className="contact__form-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact__form-icon">
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
              <h3 className="contact__form-title">ENVÍAME UN CORREO ELECTRÓNICO</h3>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__input-group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact__input-icon">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact__input"
                />
              </div>

              <div className="contact__input-group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact__input-icon">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact__input"
                />
              </div>

              <div className="contact__textarea-group">
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__textarea"
                  rows="6"
                />
              </div>

              <button 
                type="submit" 
                className="contact__submit-btn"
                disabled={isLoading}
                style={{ opacity: isLoading ? 0.6 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
              >
                {isLoading ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
                {!isLoading && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact__submit-icon">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal de carga */}
      {isLoading && (
        <div className="contact__loading-modal">
          <div className="contact__loading-spinner"></div>
          <p>Enviando mensaje...</p>
        </div>
      )}

      {/* Modal de mensaje */}
      {modal.show && (
        <div className="contact__modal-overlay" onClick={hideModal}>
          <div className="contact__modal" onClick={(e) => e.stopPropagation()}>
            <div className={`contact__modal-icon ${modal.type}`}>
              {modal.type === 'success' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" fill="#10B981"></circle>
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" fill="#EF4444"></circle>
                  <line x1="8" y1="8" x2="16" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round"></line>
                  <line x1="16" y1="8" x2="8" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round"></line>
                </svg>
              )}
            </div>
            <h3 className="contact__modal-title">{modal.title}</h3>
            <p className="contact__modal-message">{modal.message}</p>
            <button className="contact__modal-close" onClick={hideModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Contact
