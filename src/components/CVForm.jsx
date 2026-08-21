import EducationEntry from "./EducationEntry";
import ExperienceEntry from "./ExperienceEntry";

function CVForm({personalInfo, setPersonalInfo, education, addEducation, updateEducationField, removeEducation, experience, addExperience, updateExperienceField, removeExperience}) {
    function handlePersonalInfoChange(e) {
        const { name, value } = e.target;
        setPersonalInfo((prev) => ({...prev, [name]: value}));
    }

    return (
        <div className="cv-form">
            <h2>Personal Info</h2>
            <label>
                Name
                <input
                type="text"
                name="name"
                value={personalInfo.name}
                onChange={handlePersonalInfoChange}
                />
            </label>
            <label>
                Email
                <input
                type="email"
                name="email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
                />
            </label>
            <label>
                Phone
                <input
                type="tel"
                name="phone"
                value={personalInfo.phone}
                onChange={handlePersonalInfoChange}
                />
            </label>

            <h2>Education</h2>
            {education.map((entry) => (
                <EducationEntry
                    key={entry.id}
                    entry={entry}
                    onChange={updateEducationField}
                    onRemove={removeEducation}
                />
            ))}
            <button type="button" onClick={addEducation}>Add Education</button>

            <h2>Experience</h2>
            {experience.map((entry) => (
                <ExperienceEntry
                    key={entry.id}
                    entry={entry}
                    onChange={updateExperienceField}
                    onRemove={removeExperience}
                />
            ))}
            <button type="button" onClick={addExperience}>Add Experience</button>
        </div>
    )
}

export default CVForm;