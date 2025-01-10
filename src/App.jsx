import './App.css'

function App() {


  return (
    <>
    <div className='stars'></div>
    <div className='stars1'></div>
    <div className='stars2'></div>
      <div className ='me' >
       <h2 style = {{ 
       translate:'1%',
       left:'0', 
       right:'0', 
       fontFamily:'Lato', 
       fontWeight:'300',
       letterSpacing:'8px'
       }}>Andrey Gabriel</h2>
       <p style = {{
        letterSpacing: '2px',

        fontFamily:'Lato',
        translate: '1%',
        marginTop: '3.5%'
        }}>Full Stack Developer</p>
      </div>
      <div style={{color:'#fff', marginTop:'20%', width:'15%', fontFamily:'Lato', letterSpacing:'2px', position:'absolute'}}>
        <p>Home</p>
        <p>Toolkits</p>
        <p>Projects</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className='aboutMe' style ={{width:'15%', position:'absolute'}}>
        <p style={{color:'#fff', translate:'560%', marginTop:'220%', fontFamily:'Lato', letterSpacing:'2px', position:'absolute'}}>I was born in 2003 in Manaus, Amazonas, and I am currently graduating in Computer Engineering.
           I'm passionate about what I do and fascinated by transforming problems into solutions through code.
            I believe that creating tools that make people's lives easier and solve everyday challenges is priceless and I love it.</p>
      </div>
   
    </>
  )
}

export default App
