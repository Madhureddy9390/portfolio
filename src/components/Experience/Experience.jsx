import "./Experience.css";

import {
  CalendarOutlined,
  EnvironmentOutlined,
  ApartmentOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

import Card from "../Card/Card";
import Section from "../Section/Section";
import SectionHeading from "../SectionHeading/SectionHeading";

import experience from "../../data/experience";

function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        subtitle="Where I've Worked"
        title="Professional Experience"
      />

      <div className="experience-list">
        {experience.map((item) => (
          <Card key={item.id} className="experience-card">
            <div className="experience-header">
              <div className="experience-company">
                <div className="company-name">
                  <ApartmentOutlined />

                  <span>{item.company}</span>
                </div>

                <h3>{item.role}</h3>
              </div>

              <div className="experience-meta">
                <div>
                  <CalendarOutlined />

                  <span>{item.duration}</span>
                </div>

                <div>
                  <EnvironmentOutlined />

                  <span>{item.location}</span>
                </div>
              </div>
            </div>

            <div className="experience-tech">
              {item.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <ul className="experience-highlights">
              {item.highlights.map((point) => (
                <li key={point}>
                  <CheckCircleFilled />

                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
