import "./about-section.scss";

type AboutProps = {
  info: { title: string; paragraph: string }[];
  theme?: string;
};

export default function AboutSection({ info, theme = "primary" }: AboutProps) {
  return (
    <div className={`pinkpanther-features-wrapper -${theme}`}>
      <div className="pinkpanther-features">
        {info.map((section) => (
          <div key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
