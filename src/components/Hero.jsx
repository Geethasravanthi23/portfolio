function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <img
          src="/profile.jpeg"
          alt="Geetha Sravanthi"
          className="profile-pic"
        />
      </div>

      <div className="hero-right">
        <h1>Geetha Sravanthi Nelakurthi</h1>

        <h2>Oracle Certified Java Full Stack Developer</h2>

        <p>
          B.Tech Information Technology graduate with hands-on experience in
          Java, Spring Boot, React.js, MySQL, JSP, Servlets and REST APIs.
          Passionate about building scalable web applications and continuously
          learning modern software development technologies.
        </p>

        <div className="hero-buttons">
          <a
  href="/Geetha_Sravanthi_Java_Full_Stack_Developer_Resume.pdf"
  download
>
  <button>Download Resume</button>
</a>

          <a href="#projects">
            <button>View Projects</button>
          </a>

          <a
            href="https://linkedin.com/in/geethasravanthi-nelakurthi-8b06ba259"
            target="_blank"
            rel="noreferrer"
          >
            <button>LinkedIn</button>
          </a>

          <a
            href="https://github.com/Geethasravanthi23"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

