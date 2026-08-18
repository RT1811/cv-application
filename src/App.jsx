import { use, useState } from "react";
import CVForm from "./components/CVForm.jsx";

function App() {
  const[personalInfo, seetPersonalInfo] = useState({
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
      <CVForm personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
    </div>
  );
}

export default App;