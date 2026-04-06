import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Professional Experience</h2>

      <div style={styles.timeline}>
        <motion.div
          style={styles.card}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3>Credit Card Collection Officer</h3>
          <p style={styles.company}>HDFC Bank</p>
          <span style={styles.date}>2025 – Present</span>

          <p style={styles.desc}>
            Responsible for handling customer interactions related to overdue
            credit card payments. Focused on effective communication,
            follow-ups, and maintaining strong customer relationships while
            ensuring compliance with banking guidelines.
          </p>

          <ul style={styles.list}>
            <li>✔ Regular customer follow-ups & payment reminders</li>
            <li>✔ Strong negotiation & communication skills</li>
            <li>✔ Maintaining recovery performance targets</li>
            <li>✔ Coordination with internal teams</li>
            <li>✔ Ensuring ethical and compliant recovery practices</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    padding: "100px 10%",
    background: "#020617",
    color: "white",
  },

  heading: {
    textAlign: "center",
    color: "#22d3ee",
    marginBottom: "50px",
    fontSize: "36px",
  },

  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    alignItems: "center",
  },

  card: {
    width: "100%",
    maxWidth: "700px",
    background: "rgba(255,255,255,0.05)",
    padding: "25px",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "0.3s",
  },

  company: {
    color: "#22d3ee",
    marginTop: "5px",
  },

  date: {
    fontSize: "13px",
    color: "#aaa",
  },

  desc: {
    marginTop: "15px",
    color: "#ccc",
    lineHeight: "1.6",
  },

  list: {
    marginTop: "15px",
    lineHeight: "1.8",
    color: "#ddd",
  },
};

export default Experience;
