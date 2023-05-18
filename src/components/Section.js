import './styles/Section.css';

export default function Section({
  title,
  children,
}) {
  return (
    <div className="section">
      <h3>{title}</h3>
      {children}
    </div>
  );
}
