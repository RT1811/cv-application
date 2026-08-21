import ExperienceEntry from "./ExperienceEntry.jsx";

function ExperienceSection({
  experience,
  onAdd,
  onUpdate,
  onRemove,
}) {
  return (
    <section className="experience-section">
      <h2>Experience</h2>

      {experience.map((entry) => (
        <ExperienceEntry
          key={entry.id}
          entry={entry}
          onChange={onUpdate}
          onRemove={onRemove}
        />
      ))}

      <button type="button" onClick={onAdd}>
        Add Experience
      </button>
    </section>
  );
}

export default ExperienceSection;