import { useState } from "react";
const featureTabs = {
  students: {
    hero: {
      tag: "For Students",
      title: "An always-available mental wellness space",
      description:
        "Students can journal, self-assess, request appointments, and reach peer support without switching tools.",
      stats: [
        { value: "9", label: "Daily support features" },
        { value: "1", label: "Unified timeline" },
      ],
    },
    cards: [
      { tag: "Privacy", title: "Anonymous expression", description: "Identity-safe participation lowers hesitation and increases honest check-ins.", persona: "Personalized for first-year students adapting to new social pressure." },
      { tag: "Care", title: "AI conversation layer", description: "Students receive immediate reflection prompts during high-stress moments.", persona: "Personalized for exam-week anxiety spikes and sleep disruption." },
      { tag: "Rhythm", title: "Daily and weekly journaling", description: "Structured writing templates create continuity across emotional cycles.", persona: "Personalized prompts based on journaling consistency and mood tone." },
      { tag: "Connection", title: "Peer and counselor messaging", description: "Escalation paths stay clear from private support to professional intervention.", persona: "Personalized routing to peer circles or counselor support pathways." },
    ],
  },
  counselors: {
    hero: {
      tag: "For Counselors",
      title: "Session quality improves with context",
      description:
        "Counselors enter each session with trends, prior reflections, and risk markers in one structured dashboard.",
      stats: [
        { value: "3x", label: "Faster prep" },
        { value: "100%", label: "Context continuity" },
      ],
    },
    cards: [
      { tag: "Schedule", title: "Smarter appointment flow", description: "Requests, confirmations, and follow-ups are tied to support history.", persona: "Personalized by counselor workload, urgency level, and session type." },
      { tag: "Insight", title: "Trend snapshots", description: "Recurring stress and mood themes are surfaced with minimal friction.", persona: "Personalized risk signals based on recent check-ins and assessments." },
      { tag: "Resources", title: "Prescribed wellness content", description: "Counselors can route students to practical resources in one click.", persona: "Personalized recommendations by concern category and progress stage." },
      { tag: "Comms", title: "Secure support threads", description: "Sensitive conversations stay central, auditable, and easy to continue.", persona: "Personalized continuity across asynchronous and live follow-ups." },
    ],
  },
  admins: {
    hero: {
      tag: "For Admins",
      title: "Campus wellbeing at systems level",
      description:
        "Administrators get macro visibility across engagement, forms, announcements, and support operations.",
      stats: [
        { value: "4", label: "Operational modules" },
        { value: "24/7", label: "Platform reliability" },
      ],
    },
    cards: [
      { tag: "Governance", title: "Role-based user management", description: "Students, counselors, and admins run in clean permission boundaries.", persona: "Personalized access templates for each institutional department." },
      { tag: "Community", title: "Moderation controls", description: "Safe discussions are maintained through transparent oversight tools.", persona: "Personalized moderation queues by risk keywords and channel activity." },
      { tag: "Programs", title: "Announcement and form pipeline", description: "Institution-wide campaigns are launched and tracked from one layer.", persona: "Personalized rollout windows based on audience response patterns." },
      { tag: "Metrics", title: "Engagement analytics", description: "Data-backed insight helps direct staffing and campus support investment.", persona: "Personalized KPI views for dean office, counseling, and operations." },
    ],
  },
};

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("students");
  const selected = featureTabs[activeTab];

  return (
    <section id="features" className="sensee-section">
      <div className="sensee-shell">
        <div className="sensee-header-row">
          <div>
            <span className="sensee-badge">
              <span className="sensee-dot" />
              Product Features
            </span>

            <h2 className="sensee-title">
              <span className="sensee-title-line">Our key</span>
              <span className="sensee-title-line"><em>features</em></span>
            </h2>
          </div>

          <div className="sensee-switcher" role="tablist" aria-label="Audience switcher">
            <button className={activeTab === "students" ? "active" : ""} onClick={() => setActiveTab("students")}>For Students</button>
            <button className={activeTab === "counselors" ? "active" : ""} onClick={() => setActiveTab("counselors")}>For Counselors</button>
            <button className={activeTab === "admins" ? "active" : ""} onClick={() => setActiveTab("admins")}>For Admins</button>
          </div>
        </div>

        <div className="sensee-bento">
          <article className="sensee-card sensee-card-hero">
            <span className="sensee-pill-tag">{selected.hero.tag}</span>
            <h3 className="sensee-card-title hero">{selected.hero.title}</h3>
            <p className="sensee-card-text">{selected.hero.description}</p>

            <div className="sensee-hero-chat">
              <p className="sensee-msg"><span>Support request captured and categorized.</span></p>
              <p className="sensee-msg right"><span>Care pathway activated with next best action.</span></p>
            </div>

            <div className="sensee-hero-stats">
              {selected.hero.stats.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <small>{item.label}</small>
                </div>
              ))}
            </div>

            <div className="sensee-visual">
              <span className="sensee-online">
                <span className="sensee-online-dot" />
                Always online
              </span>
            </div>
          </article>

          {selected.cards.map((feature) => (
            <article className="sensee-card" key={feature.title}>
              <span className="sensee-pill-tag">{feature.tag}</span>
              <h3 className="sensee-card-title">{feature.title}</h3>
              <p className="sensee-card-text">{feature.description}</p>
              <div className="sensee-visual sensee-card-persona">
                <small>Personalized Layer</small>
                <p>{feature.persona}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
