import EducationEntry from "./EducationEntry.jsx";

function EducationSection({
  education,
  onAdd,
  onUpdate,
  onRemove,
}) {
  return (
    <section className="education-section">
      <h2>Education</h2>

      {education.map((entry) => (
        <EducationEntry
          key={entry.id}
          entry={entry}
          onChange={onUpdate}
          onRemove={onRemove}
        />
      ))}

      <button type="button" onClick={onAdd}>
        Add Education
      </button>
    </section>
  );
}

export default EducationSection;