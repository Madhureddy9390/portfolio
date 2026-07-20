import "./SectionHeading.css";

function SectionHeading({ subtitle, title }) {
  return (
    <div className="section-heading">
      {subtitle && <p className="section-subtitle">{subtitle}</p>}

      <h2 className="section-title">{title}</h2>
    </div>
  );
}

export default SectionHeading;
