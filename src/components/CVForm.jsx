import PersonalInfoSection from "./PersonalInfoSection.jsx";
import EducationSection from "./EducationSection.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import SkillsSection from "./SkillsSection.jsx";

function CVForm({
  personalInfo,
  setPersonalInfo,

  education,
  addEducation,
  updateEducationField,
  removeEducation,

  experience,
  addExperience,
  updateExperienceField,
  removeExperience,

  skills,
  addSkill,
  updateSkillField,
  removeSkill,
}) {
  return (
    <div className="cv-form">
      <PersonalInfoSection
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />

      <EducationSection
        education={education}
        onAdd={addEducation}
        onUpdate={updateEducationField}
        onRemove={removeEducation}
      />

      <ExperienceSection
        experience={experience}
        onAdd={addExperience}
        onUpdate={updateExperienceField}
        onRemove={removeExperience}
      />

      <SkillsSection
        skills={skills}
        onAdd={addSkill}
        onUpdate={updateSkillField}
        onRemove={removeSkill}
      />
    </div>
  );
}

export default CVForm;