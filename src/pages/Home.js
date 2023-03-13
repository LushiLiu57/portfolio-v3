import React from 'react'
import {useState} from "react"
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'
import {AiFillFileText, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import '../styles/Home.css'

import Education from './Education'
import IntroView from './IntroView'
import Skills from './Skills'
import Projects from './Projects'
import ContactMe from './ContactMe'


function Home() {

    const [currentView, setCurrentView] = useState('intro')

    return (
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
                <Button variant={currentView==='intro' ? 'success' : 'outline-success' } className='button' onClick={() => setCurrentView("intro")}><b>About Me</b></Button>
                <Button variant={currentView==='education' ? 'primary' : 'outline-primary' } className='button' onClick={() => setCurrentView("education")}><b>Education</b></Button>
                <Button variant={currentView==='skills' ? 'danger' : 'outline-danger' } className='button' onClick={() => setCurrentView("skills")}><b>Skills</b></Button>
                <Button variant={currentView==='projects' ? 'success' : 'outline-success' } className='button' onClick={() => setCurrentView("projects")}><b>Projects</b></Button>
                <Button variant={currentView==='contactme' ? 'primary' : 'outline-primary' } className='button' onClick={() => setCurrentView("contactme")}><b>Contact</b></Button>
            </div>
        </div>
        

    )
}

export default Home