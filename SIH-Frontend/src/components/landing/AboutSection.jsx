const AboutSection = () => {
  return (
    <section id="about" className="sensee-section">
      <div className="sensee-shell">
        <div className="sensee-header-row">
          <div>
            <span className="sensee-badge">
              <span className="sensee-dot" />
              About SensEase
            </span>

            <h2 className="sensee-title">
              <span className="sensee-title-line">Care system for</span>
              <span className="sensee-title-line"><em>modern campuses</em></span>
            </h2>
          </div>
        </div>

        <div className="sensee-grid-4" style={{ marginBottom: "12px" }}>
          <article className="sensee-card sensee-stat-card">
            <span className="sensee-pill-tag">Coverage</span>
            <strong>24/7</strong>
            <p className="sensee-card-text">Always available support pathways</p>
          </article>
          <article className="sensee-card sensee-stat-card">
            <span className="sensee-pill-tag">Modules</span>
            <strong>12</strong>
            <p className="sensee-card-text">Integrated mental wellness features</p>
          </article>
          <article className="sensee-card sensee-stat-card">
            <span className="sensee-pill-tag">Flow</span>
            <strong>1</strong>
            <p className="sensee-card-text">Unified student-to-counselor experience</p>
          </article>
          <article className="sensee-card sensee-stat-card">
            <span className="sensee-pill-tag">Goal</span>
            <strong>Zero</strong>
            <p className="sensee-card-text">Stigma around asking for help</p>
          </article>
        </div>

        <div className="sensee-grid-3">
          <article className="sensee-card">
            <span className="sensee-pill-tag">Mission</span>
            <h3 className="sensee-card-title">Accessible support for every student</h3>
            <p className="sensee-card-text">
              SensEase is built to reduce barriers and make emotional care immediate, private, and practical.
            </p>
            <div className="sensee-visual sensee-card-persona">
              <small>Personalized Outcome</small>
              <p>Each student sees care options that match their current stress level and history.</p>
            </div>
          </article>
          <article className="sensee-card">
            <span className="sensee-pill-tag">Vision</span>
            <h3 className="sensee-card-title">Resilient campuses by design</h3>
            <p className="sensee-card-text">
              Institutions can move from reactive interventions to proactive, data-informed wellbeing systems.
            </p>
            <div className="sensee-visual sensee-card-persona">
              <small>Personalized Outcome</small>
              <p>Departments receive targeted insights based on their student population profile.</p>
            </div>
          </article>
          <article className="sensee-card">
            <span className="sensee-pill-tag">Approach</span>
            <h3 className="sensee-card-title">Human care plus intelligent workflows</h3>
            <p className="sensee-card-text">
              Counselors, admins, and students stay synchronized through one platform language.
            </p>
            <div className="sensee-visual sensee-card-persona">
              <small>Personalized Outcome</small>
              <p>Workflows adapt per role so each user sees only what is relevant and actionable.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
