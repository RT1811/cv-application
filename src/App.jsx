import { useState } from "react";
import "./styles/App.css";

import CVForm from "./components/CVForm.jsx";
import CVPreview from "./components/CVPreview.jsx";

function App() {
  const[personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const[education, setEducation] = useState([]);
  const[experience,  setExperience] = useState([]);
  const[skills, setSkills] = useState([]);
  const [isEditing, setIsEditing] = useState(true);

  function addEducation() {
    const newEntry = { id: crypto.randomUUID(), school: "", degree: "", year: "" };
    setEducation((prev) => [...prev, newEntry]);
  }

  function addExperience() {
    const newEntry = { id: crypto.randomUUID(), company: "", position: "", startDate: "", endDate: "", description: "" };
    setExperience((prev) => [...prev, newEntry]);
  }

  function addSkill() {
    const newEntry = { id: crypto.randomUUID(), skill:  "", level: "" }
    setSkills((prev) => [...prev, newEntry]);
  }

  function updateEntry(setState, id, field, value) {
    setState((prev) =>
      prev.map((entry) =>
        entry.id === id
          ? { ...entry, [field]: value }
          : entry
      )
    );
  }

  function removeEntry(setState, id) {
    setState((prev) =>
      prev.filter((entry) => entry.id !== id)
    );
  }
  
  return (
    <div className="app">
      <h1>CV Application</h1>

      <div className="app-layout">
        {isEditing && (
          <CVForm
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}

            education={education}
            addEducation={addEducation}
            updateEducationField={(id, field, value) =>
              updateEntry(setEducation, id, field, value)
            }
            removeEducation={(id) =>
              removeEntry(setEducation, id)
            }

            experience={experience}
            addExperience={addExperience}
            updateExperienceField={(id, field, value) =>
              updateEntry(setExperience, id, field, value)
            }
            removeExperience={(id) =>
              removeEntry(setExperience, id)
            }

            skills={skills}
            addSkill={addSkill}
            updateSkillField={(id, field, value) =>
              updateEntry(setSkills, id, field, value)
            }
            removeSkill={(id) =>
              removeEntry(setSkills, id)
            }
          />
        )}

        <CVPreview
          personalInfo={personalInfo}
          education={education}
          experience={experience}
          skills={skills}
        />
      </div>

      <button
      className="edit-submit-button"
        type="button"
        onClick={() => setIsEditing((prev) => !prev)}
      >
        {isEditing ? "Submit CV" : "Edit CV"}
      </button>
    </div>
  );
}

export default App;