import "../styles/CVPreview.css";

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
                        <div className="preview-entry" key={entry.id}>
                            <p className="preview-entry-title">
                            {entry.degree}
                            </p>

                            <p className="preview-entry-subtitle">
                            {entry.school}
                            </p>

                            <p className="preview-entry-date">
                            {entry.year}
                            </p>
                        </div>
                    ))}
                </>
            )}
            {experience.length > 0 && (
                <>
                    <h3>Experience</h3>
                    {experience.map((entry) => (
                        <div className="preview-entry" key={entry.id}>
                            <div className="experience-heading">
                                <div>
                                <p className="preview-entry-title">
                                    {entry.position}
                                </p>

                                <p className="preview-entry-subtitle">
                                    {entry.company}
                                </p>
                                </div>

                                <p className="preview-entry-date">
                                {entry.startDate} — {entry.endDate}
                                </p>
                            </div>

                            <p className="experience-description">
                                {entry.description}
                            </p>
                            </div>
                    ))}
                </>
            )}
            {skills.length > 0 && (
                <section className="preview-section skills-section-preview">
                    <h3>Skills</h3>

                    <div className="skills-preview">
                    {skills.map((entry) => (
                        <span className="skill-preview" key={entry.id}>
                        <strong>{entry.skill}</strong>
                        <span>{entry.level}</span>
                        </span>
                    ))}
                    </div>
                </section>
            )}
        </div>
    );
}

export default CVPreview;