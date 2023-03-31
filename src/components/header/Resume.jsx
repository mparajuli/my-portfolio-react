import React from 'react';
// import resume from '/Users/mparajuli/Desktop/my-portfolio/src/assets/resume.docx'; 
import resume from '../../assets/resume.docx';

const Resume = () => {
  return (
    <div className='resume'>
      <a href={resume} download className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Connect</a>
    </div>
  )
}

export default Resume;