function CVPreview({ personalInfo, education, experience, skills}) {
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
                            <p>{entry.position} — {entry.company} ({entry.startDate} — {entry.endDate})</p>
                            <p>{entry.description}</p>
                        </div>
                    ))}
                </>
            )}
            {skills.length > 0 && (
                <>
                    <h3>Skills</h3>

                    {skills.map((entry) => (
                    <p key={entry.id}>
                        {entry.skill} - {entry.level}
                    </p>
                    ))}
                </>
                )}
        </div>
    );
}

export default CVPreview;