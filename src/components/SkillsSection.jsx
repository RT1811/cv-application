import SkillEntry from "./SkillEntry.jsx";

function SkillsSection({
  skills,
  onAdd,
  onUpdate,
  onRemove,
}) {
  return (
    <section className="skills-section">
      <h2>Skills</h2>

      {skills.map((entry) => (
        <SkillEntry
          key={entry.id}
          entry={entry}
          onChange={onUpdate}
          onRemove={onRemove}
        />
      ))}

      <button type="button" onClick={onAdd}>
        Add Skill
      </button>
    </section>
  );
}

export default SkillsSection;