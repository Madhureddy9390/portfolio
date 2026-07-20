import "./SocialLinks.css";

import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import profile from "../../data/profile";

function SocialLinks() {
  return (
    <div className="social-links">
      <a href={`mailto:${profile.email}`} aria-label="Email">
        <MailOutlined />
      </a>

      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedinOutlined />
      </a>

      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <GithubOutlined />
      </a>
    </div>
  );
}

export default SocialLinks;
