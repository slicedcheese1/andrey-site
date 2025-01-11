import { useState } from 'react'
import './App.css'
import ProjectsSection from './Components/ProjectsSections/ProjectsSection'
import ToolkitsSection from './Components/ToolkitsSections/ToolkitsSection'


function App() {
  const [activeSection, setActiveSection] = useState('home')

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'toolkits', label: 'Toolkits' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ]

  function scrollToSection(id) {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className='stars'></div>
      <div className='stars1'></div>
      <div className='stars2'></div>
      <div className='navbar'>
        {sections.map(item => (
          <p
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </p>
        ))}
      </div>
      <div className='content'>
        <section id='home' className='section'>
          <h2>Andrey Gabriel</h2>
          <p>Full Stack Developer</p>
        </section>
        <section id='toolkits' className='section'>
          <h2 className='section-title'>TOOLKITS</h2>
          <ToolkitsSection />
        </section>
        <section id='projects' className='section'>
          <h2 className='section-title'>PROJECTS</h2>
          <ProjectsSection />
        </section>
        <section id='about' className='section'>
          <h2 className='section-title'>ABOUT</h2>
          <p>
            I was born in 2003 in Manaus, Amazonas, and I am currently graduating
            in Computer Engineering. I'm passionate about what I do and
            fascinated by transforming problems into solutions through code. I
            believe that creating tools that make people's lives easier and
            solve everyday challenges is priceless and I love it.
          </p>
        </section>
        <section id='contact' className='section'>
          <h2 className='section-title'>CONTACT</h2>
          <p>agdam683@gmail.com</p>
        </section>
      </div>
    </>
  )
}

export default App
