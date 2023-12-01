import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (project) {
      let projectImage = require("../images/" + project.image);

      return (
        <div key={project.title} className="portfolio-item">
          <div className="item-wrap">
            <img alt={project.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>
              <h2>{project.title}</h2>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <div className="container">
          <h1>Check Out Some of My Works.</h1>
          <div className="portfolio-grid">{projects}</div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
