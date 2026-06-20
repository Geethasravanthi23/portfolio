function Projects() {
  return (
    <section id="projects" className="projects-section">

      <h2>Featured Projects</h2>

      {/* SmartHire360 */}

      <div className="project-card">

        <h3>🚀 SmartHire360</h3>

        <img
          src="/smarthire360.png"
          alt="SmartHire360"
          className="project-image"
        />

        <p>
          AI-Powered Job Tracking and Career Management Platform that helps
          job seekers manage applications, analyze resumes, improve ATS scores,
          identify skill gaps and track career growth.
        </p>

        <p>
          <strong>Key Features:</strong>
        </p>

        <ul>
          <li>Resume Analyzer with ATS Scoring</li>
          <li>Job Match Analyzer</li>
          <li>Skill Recommendation Engine</li>
          <li>Application Tracking Dashboard</li>
          <li>Profile Management</li>
        </ul>

        <p>
          <strong>Tech Stack:</strong> Java, Spring Boot, React.js, MySQL
        </p>

        <a
          href="https://github.com/Geethasravanthi23/SmartHire360"
          target="_blank"
          rel="noreferrer"
        >
          <button>View GitHub</button>
        </a>

      </div>

      {/* QuickBites */}

      <div className="project-card">

        <h3>🍔 QuickBites Food Delivery System</h3>

        <img
          src="/quickbites.png"
          alt="QuickBites"
          className="project-image"
        />

        <p>
          Full-stack food delivery platform enabling customers to browse menus,
          place orders, manage carts and track food deliveries.
        </p>

        <p>
          <strong>Key Features:</strong>
        </p>

        <ul>
          <li>User Registration & Login</li>
          <li>Restaurant Management</li>
          <li>Shopping Cart Functionality</li>
          <li>Checkout & Order Placement</li>
          <li>Menu Management System</li>
        </ul>

        <p>
          <strong>Tech Stack:</strong> Java, JSP, Servlets, JDBC, MySQL
        </p>

        <a
          href="https://github.com/Geethasravanthi23/QuickBites--FoodDeliveryWebApplication"
          target="_blank"
          rel="noreferrer"
        >
          <button>View GitHub</button>
        </a>

      </div>

    </section>
  );
}

export default Projects;