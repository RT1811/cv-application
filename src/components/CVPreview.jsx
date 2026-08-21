function CVPreview({ personalInfo}) {
    return (
        <div className="cv-preview">
            <h2>{personalInfo.name || "Your Name"}</h2>
            <p>{personalInfo.email || "your.email@example.com"}</p>
            <p>{personalInfo.phone || "Your Phone Number"}</p>
        </div>
    );
}

export default CVPreview;