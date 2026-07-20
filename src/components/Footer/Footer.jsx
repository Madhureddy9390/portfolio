import "./Footer.css";

import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import profile from "../../data/profile";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-about">
            <h2>{profile.name}</h2>

            <h4>{profile.role}</h4>

            <p>
              Passionate Frontend Developer focused on building scalable,
              responsive, and user-friendly web applications using modern
              JavaScript technologies.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-contact">
            <h3>Connect</h3>

            <a href={`mailto:${profile.email}`}>
              <MailOutlined />
              {profile.email}
            </a>

            <a href={`tel:${profile.phone}`}>
              <PhoneOutlined />
              {profile.phone}
            </a>

            <a href={profile.github} target="_blank" rel="noreferrer">
              <GithubOutlined />
              GitHub
            </a>

            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedinOutlined />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {profile.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
