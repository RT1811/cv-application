function CVPreview({ personalInfo, education, experience}) {
    return (
        <div className="cv-preview">
            <h2>{personalInfo.name || "Your Name"}</h2>
            <p>{personalInfo.email || "your.email@example.com"}</p>
            <p>{personalInfo.phone || "Your Phone Number"}</p>

            {education.length > 0 && (
                <>
                    <h3>Education</h3>
                    {education.map((entry) => (
                        <p key={entry.id}>{entry.degree} — {entry.school} ({entry.year})</p>
                    ))}
                </>
            )}
            {experience.length > 0 && (
                <>
                    <h3>Experience</h3>
                    {experience.map((entry) => (
                        <div key={entry.id}>
                            <p key={entry.id}>{entry.position} — {entry.company} ({entry.startDate} — {entry.endDate})</p>
                            <p key={entry.id}>{entry.description}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default CVPreview;