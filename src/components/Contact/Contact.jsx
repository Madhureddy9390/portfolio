import "./Contact.css";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  SendOutlined,
} from "@ant-design/icons";

import Section from "../Section/Section";
import SectionHeading from "../SectionHeading/SectionHeading";
import Card from "../Card/Card";
import Button from "../Button/Button";

import profile from "../../data/profile";

const initialState = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 3) {
      newErrors.name = "Name should contain at least 3 characters.";
    }

    if (!email) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message) {
      newErrors.message = "Please enter your message.";
    } else if (message.length < 15) {
      newErrors.message = "Message should contain at least 15 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) return;

    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      alert("Message sent successfully!");

      setFormData(initialState);
      setErrors({});
    } catch (error) {
      console.error(error);

      alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <Section id="contact">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind or want to discuss an opportunity? Feel free to reach out."
      />

      <div className="contact-container">
        <div className="contact-info">
          <Card className="contact-card">
            <MailOutlined className="contact-icon" />

            <div>
              <h3>Email</h3>

              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </Card>

          <Card className="contact-card">
            <PhoneOutlined className="contact-icon" />

            <div>
              <h3>Phone</h3>

              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </div>
          </Card>

          <Card className="contact-card">
            <EnvironmentOutlined className="contact-icon" />

            <div>
              <h3>Location</h3>

              <p>{profile.location}</p>
            </div>
          </Card>

          <Card className="contact-card">
            <GithubOutlined className="contact-icon" />

            <div>
              <h3>GitHub</h3>

              <a href={profile.github} target="_blank" rel="noreferrer">
                View Profile
              </a>
            </div>
          </Card>

          <Card className="contact-card">
            <LinkedinOutlined className="contact-icon" />

            <div>
              <h3>LinkedIn</h3>

              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                Connect with Me
              </a>
            </div>
          </Card>
        </div>

        <Card className="contact-form-card">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name *</label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />

              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />

              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>

              <textarea
                id="message"
                rows="6"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "input-error" : ""}
              />

              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>

            <Button variant="primary" type="submit" disabled={isSending}>
              <SendOutlined />

              {isSending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}

export default Contact;
