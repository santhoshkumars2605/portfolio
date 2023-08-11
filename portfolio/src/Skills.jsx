// Skills.js
import React from 'react';
import './Skills.css'; // Import your custom CSS file

const Skills = () => {
  const skillsData = [
    { name: 'Java', image: 'images/java.png' },
    { name: 'Python', image: 'images/python.png' },
    { name: 'HTML', image: 'images/html.png' },
    { name: 'CSS', image: 'images/css.png' },
    { name: 'JavaScript', image: 'images/javasript.png' },
    { name: 'React', image: 'images/react.png' },
    { name: 'Nodejs', image: 'images/node.png' },
    { name: 'Mysql', image: 'images/mysql.png' },
    { name: 'MongoDb', image: 'images/mongo.png' },
    { name: 'Git', image: 'images/git.png' },
  
  ];

  return (
    <div style={{backgroundColor:'black'}} className='Overrallskills' id='skills'>
        <div className='skillcont'>
            <center><h1 style={{color:'white'}}>Skills</h1></center> <br /><br />
            <div className="skills-container">
                
            {skillsData.map((skill, index) => (
                <div key={index} className="skill">
                <img src={skill.image} alt={skill.name} className="skill-image" />
                <p style={{color:'white'}} className="skill-name">{skill.name}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default Skills;
