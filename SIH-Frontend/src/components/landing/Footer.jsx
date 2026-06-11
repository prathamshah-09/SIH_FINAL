const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="sensee-footer">
      <div className="sensee-shell">
        <div className="sensee-footer-row" style={{ marginBottom: "14px" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "26px", color: "var(--color-navy)", margin: 0 }}>SensEase</p>
          <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
            <button onClick={() => scrollToSection("#home")}>Home</button>
            <button onClick={() => scrollToSection("#features")}>Features</button>
            <button onClick={() => scrollToSection("#stories")}>Stories</button>
            <button onClick={() => scrollToSection("#about")}>About</button>
          </div>
        </div>

        <div className="sensee-footer-row" style={{ borderTop: "1px solid rgba(99,82,180,0.2)", paddingTop: "14px" }}>
          <p>© {new Date().getFullYear()} SensEase. All rights reserved.</p>
          <p>Campus mental wellness platform for students, counselors, and administrators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
