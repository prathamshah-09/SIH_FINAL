const stories = [
  {
    name: "Demi Lovato",
    story: "Depression and recovery",
    quote: "Recovery is something that you have to work on every single day.",
    persona: "Reflection prompt: What one small act of care can you repeat daily this week?",
  },
  {
    name: "Robert Downey Jr.",
    story: "Overcoming addiction",
    quote: "You can still make mistakes and be forgiven.",
    persona: "Reflection prompt: Which support person can you message today without overthinking it?",
  },
  {
    name: "Deepika Padukone",
    story: "Fighting depression",
    quote: "It is okay to not be okay. It is okay to ask for help.",
    persona: "Reflection prompt: Name one feeling you are carrying and one step you can take now.",
  },
];

const InspiringStoriesSection = () => {
  return (
    <section id="stories" className="sensee-section">
      <div className="sensee-shell">
        <div className="sensee-header-row">
          <div>
            <span className="sensee-badge">
              <span className="sensee-dot" />
              Real Stories
            </span>

            <h2 className="sensee-title">
              <span className="sensee-title-line">Stories of</span>
              <span className="sensee-title-line"><em>strength</em></span>
            </h2>

            <p className="sensee-subtext">
              These voices remind every student that mental wellness is a process, not a single moment.
            </p>
          </div>
        </div>

        <div className="sensee-grid-3">
          {stories.map((story) => (
            <article key={story.name} className="sensee-card">
              <span className="sensee-pill-tag">{story.story}</span>
              <h3 className="sensee-card-title">{story.name}</h3>
              <p className="sensee-card-text">"{story.quote}"</p>
              <div className="sensee-visual sensee-card-persona">
                <small>Personalized Reflection</small>
                <p>{story.persona}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspiringStoriesSection;
