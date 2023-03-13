import React from 'react';
import '../styles/Home.css'
import { IoSchoolSharp } from 'react-icons/io5'

function Education() {
  return (
    <div className='education'>
      <div>
        <h1><b style={{color:'dodgerblue', marginLeft:'10px'}}>Education</b></h1>
        <h1 style={{color:'dodgerblue', textAlign:'center'}}><IoSchoolSharp/></h1>
      </div>
        <div className='school-info'>
            <h2>(Honours) Statistics Specialist, Statistical Machine Learning and Data Science Stream (B.Sc)</h2>
            <h2 style={{color:'mediumseagreen'}}><b>University of Toronto</b></h2>
            <h2>2015-2021</h2>
        </div>
        <div className='courses'>
        <h4>Relevant Courses (Course Code)</h4>
        <br></br>
                <ol className='course-list'>
                    <li className='course'><h5>Databases and Web Applications <b class='bold'>(CSCB20)</b></h5></li>
                    <li className='course'><h5>Theory of Computing <b class='bold'>(CSCB36)</b></h5></li>
                    <li className='course'><h5>Design and Analysis of Data Structures <b class='bold'>(CSCB63)</b></h5></li>
                    <li className='course'><h5>Software Design <b class='bold'>(CSCB07)</b></h5></li>
                    <li className='course'><h5>Numerical Algorithms for Computational Mathematics <b class='bold'>(CSCC37)</b></h5></li>
                    <li className='course'><h5>Machine Learning and Data Mining <b class='bold'>(CSCC11)</b></h5></li>
                    <li className='course'><h5>Algorithm Design and Analysis <b class='bold'>(CSCC73)</b></h5></li>
                </ol>
        </div>
        
    </div>
  );
}

export default Education;