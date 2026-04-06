const Collections = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Collections Expertise</h2>
      <p style={styles.sub}>
        Proven experience in banking collections, customer handling, and
        compliance-driven recovery processes.
      </p>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Credit Card Collections</h3>
          <ul>
            <li>✔ Customer follow-ups & payment reminders</li>
            <li>✔ Strong negotiation & communication skills</li>
            <li>✔ Handling overdue accounts professionally</li>
            <li>✔ Coordination with field & tele-calling teams</li>
            <li>✔ Building positive customer relationships</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3>Recovery Performance</h3>
          <ul>
            <li>✔ Consistent achievement of recovery targets</li>
            <li>✔ Strong follow-up and closure approach</li>
            <li>✔ Improving payment conversion rates</li>
            <li>✔ Focus on reducing pending cases</li>
            <li>✔ Maintaining performance under pressure</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3>Compliance & Process</h3>
          <ul>
            {/* <li>✔ Adherence to RBI & banking guidelines</li> */}
            <li>✔ Professional call handling & etiquette</li>
            <li>✔ Proper documentation & reporting</li>
            <li>✔ Ethical and customer-friendly recovery practices</li>
            <li>✔ Data confidentiality & accuracy</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3>Core Skills</h3>
          <ul>
            <li>✔ Communication & interpersonal skills</li>
            <li>✔ Problem-solving & objection handling</li>
            <li>✔ Time management & multitasking</li>
            <li>✔ CRM systems & tracking tools</li>
            <li>✔ Team coordination & support</li>
          </ul>
        </div>
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
    fontSize: "36px",
  },
  sub: {
    textAlign: "center",
    marginBottom: "40px",
    color: "#aaa",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "0.3s",
  },
};

export default Collections;
