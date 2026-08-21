import { useState } from "react";
import "./App.css";

import CVForm from "./components/CVForm.jsx";
import CVPreview from "./components/CVPreview.jsx";
import EducationEntry from "./components/EducationEntry.jsx";

function App() {
  const[personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const[education, setEducation] = useState([]);
  const[experience,  setExperience] = useState([]);
  const[skills, setSkills] = useState([]);

  function addEducation() {
    const newEntry = { id: crypto.randomUUID(), school: "", degree: "", year: "" };
    setEducation((prev) => [...prev, newEntry]);
  }

  function updateEducationField(id, field, value) {
    setEducation((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  }

  function removeEducation(id) {
    setEducation((prev) => prev.filter((entry) => entry.id !== id));
  }
  
  return (
    <div className="app">
      <h1>CV Application</h1>

      <div className="app-layout">
        <CVForm 
          personalInfo={personalInfo} 
          setPersonalInfo={setPersonalInfo}
          education={education}
          addEducation={addEducation}
          updateEducationField={updateEducationField}
          removeEducation={removeEducation} 
        />
        <CVPreview personalInfo={personalInfo} education={education} />
      </div>
    </div>
  );
}

export default App;