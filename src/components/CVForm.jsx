function CVForm({personalInformation, setPersonalInformation}) {
    function handlePersonalInfoChange(e) {
        const { name, value } = e.target;
        setPersonalInformation((prev) => ({...prev, [name]: value}));
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
        </div>
    )
}

export default CVForm;