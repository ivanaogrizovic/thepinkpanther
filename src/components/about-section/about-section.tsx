import "./about-section.scss";

export default function AboutSection() {
  return (
    <>
      <div
        className="pinkpanther-our-values"
        role="region"
        aria-label="Our values"
      >
        <div className="pinkpanther-value">
          <h3>React based</h3>
          <p>
            Built with React 18.3.1, this website showcases a modular structure
            with reusable, scalable components.
          </p>
        </div>
        <div className="pinkpanther-value">
          <h3>Responsive</h3>
          <p>
            Designed to adapt seamlessly, the layout performs beautifully across
            phones, tablets, and desktops.
          </p>
        </div>
        <div className="pinkpanther-value">
          <h3>Mobile-first</h3>
          <p>
            Over 70% of the internets traffic comes from mobile devices.
            Catering towards the majority of users is vital.
          </p>
        </div>
        <div className="pinkpanther-value">
          <h3>WCAG 2.2 AA</h3>
          <p>
            Fully accessible, allowing everyone to navigate your services. Real
            or not.
          </p>
        </div>
      </div>
    </>
  );
}
