function Skills({ entry, onChange, onRemove }) {
  function handleFieldChange(e) {
    const { name, value } = e.target;
    onChange(entry.id, name, value);
  }

  return (
    <div className="skill-entry">
      <label>
        Skill
        <input
          type="text"
          name="skill"
          value={entry.skill}
          onChange={handleFieldChange}
        />
      </label>

      <label>
        Level
        <select
          name="level"
          value={entry.level}
          onChange={handleFieldChange}
        >
          <option value="">Select level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Expert">Expert</option>
        </select>
      </label>

      <button type="button" onClick={() => onRemove(entry.id)}>
        Remove
      </button>
    </div>
  );
}