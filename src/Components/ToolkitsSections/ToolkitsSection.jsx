import { useEffect, useRef, useState } from 'react'
import './ToolkitsSection.css'

function ToolkitsSection() {
  const items = [
    {
      id: 'angular',
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      description: 'Framework completo para desenvolvimento web baseado em TypeScript.',
      experience: 'Tenho 2 anos de experiência com essa tecnologia.'
    },
    {
      id: 'react',
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: 'Biblioteca JavaScript para construir interfaces de usuário.',
      experience: '2 Anos de experiência com a tecnologia.'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      description: 'Linguagem de programação dinâmica e multiparadigma para web.',
      experience: '3 Anos de experiência com a tecnologia.'
    },
    {
      id: 'css',
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      description: 'Mecanismo de estilização para páginas web.',
      experience: '3 Anos de experiência com a tecnologia.'
    },
    {
      id: 'html',
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      description: 'Linguagem de marcação utilizada na construção de páginas web.',
      experience: '3 Anos de experiência com a tecnologia.'
    },
    {
      id: 'c',
      name: 'C',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      description: 'Linguagem de programação de nível médio para sistemas embarcados.',
      experience: '2 Anos de experiência com a tecnologia.'
    },
    {
      id: 'cpp',
      name: 'C++',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      description: 'Evolução da linguagem C com foco em POO.',
      experience: '6 meses de experiência com a tecnologia.'
    },
    {
      id: 'python',
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      description: 'Linguagem de alto nível, dinâmica e fácil de aprender.',
      experience: '1 ano de experiência com a tecnologia.'
    },
    {
      id: 'node',
      name: 'Node',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      description: 'Ambiente de execução JavaScript server-side para apps escaláveis.',
      experience: '1 ano de experiência com a tecnologia.'
    },
    {
      id: 'springboot',
      name: 'SpringBoot',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      description: 'Framework para desenvolvimento rápido de aplicações em Java.',
      experience: '2 Anos de experiência com a tecnologia.'
    },
    {
      id: 'mysql',
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      description: 'Sistema de gerenciamento de banco de dados relacional muito popular.',
      experience: '3 Anos de experiência com a tecnologia.'
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      description: 'Banco de dados objeto-relacional robusto e de código aberto.',
      experience: '1 ano de experiência com a tecnologia.'
    }
  ]

  const containerRef = useRef(null)
  const [activeItem, setActiveItem] = useState(items[0].id)

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll('.toolkit-card')
    const options = { root: null, rootMargin: '0px', threshold: 0.25 }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.id)
        }
      })
    }, options)
    sections.forEach(section => observer.observe(section))
    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

  return (
    <div className='toolkits-wrapper'>
      <div className='toolkits-container' ref={containerRef}>
        {items.map(item => (
          <div key={item.id} id={item.id} className='toolkit-card'>
            <img src={item.icon} alt={item.name} className='toolkit-icon' />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>{item.experience}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToolkitsSection
