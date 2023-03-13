import {useState} from "react"
import './App.css';
import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css'
import {AiFillFileText, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

import './styles/Home.css'

import Education from './pages/Education'
import IntroView from './pages/IntroView'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import Resume from './assets/ResumeForLushiLiu.pdf'

function App() {

  const [currentView, setCurrentView] = useState('intro')

  return (
    <div className="App">
      <div className='home'>
          <SwitchTransition>
              <CSSTransition key={currentView} timeout={300} classNames='fade'>
                  <div>
                  {currentView === 'intro' && <IntroView/>}
                  {currentView === 'education' && <Education/>}
                  {currentView === 'skills' && <Skills/>}
                  {currentView === 'projects' && <Projects/>}
                  {currentView === 'contactme' && <ContactMe/>}
                  </div>
              </CSSTransition>
          </SwitchTransition>
          <div className='buttons'>
              <Button variant={currentView==='intro' ? 'success' : 'outline-success' } className='button' onClick={() => setCurrentView("intro")}><b>About</b></Button>
              <Button variant={currentView==='education' ? 'primary' : 'outline-primary' } className='button' onClick={() => setCurrentView("education")}><b>Education</b></Button>
              <Button variant={currentView==='skills' ? 'danger' : 'outline-danger' } className='button' onClick={() => setCurrentView("skills")}><b>Skills</b></Button>
              <Button variant={currentView==='projects' ? 'success' : 'outline-success' } className='button' onClick={() => setCurrentView("projects")}><b>Projects</b></Button>
              <Button variant={currentView==='contactme' ? 'primary' : 'outline-primary' } className='button' onClick={() => setCurrentView("contactme")}><b>Contact</b></Button>
          </div>
      </div>
      <div className='icons'>
                <a href='https://www.linkedin.com/in/lushiliu/' target='_blank' style={{color:'mediumseagreen'}}><AiFillLinkedin /></a>
                <a href='https://github.com/LushiLiu57' target='_blank' style={{color:'dodgerblue', top:'80px'}}><AiFillGithub /></a>
                <a style={{color:'firebrick', top:'150px'}} href={Resume} download='ResumeForLushiLiu.pdf'><AiFillFileText/></a>
      </div>
      <div className="corner-line"></div>
    </div>
  );
}

export default App;
