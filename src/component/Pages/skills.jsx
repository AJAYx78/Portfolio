import React from 'react';
import './IntroAnimation.css';

export default function Skills() {
  // Array of skills
  const skills = [
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🌱' },
    { name: 'Spring MVC', icon: '🌱' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'HTML/CSS', icon: '🌐' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Git', icon: '🔧' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },       // Added AWS
    { name: 'Jenkins', icon: '⚙️' },    // Added Jenkins
    { name: 'SonarQube', icon: '🔍' }   // Added SonarQube
    
  ];
  

  return (
    <div className="intro-animation">
      <section id="skills" className="container my-5">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <div className="card-icon mb-3" style={{ fontSize: '2rem' }}>
                    {skill.icon}
                  </div>
                  <h5 className="card-title">{skill.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
