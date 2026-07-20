import "./About.css";

import { BookOutlined } from "@ant-design/icons";

import Card from "../Card/Card";
import Section from "../Section/Section";
import SectionHeading from "../SectionHeading/SectionHeading";

function About() {
  return (
    <Section id="about">
      <SectionHeading subtitle="About" title="A quick intro" />

      <div className="about">
        <div className="about-left">
          <p>
            I'm a <strong>Frontend Engineer</strong> focused on building
            scalable web applications with <strong>React.js</strong> and its
            ecosystem. Over <strong>1.9 years</strong>, I've delivered features
            across multi-role platforms—from URL-driven Redux state hydration to
            responsive, API-driven user interfaces.
          </p>

          <p>
            I enjoy building reusable component architectures, clean state
            management, performance-focused applications, and intuitive user
            experiences. I'm currently expanding my backend knowledge to grow as
            a <strong>Full Stack Engineer</strong>.
          </p>
        </div>

        <div className="about-right">
          <Card className="education-card">
            <div className="education-header">
              <div className="education-icon">
                <BookOutlined />
              </div>

              <h3>Education</h3>
            </div>

            <h4>B.Tech, Computer Science</h4>

            <p className="college">
              Bharath Institute of Higher Education and Research
            </p>

            <div className="education-footer">
              <span className="cgpa">9.25</span>

              <span className="education-meta">CGPA • 2024</span>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

export default About;
