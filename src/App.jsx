import { useState } from "react";
import "./App.css";
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

  console.log({ personalInfo, education, experience, skills });
  
  return (
    <div className="app">
      <h1>CV Application</h1>

      <div className="app-layout">
        <CVForm personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        <CVPreview personalInfo={personalInfo} />
      </div>
    </div>
  );
}

export default App;