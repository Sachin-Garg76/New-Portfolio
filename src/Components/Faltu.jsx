import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6rpeo4e",
        "template_kxgufgi",
        formRef.current,
        "xarYMakT7vnz20bTq"
      )
      .then(
        (result) => {
          alert("Email sent successfully");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send email");
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        required
      />

      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
      />

      <button type="submit">Send Email</button>
    </form>
  );
};

export default ContactForm;
