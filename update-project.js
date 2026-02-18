const fs = require('fs');
const path = 'src/components/Projects.jsx';
let content = fs.readFileSync(path, 'utf8');
const old = `    {
      id: 2,
      title: 'Sistema de Gestión',
      description: 'Aplicación web para gestión empresarial con Laravel y MySQL. Incluye módulos de usuarios, reportes, y dashboard interactivo.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      link: '#',
      github: '#'
    }`;
const replacement = `    {
      id: 2,
      title: 'Proyecto API Gestión de Cursos',
      description: 'API REST profesional desarrollada con Laravel, incluyendo autenticación con tokens, gestión de cursos, control de roles y sistema de inscripción de estudiantes.',
      technologies: ['Laravel', 'Sanctum', 'MySQL', 'REST', 'Postman'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      link: null,
      github: 'https://github.com/PedDevFr/InectApi'
    }`;
content = content.replace(old, replacement);
fs.writeFileSync(path, content);
console.log('Updated successfully');
