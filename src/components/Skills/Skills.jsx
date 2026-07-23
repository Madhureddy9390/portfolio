import "./Skills.css";

import {
  CodeOutlined,
  AppstoreOutlined,
  DatabaseOutlined,
  ApiOutlined,
  ToolOutlined,
  DeploymentUnitOutlined,
  ClusterOutlined,
} from "@ant-design/icons";
import Card from "../Card/Card";
import Section from "../Section/Section";
import SectionHeading from "../SectionHeading/SectionHeading";

import skills from "../../data/skills";

const iconMap = {
  code: <CodeOutlined />,
  frontend: <AppstoreOutlined />,
  state: <ClusterOutlined />,
  api: <ApiOutlined />,
  tools: <ToolOutlined />,
  web: <DeploymentUnitOutlined />,
};
function Skills() {
  return (
    <Section id="skills">
      <SectionHeading subtitle="Skills" title="Technologies I Build With" />

      <div className="skills-grid">
        {skills.map((category) => (
          <Card key={category.id} className="skill-card">
            <div className="skill-icon" aria-hidden="true">
              {iconMap[category.icon]}
            </div>

            <h3>{category.title}</h3>

            <ul className="skill-list">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
