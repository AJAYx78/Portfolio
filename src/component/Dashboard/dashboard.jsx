import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Dashboard.css';

export default function Dashboard() {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        setAnimationTriggered(true);
      }
    },
  });

  useEffect(() => {
    console.log('Animation triggered:', animationTriggered); // Log to check if it's updating
  }, [animationTriggered]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Dashboard</h1>
      <div className="row">
        <div ref={ref} className={`col-12 mb-4 animated-section ${animationTriggered ? 'fade-in' : ''}`}>
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Ongoing Development Activity</h5>
              {animationTriggered && (
                <div className="stick-figure-animation">
                  <span className="stick-figure">👨‍💻</span>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Other sections */}
      </div>
    </div>
  );
}
