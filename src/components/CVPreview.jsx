function CVPreview({ personalInfo, education}) {
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
        </div>
    );
}

export default CVPreview;