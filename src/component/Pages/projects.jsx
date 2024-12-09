import React from 'react';
import  './IntroAnimation.css';

export default function Projects() {
  return (
    <div  className="intro-animation">
    <section id="projects" className="container my-5">
      <h2>My Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="project1.png" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">A brief description of Project 1.</p>
              <a href="#" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="project2.png" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">A brief description of Project 2.</p>
              <a href="#" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="project3.png" className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">A brief description of Project 3.</p>
              <a href="#" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
