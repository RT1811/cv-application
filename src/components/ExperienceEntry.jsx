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
                position
                <input type="text" name="position" value={entry.position} onChange={handleFieldChange}></input>
            </label>
            <label>
                Start Date
                <input type="text" name="start-date" value={entry.startDate} onChange={handleFieldChange}></input>
            </label>
            <label>
                End Date
                <input type="text" name="end-date" value={entry.endDate} onChange={handleFieldChange}></input>
            </label>
            <label>
                Description
                <input type="text" name="description" value={entry.description} onChange={handleFieldChange}></input>
            </label>
            <button type="button" onClick={() => onRemove(entry.id)}>Remove</button>
        </div>
    )
}