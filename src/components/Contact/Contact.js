import React, { useState } from "react";
import emailjs from "emailjs-com";
import Particle from "../Particle";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0e8tx02", // Your EmailJS Service ID
        "template_5m4mf6h", // Your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "PZalL7veh0Q2-MXjW" // Your EmailJS User ID
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: "custom-toast", // Custom class for styling
            progressClassName: "custom-progress", // Custom progress bar
          });

          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        () => {
          toast.error("Failed to send message. Try again!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: "custom-toast",
            progressClassName: "custom-progress",
          });
        }
      );
  };

  return (
    <div className="contact-container">
      <Particle />
      <motion.div
        className="contact-form"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              required
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </motion.div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}

export default Contact;
