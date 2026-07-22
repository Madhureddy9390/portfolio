import "./Contact.css";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { notification } from "antd";

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

      notification.success({
        message: "Thank You!",
        description:
          "Your message has been sent successfully. I appreciate your interest and will get back to you within 24 hours.",
        placement: "topRight",
        duration: 5,
      });

      setFormData(initialState);
      setErrors({});
    } catch (error) {
      console.error(error);

      notification.error({
        message: "Message Not Sent",
        description:
          "We couldn't send your message right now. Please try again in a few moments or contact me directly via email.",
        placement: "topRight",
        duration: 6,
      });
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
          <a
            href={`mailto:${profile.email}`}
            className="contact-card-link"
            aria-label="Send Email"
          >
            <Card className="contact-card">
              <MailOutlined className="contact-icon" />

              <div>
                <h3>Email</h3>
                <p>{profile.email}</p>
              </div>
            </Card>
          </a>

          <a
            href={`tel:${profile.phone}`}
            className="contact-card-link"
            aria-label="Call Phone Number"
          >
            <Card className="contact-card">
              <PhoneOutlined className="contact-icon" />

              <div>
                <h3>Phone</h3>
                <p>{profile.phone}</p>
              </div>
            </Card>
          </a>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              profile.location,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card-link"
            aria-label="Open Location in Google Maps"
          >
            <Card className="contact-card">
              <EnvironmentOutlined className="contact-icon" />

              <div>
                <h3>Location</h3>
                <p>{profile.location}</p>
              </div>
            </Card>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card-link"
            aria-label="Open GitHub Profile"
          >
            <Card className="contact-card">
              <GithubOutlined className="contact-icon" />

              <div>
                <h3>GitHub</h3>
                <p>View Profile</p>
              </div>
            </Card>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card-link"
            aria-label="Open LinkedIn Profile"
          >
            <Card className="contact-card">
              <LinkedinOutlined className="contact-icon" />

              <div>
                <h3>LinkedIn</h3>
                <p>Connect with Me</p>
              </div>
            </Card>
          </a>
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
                autoComplete="name"
                autoFocus
                value={formData.name}
                onChange={handleChange}
                disabled={isSending}
                aria-label="Your Name"
                aria-invalid={!!errors.name}
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
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSending}
                aria-label="Your Email"
                aria-invalid={!!errors.email}
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
                disabled={isSending}
                aria-label="Your Message"
                aria-invalid={!!errors.message}
                className={errors.message ? "input-error" : ""}
              />

              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>

            <Button variant="primary" type="submit" loading={isSending}>
              {isSending ? (
                "Sending..."
              ) : (
                <>
                  <SendOutlined />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}
export default Contact;
