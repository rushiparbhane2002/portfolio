import { motion } from "framer-motion";

const About = () => {
  return (
    <div style={styles.container}>
      {/* 🔥 BACKGROUND PARTICLES */}
      <div style={styles.particles}></div>

      {/* HEADING */}
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Me
      </motion.h2>

      <p style={styles.subText}>Who I am & what I bring to the table</p>

      <div style={styles.wrapper}>
        {/* LEFT */}
        <motion.div
          style={styles.left}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 style={styles.title}>Credit Card Collection Officer</h3>

          <p style={styles.description}>
            Dedicated professional experienced in customer interaction,
            follow-ups, and maintaining strong relationships while ensuring
            compliance with banking guidelines.
          </p>

          <ul style={styles.list}>
            <li>✔ Strong communication & negotiation</li>
            <li>✔ Customer follow-ups & coordination</li>
            <li>✔ Field visits & recovery support</li>
            <li>✔ RBI guidelines awareness</li>
            <li>✔ CRM & tracking systems</li>
          </ul>
        </motion.div>

        {/* RIGHT CARDS */}
        <div style={styles.right}>
          <motion.div style={styles.card} whileHover={styles.hover}>
            <h4>Experience</h4>
            <p>
              <b>HDFC Bank Ltd.</b>
            </p>
            <span>Apr 2025 – Present</span>
          </motion.div>

          <motion.div style={styles.card} whileHover={styles.hover}>
            <h4>Core Strengths</h4>
            <p>Negotiation · Communication · Field Work · Compliance</p>
          </motion.div>

          <motion.div style={styles.card} whileHover={styles.hover}>
            <h4>Education</h4>
            <p>
              Bachelor of Computer Science <br />
              Savitribai Phule Pune University
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    padding: "100px 8%",
    position: "relative",
    overflow: "hidden",
    background: "#020617",
    color: "white",
  },

  /* 🔥 PARTICLES BACKGROUND */
  particles: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle at 20% 30%, #00e0c6 1px, transparent 1px), radial-gradient(circle at 80% 70%, #00e0c6 1px, transparent 1px)",
    backgroundSize: "120px 120px",
    animation: "moveBg 20s linear infinite",
    opacity: 0.15,
    top: 0,
    left: 0,
    zIndex: 0,
  },

  heading: {
    textAlign: "center",
    fontSize: "42px",
    color: "#00e0c6",
    position: "relative",
    zIndex: 1,
  },

  subText: {
    textAlign: "center",
    marginBottom: "50px",
    color: "#aaa",
    position: "relative",
    zIndex: 1,
  },

  wrapper: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    position: "relative",
    zIndex: 1,
  },

  left: {
    flex: 1,
    minWidth: "280px",
  },

  right: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    minWidth: "280px",
  },

  title: {
    color: "#00e0c6",
    fontSize: "24px",
  },

  description: {
    margin: "20px 0",
    lineHeight: "1.6",
    color: "#ccc",
  },

  list: {
    lineHeight: "2",
    color: "#ddd",
  },

  /* 🔥 GLASS + GRADIENT BORDER */
  card: {
    padding: "20px",
    borderRadius: "15px",
    position: "relative",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(255,255,255,0.1)",
    overflow: "hidden",
  },

  /* 🔥 HOVER EFFECT */
  hover: {
    scale: 1.05,
    boxShadow: "0 0 30px rgba(0,224,198,0.4)",
  },
};

export default About;
