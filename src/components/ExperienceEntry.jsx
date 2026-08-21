function ExperienceEntry({ entry, onChange, onRemove }) {
    function handleFieldChange(e) {
        const { name, value } = e.target;
        onChange(entry.id, name, value);
    }

    return (
        <div className="experience-entry">
            <label>
                Company
                <input type="text" name="company" value={entry.company} onChange={handleFieldChange}></input>
            </label>
            <label>
                Position
                <input type="text" name="position" value={entry.position} onChange={handleFieldChange}></input>
            </label>
            <label>
                Start Date
                <input type="date" name="startDate" value={entry.startDate} onChange={handleFieldChange}></input>
            </label>
            <label>
                End Date
                <input type="date" name="endDate" value={entry.endDate} onChange={handleFieldChange}></input>
            </label>
            <label>
                Description
                <input type="text" name="description" value={entry.description} onChange={handleFieldChange}></input>
            </label>
            <button type="button" onClick={() => onRemove(entry.id)}>Remove</button>
        </div>
    )
}

export default ExperienceEntry;