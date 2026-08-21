function EducationEntry({ entry, onChange, onRemove }) {
    function handleFieldChange(e) {
        const { name, value } = e.target;
        onChange(entry.id, name, value);
    }

    return (
        <div className="education-entry">
            <label>
                School
                <input type="text" name="school" value={entry.school} onChange={handleFieldChange}></input>
            </label>
            <label>
                Degree
                <input type="text" name="degree" value={entry.degree} onChange={handleFieldChange}></input>
            </label>
            <label>
                year
                <input type="text" name="year" value={entry.year} onChange={handleFieldChange}></input>
            </label>
            <button type="button" onClick={() => onRemove(entry.id)}>Remove</button>
        </div>
    )
}

export default EducationEntry;