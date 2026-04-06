import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const currentYear = new Date().getFullYear();

  const sendEmail = (e) => {
    e.preventDefault();

    const { user_name, user_email, user_phone, message } = form.current;

    if (
      !user_name.value ||
      !user_email.value ||
      !user_phone.value ||
      !message.value
    ) {
      setStatus("error");
      return;
    }

    if (!/^[0-9]{10}$/.test(user_phone.value)) {
      alert("Enter valid 10-digit mobile number");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_qqcingp",
        "template_k7d0run",
        form.current,
        "t0MrES3aI7HLvQgDR",
      )
      .then(() => {
        setLoading(false);
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setLoading(false);
        setStatus("error");
      });
  };

  return (
    <>
      <section className="contact-container">
        <div className="left">
          <h1>Let’s Connect 🚀</h1>
          <p>
            Have a query or opportunity? Drop your message and I’ll get back to
            you.
          </p>
        </div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="form"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>Contact Me</h2>

          <div className="inputBox">
            <input type="text" name="user_name" required />
            <label>Name</label>
          </div>

          <div className="inputBox">
            <input type="email" name="user_email" required />
            <label>Email</label>
          </div>

          <div className="inputBox">
            <input type="tel" name="user_phone" required />
            <label>Mobile Number</label>
          </div>

          <div className="inputBox">
            <textarea name="message" rows="4" required></textarea>
            <label>Message</label>
          </div>

          <button disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="success">✅ Message sent successfully</p>
          )}
          {status === "error" && (
            <p className="error">❌ Please fill all fields correctly</p>
          )}
        </motion.form>
      </section>

      {/* ✅ FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.glow}></div>

        <h2 style={styles.footerName}>Rushikesh Parbhane</h2>

        <p style={styles.location}>📍 Pune, India</p>

        <div style={styles.socials}>
          <a
            href="https://www.linkedin.com/in/rushikesh-parbhane-788a42284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <FaLinkedin />
          </a>

          <a href="mailto:rushikeshparbhane2002@gmail.com" style={styles.icon}>
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/918080940052"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <FaWhatsapp />
          </a>

          <a href="tel:8080940052" style={styles.icon}>
            <FaPhone />
          </a>
        </div>

        <p style={styles.footerText}>
          © {currentYear} Rushikesh Parbhane | All Rights Reserved
        </p>
      </footer>
    </>
  );
};

const styles = {
  footer: {
    marginTop: "50px",
    padding: "40px 20px",
    textAlign: "center",
    background: "#020617",
    position: "relative",
    overflow: "hidden",
    zIndex: 1, // ✅ FIX
  },

  glow: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, #00e0c6, transparent)",
    top: "-100px",
    left: "50%",
    transform: "translateX(-50%)",
    filter: "blur(120px)",
    opacity: 0.4,
    animation: "pulse 4s infinite",
    pointerEvents: "none", // ✅ IMPORTANT FIX
  },

  footerName: {
    color: "#00e0c6",
    fontSize: "22px",
    marginBottom: "8px",
  },

  location: {
    color: "#94a3b8",
    marginBottom: "15px",
  },

  socials: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
    position: "relative",
    zIndex: 2,
  },

  icon: {
    fontSize: "20px",
    color: "#00e0c6",
    border: "1px solid #00e0c6",
    padding: "12px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s",
    textDecoration: "none",
    zIndex: 3,
  },

  footerText: {
    color: "#94a3b8",
    fontSize: "13px",
  },
};

export default Contact;
