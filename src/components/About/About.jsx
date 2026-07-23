import "./About.css";

import { BookOutlined, ReadOutlined } from "@ant-design/icons";

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
            I'm a <strong>Frontend Engineer</strong> with{" "}
            <strong>1.9 years of experience</strong> building scalable,
            intuitive, and user-centric web applications using the{" "}
            <strong>React </strong>
            ecosystem. I've contributed to enterprise applications by developing
            reusable component architectures, implementing role-based
            dashboards, integrating REST APIs and third-party services, and
            delivering responsive, high-performance user interfaces.
          </p>

          <p>
            I enjoy transforming complex business requirements into clean,
            maintainable solutions while collaborating with cross-functional
            teams to deliver reliable products. Passionate about continuous
            learning, I'm currently expanding my backend expertise to grow as a{" "}
            <strong>Full Stack Engineer</strong>.
          </p>
        </div>

        <div className="about-right">
          <Card className="education-card">
            <div className="education-header">
              <div className="education-icon">
                <ReadOutlined />
              </div>

              <h3>Education</h3>
            </div>

            <h4>B.Tech, Computer Science</h4>

            <p className="college">
              Bharath Institute of Higher Education and Research
            </p>

            <div className="education-footer">
              <span className="cgpa">9.18</span>

              <span className="education-meta">CGPA • 2024</span>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

export default About;
