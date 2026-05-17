import React from "react";

export default function Portfolio() {
  const floatingStyle = `
  @keyframes float {
    0%{
      transform: translateY(0px);
    }
    50%{
      transform: translateY(-10px);
    }
    100%{
      transform: translateY(0px);
    }
  }
  `;

  return (
    <>
      <style>{floatingStyle}</style>

      <div style={styles.container}>
        {/* Navbar */}
        <nav style={styles.navbar}>
          <h2 style={styles.logo}>Samiksha Parit</h2>

          <ul style={styles.navLinks}>
            <li>
              <a href="#home" style={styles.link}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" style={styles.link}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" style={styles.link}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" style={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section id="home" style={styles.hero}>
          <div style={styles.left}>
            <h1 style={styles.heading}>
              Hi, I'm <span style={styles.name}>Samiksha Parit</span>
            </h1>

            <h3 style={styles.subheading}>Frontend Developer</h3>

            <p style={styles.text}>
              I build responsive and modern web applications using React.js,
              JavaScript, HTML, CSS and Bootstrap.
            </p>

            <div style={styles.buttons}>
              <a href="#projects">
                <button style={styles.primaryBtn}>View Projects</button>
              </a>

              <a href="resume.pdf" download>
                <button style={styles.secondaryBtn}>Download Resume</button>
              </a>
            </div>
          </div>

          <div style={styles.right}>
            <img src="/photo (2).jpeg" alt="profile" style={styles.image} />
          </div>
        </section>

        {/* About */}
        <section id="about" style={styles.section}>
          <h2 style={styles.sectionTitle}>About Me</h2>

          <p style={styles.sectionText}>
            I am a passionate software developer fresher interested in creating
            attractive and user-friendly web applications. I enjoy learning new
            technologies and improving my frontend skills.
          </p>
        </section>

        {/* Skills */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Skills</h2>

          <div style={styles.skillsContainer}>
            <div style={styles.skill}>HTML</div>
            <div style={styles.skill}>CSS</div>
            <div style={styles.skill}>JavaScript</div>
            <div style={styles.skill}>React JS</div>
            <div style={styles.skill}>Java</div>
            <div style={styles.skill}>SQL</div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" style={styles.section}>
          <h2 style={styles.sectionTitle}>Projects</h2>

          <div style={styles.projectContainer}>
            {/* Card 1 */}
            <div
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 25px rgba(37,99,235,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
              }}
            >
              <h3>Recipe Finder App</h3>

              <p>A React application to search recipes with API integration.</p>
            </div>

            {/* Card 2 */}
            <div
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 25px rgba(37,99,235,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
              }}
            >
              <h3>Music Player</h3>

              <p>
                A modern music player app with playlist and search
                functionality.
              </p>
            </div>

            {/* Card 3 */}
            <div
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 25px rgba(37,99,235,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
              }}
            >
              <h3>Student Management System</h3>

              <p>CRUD-based student management dashboard using React.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact Me</h2>

          <p>Email: samikshaparit04902@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/samiksha</p>
          <p>GitHub: github.com/samiksha</p>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <p>© 2026 Samiksha Parit | Built with React ❤️</p>
        </footer>
      </div>
    </>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(to right, #eef2ff, #f8fafc)",
    color: "#333",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    background: "#ffffff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    color: "#1e3a8a",
  },

  navLinks: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
  },

  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  },

  hero: {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "50px",
    flexWrap: "wrap",
  },

  left: {
    maxWidth: "500px",
  },

  heading: {
    fontSize: "50px",
    marginBottom: "10px",
  },

  name: {
    color: "#2563eb",
  },

  subheading: {
    color: "#555",
    marginBottom: "20px",
  },

  text: {
    lineHeight: "1.8",
    marginBottom: "25px",
  },

  buttons: {
    display: "flex",
    gap: "15px",
  },

  primaryBtn: {
    padding: "12px 20px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },

  secondaryBtn: {
    padding: "12px 20px",
    border: "2px solid #2563eb",
    background: "transparent",
    color: "#2563eb",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },

  right: {
    marginTop: "20px",
  },

  image: {
    width: "300px",
    borderRadius: "50%",
    boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
    animation: "float 4s ease-in-out infinite",
  },

  section: {
    padding: "80px 50px",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "35px",
    marginBottom: "20px",
    color: "#1e3a8a",
  },

  sectionText: {
    maxWidth: "700px",
    margin: "auto",
    lineHeight: "1.8",
  },

  skillsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "30px",
  },

  skill: {
    background: "#2563eb",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "30px",
    fontWeight: "bold",
    animation: "float 3s ease-in-out infinite",
  },

  projectContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px",
    flexWrap: "wrap",
    marginTop: "40px",
  },

  card: {
    width: "280px",
    minHeight: "180px",
    background: "#ffffff",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    textAlign: "center",
  },

  footer: {
    background: "#1e293b",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    marginTop: "40px",
  },
};
