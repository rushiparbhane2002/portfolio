import { motion } from "framer-motion";
import profileImg from "../public/profile.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const roles = [
  "Credit Card Collection Officer",
  "Expert in Negotiation",
  "EMI & Settlement Specialist",
  "Recovery Strategy Planner",
];

const Home = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();

  // 🔥 PREMIUM TYPEWRITER
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      style={{
        ...styles.container,
        flexDirection: isMobile ? "column" : "row",
        textAlign: isMobile ? "center" : "left",
        padding: isMobile ? "100px 20px 40px" : "100px 80px 50px",
      }}
    >
      {/* 🔥 MOBILE IMAGE */}
      {isMobile && (
        <motion.div
          style={{
            ...styles.imageWrapper,
            width: "180px",
            height: "180px",
            marginBottom: "20px",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img src={profileImg} alt="profile" style={styles.image} />
        </motion.div>
      )}

      {/* LEFT CONTENT */}
      <div style={styles.left}>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: isMobile ? "22px" : "28px" }}
        >
          Hi, I am
        </motion.h1>

        <motion.h2
          style={{
            ...styles.name,
            fontSize: isMobile ? "32px" : "55px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Rushikesh <span style={{ color: "#00e0c6" }}>Parbhane</span>
        </motion.h2>

        {/* TYPEWRITER */}
        <h3
          style={{
            ...styles.typing,
            fontSize: isMobile ? "16px" : "22px",
          }}
        >
          {text}
          <span style={styles.cursor}>|</span>
        </h3>

        {/* DESCRIPTION */}
        <p
          style={{
            ...styles.desc,
            fontSize: isMobile ? "14px" : "15px",
          }}
        >
          Dedicated Credit Card Collection Officer with hands-on experience in
          managing customer interactions and overdue accounts. Skilled in
          effective communication, negotiation, and follow-up strategies while
          ensuring compliance with banking guidelines. Focused on achieving
          recovery targets through professional and ethical collection
          practices.
        </p>

        {/* BUTTONS */}
        <div
          style={{
            ...styles.buttons,
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
          <button style={styles.btn} onClick={() => navigate("/contact")}>
            Contact Me
          </button>

          <a href="/resume.pdf" download>
            <button style={styles.btnOutline}>Download Resume</button>
          </a>
        </div>
      </div>

      {/* 💻 DESKTOP IMAGE */}
      {!isMobile && (
        <motion.div
          style={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img src={profileImg} alt="profile" style={styles.image} />
        </motion.div>
      )}
    </section>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    background: "linear-gradient(135deg, #020617, #0f172a)",
    flexWrap: "wrap",
  },

  left: {
    maxWidth: "600px",
    width: "100%",
  },

  name: {
    fontWeight: "bold",
    lineHeight: "1.2",
  },

  typing: {
    marginTop: "10px",
    color: "#00e0c6",
  },

  cursor: {
    marginLeft: "5px",
    animation: "blink 1s infinite",
  },

  desc: {
    marginTop: "20px",
    lineHeight: "1.6",
    color: "#ccc",
  },

  buttons: {
    marginTop: "30px",
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },

  btn: {
    padding: "12px 22px",
    background: "#00e0c6",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  btnOutline: {
    padding: "12px 22px",
    border: "1px solid #00e0c6",
    background: "transparent",
    color: "#00e0c6",
    borderRadius: "25px",
    cursor: "pointer",
  },

  imageWrapper: {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    border: "3px solid #00e0c6",
    padding: "5px",
    boxShadow: "0 0 40px rgba(0,224,198,0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
};

export default Home;
