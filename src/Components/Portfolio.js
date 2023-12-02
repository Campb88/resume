import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    // Organize projects into categories
    const projectsByCategory = this.props.data.projects.reduce(function (acc, project) {
      const category = project.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(project);
      return acc;
    }, {});

    // Generate JSX for each category
    const categorySections = Object.keys(projectsByCategory).map(function (category) {
      const projects = projectsByCategory[category].map(function (project) {
        let projectImage = require("../images/" + project.image);

        return (
          <div key={project.title} className="portfolio-item">
            <div className="item-wrap">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img alt={project.title} src={projectImage} />
              </a>
              <div style={{ textAlign: "center" }}>
                <h3>{project.title}</h3>
              </div>
            </div>
          </div>
        );
      });

      return (
        <div key={category} className="portfolio-category">
          <h2>{category}</h2>
          <div className="portfolio-grid">{projects}</div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <div className="container">
          <h1>Employment Portfolio</h1>
          {categorySections}
        </div>
      </section>
    );
  }
}


export default Portfolio;
