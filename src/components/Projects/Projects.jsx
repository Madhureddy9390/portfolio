import "./Projects.css";

import Card from "../Card/Card";
import Section from "../Section/Section";
import SectionHeading from "../SectionHeading/SectionHeading";

import projects from "../../data/projects";
import { ExportOutlined } from "@ant-design/icons";

function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        subtitle="Featured Work"
        title="Professional & Personal Projects"
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <Card key={project.id} className="project-card">
            <span className="project-category">{project.category}</span>

            <h3>{project.title}</h3>

            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo"
              >
                Live Demo <ExportOutlined />
              </a>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
