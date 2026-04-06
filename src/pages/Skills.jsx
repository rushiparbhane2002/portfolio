import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Credit Card Collections",
    points: [
      "Customer follow-ups & negotiation",
      "Strong communication & persuasion",
      "Field & tele-calling coordination",
      "Maintaining professional customer relationships",
    ],
  },
  {
    title: "Recovery Performance",
    points: [
      "Consistent target achievement",
      "High recovery efficiency",
      "Customer handling & resolution",
      "Improving payment follow-up success rate",
    ],
  },
  {
    title: "Compliance & Process",
    points: [
      "RBI & bank recovery guidelines",
      "Customer consent & call etiquette",
      "Proper documentation & reporting",
      "Ethical and professional practices",
    ],
  },
];

const Skills = () => {
  return (
    <div style={styles.container}>
      {/* 🔥 PARTICLES */}
      <div style={styles.particles}></div>

      <motion.h1
        style={styles.heading}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Skills
      </motion.h1>

      <div style={styles.grid}>
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 35px rgba(0,224,198,0.5)",
            }}
          >
            {/* 🔥 GRADIENT BORDER */}
            <div style={styles.borderGlow}></div>

            <h2 style={styles.title}>{skill.title}</h2>

            <ul>
              {skill.points.map((point, i) => (
                <li key={i} style={styles.point}>
                  ✔ {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    padding: "100px 8%",
    background: "linear-gradient(135deg,#020617,#0f172a)",
    color: "white",
    position: "relative",
    overflow: "hidden",
  },

  /* 🔥 PARTICLES BACKGROUND */
  particles: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(#00e0c6 1px, transparent 1px), radial-gradient(#22d3ee 1px, transparent 1px)",
    backgroundSize: "60px 60px",
    animation: "moveBg 25s linear infinite",
    opacity: 0.1,
    top: 0,
    left: 0,
    zIndex: 0,
  },

  heading: {
    textAlign: "center",
    marginBottom: "60px",
    fontSize: "42px",
    color: "#00e0c6",
    position: "relative",
    zIndex: 1,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
    position: "relative",
    zIndex: 1,
  },

  /* 🔥 CARD */
  card: {
    position: "relative",
    padding: "25px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(255,255,255,0.1)",
    overflow: "hidden",
    transition: "0.3s",
  },

  /* 🔥 ANIMATED BORDER */
  borderGlow: {
    position: "absolute",
    inset: 0,
    borderRadius: "18px",
    padding: "1px",
    background: "linear-gradient(120deg, transparent, #00e0c6, transparent)",
    WebkitMask:
      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    WebkitMaskComposite: "xor",
    animation: "borderMove 3s linear infinite",
    pointerEvents: "none",
  },

  title: {
    marginBottom: "15px",
    color: "#00e0c6",
    fontSize: "20px",
  },

  point: {
    marginBottom: "10px",
    fontSize: "14px",
    color: "#ddd",
  },
};

export default Skills;
