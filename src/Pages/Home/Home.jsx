import { useState, useEffect } from 'react'
import ProjectsSection from '../../Components/ProjectsSections/ProjectsSection'
import ToolkitsSection from '../../Components/ToolkitsSections/ToolkitsSection'

import './Home.css'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

import Typed from 'typed.js'


function Home() {
  const secoes = [
    { id: 'inicio', rotulo: 'Início' },
    { id: 'ferramentas', rotulo: 'Ferramentas' },
    { id: 'projetos', rotulo: 'Projetos' },
    { id: 'sobre', rotulo: 'Sobre' },
    { id: 'contato', rotulo: 'Contato' }
  ]

  const [secaoAtiva, setSecaoAtiva] = useState('inicio')

  function rolarParaSecao(id) {
    const elemento = document.getElementById(id)
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const opcoes = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    }

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          setSecaoAtiva(entrada.target.id)
        }
      })
    }, opcoes)

    const alvos = secoes.map((item) => document.getElementById(item.id))
    alvos.forEach((alvo) => {
      if (alvo) {
        observador.observe(alvo)
      }
    })

    return () => {
      alvos.forEach((alvo) => {
        if (alvo) {
          observador.unobserve(alvo)
        }
      })
    }
  }, [])

  // EFEITO DE DIGITAÇÃO
  useEffect(() => {
    const typed = new Typed('#typed', {
      strings: ['Developer'], 
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <div className='estrelas'></div>
      <div className='estrelas1'></div>
      <div className='estrelas2'></div>

      <div className='barra-lateral'>
        {secoes.map((item) => (
          <p
            key={item.id}
            className={`item-barra ${secaoAtiva === item.id ? 'ativo' : ''}`}
            onClick={() => rolarParaSecao(item.id)}
          >
            {item.rotulo}
          </p>
        ))}
      </div>

      <div className='conteudo'>

        <section id='inicio' className='secao animar-secao'>
          <h2>Andrey Gabriel</h2>

          <p>
            <span id='typed' className='digitando'></span>
          </p>
        </section>

        <section id='ferramentas' className='secao animar-secao'>
          <h2 className='titulo-secao'>FERRAMENTAS</h2>
          <ToolkitsSection />
        </section>

        <section id='projetos' className='secao animar-secao'>
          <h2 className='titulo-secao'>PROJETOS</h2>
          <ProjectsSection />
        </section>

        <section id='sobre' className='secao animar-secao'>
          <h2 className='titulo-secao'>SOBRE</h2>
          <p>
            Nasci em 2003 em Manaus, Amazonas, e atualmente estou graduando em
            Engenharia de Computação pela Universidade do Estado do Amazonas. Sou
            apaixonado pelo que faço e fascinado em transformar problemas em soluções
            por meio de código. Acredito que criar ferramentas que facilitem a vida das
            pessoas e resolvam desafios do dia a dia não tem preço, e eu amo isso.
          </p>
        </section>

        <section id='contato' className='secao animar-secao'>
          <h2 className='titulo-secao'>CONTATO</h2>
          <p>agdam683@gmail.com</p>
          <div className='icones-sociais'>
            <a
              href='https://github.com/slicedcheese1'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/andrey-gabriel-dos-anjos/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin />
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
