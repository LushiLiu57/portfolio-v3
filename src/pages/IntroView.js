import React from 'react';
import '../styles/Home.css'

import { DiReact } from "react-icons/di"

function IntroView() {
  return (
    <div className='introview'>
      <div className='left-side'>
        <h1>Hi, I'm <b style={{color:'mediumseagreen'}}>Lushi</b></h1>
        <h3>I am a <b style={{color:'dodgerblue'}}>Web Developer</b></h3>
        <h5>I love the challenge of solving complex problems and learning new technologies. Whether working on my own or as part of 
        a team, I always bring a positive attitude and a commitment to delivering high-quality work</h5>
      </div>
      <div className='right-side'>
        <DiReact/>
      </div>
        
    </div>
  );
}

export default IntroView;