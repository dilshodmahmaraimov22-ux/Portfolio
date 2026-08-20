import React from 'react';
import './Project.css';

function Project() {
  const projects = [
    { id: 1, img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80' },
    { id: 2, img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80' },
    { id: 3, img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80' },
    { id: 4, img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80' },
    { id: 5, img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80' },
    { id: 6, img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        
        <h2 className="projects-main-title">
          Latest <span className="highlight-text">Project</span>
        </h2>

        <div className="projects-grid">
          {projects.map((item) => (
            <div key={item.id} className="project-card">
              <img src={item.img} alt={`Project ${item.id}`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Project;