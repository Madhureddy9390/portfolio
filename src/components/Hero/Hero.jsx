import "./Hero.css";

import {
  ArrowRightOutlined,
  DownloadOutlined,
  MailOutlined,
} from "@ant-design/icons";

import Button from "../Button/Button";
import SocialLinks from "../SocialLinks/SocialLinks";

import profile from "../../data/profile";

import profileImage from "../../assets/images/profile.png";
import AnimatedStatus from "./AnimatedStatus";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <AnimatedStatus />
            <h1 className="hero-title">
              Hi, I'm <span>{profile.name}</span>
            </h1>
            <h2 className="hero-heading">{profile.role}</h2>
            <p className="hero-description">
              Frontend Engineer with 1.9+ years of experience building scalable
              React applications using React.js, Redux Toolkit, JavaScript, REST
              APIs, and modern UI libraries.
            </p>
            <div className="hero-buttons">
              <Button
                variant="primary"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
                <ArrowRightOutlined />
              </Button>

              <Button variant="secondary" href={profile.resume} download>
                <DownloadOutlined />
                Download Resume
              </Button>
            </div>
            <SocialLinks />
          </div>

          <div className="hero-image">
            <div className="hero-image-card">
              <img src={profileImage} alt={profile.name} />

              <div className="hero-image-info">
                <h3>{profile.name}</h3>

                <p>{profile.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
