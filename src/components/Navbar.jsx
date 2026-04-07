import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={styles.nav}>
      {/* LEFT */}
      <div style={styles.left}>
        <img src="/profile1.jpg" alt="profile" style={styles.profile} />
        <h2 style={styles.logo}>Rushikesh</h2>
      </div>

      {/* MENU ICON */}
      {isMobile && (
        <div style={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>
      )}

      {/* LINKS */}
      <div
        style={{
          ...styles.links,
          ...(isMobile
            ? menuOpen
              ? styles.mobileMenuOpen
              : styles.mobileMenuClosed
            : {}),
        }}
      >
        {navLinks.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            style={{
              ...styles.link,
              ...(isMobile ? styles.mobileLink : {}),
            }}
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

/* ✅ FIXED ROUTES */
const navLinks = [
  { name: "Home", path: "/" }, // IMPORTANT FIX
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Collections", path: "/collections" },
  { name: "Contact", path: "/contact" },
];

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(10, 15, 28, 0.9)",
    backdropFilter: "blur(12px)",
    color: "white",
    zIndex: 1000,
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  logo: {
    color: "#00e0c6",
    fontSize: "20px",
  },

  profile: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    border: "2px solid #00e0c6",
    objectFit: "cover",
  },

  links: {
    display: "flex",
    gap: "25px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    position: "relative",
    transition: "0.3s",
  },

  /* 🔥 DESKTOP HOVER EFFECT */
  linkHover: {
    color: "#00e0c6",
  },

  menuIcon: {
    fontSize: "26px",
    cursor: "pointer",
    color: "#00e0c6",
  },

  /* 🔥 MOBILE OPEN WITH ANIMATION */
  mobileMenuOpen: {
    position: "absolute",
    top: "70px",
    left: 0,
    width: "100%",
    flexDirection: "column",
    background: "rgba(2,6,23,0.95)",
    backdropFilter: "blur(15px)",
    padding: "25px 0",
    textAlign: "center",
    gap: "20px",
    display: "flex",
    animation: "slideDown 0.4s ease",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },

  /* 🔥 MOBILE CLOSED */
  mobileMenuClosed: {
    display: "none",
  },

  /* 🔥 MOBILE LINK STYLE */
  mobileLink: {
    fontSize: "18px",
    padding: "10px 0",
    width: "100%",
  },
};

export default Navbar;
