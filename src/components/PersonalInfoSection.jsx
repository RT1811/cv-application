function PersonalInfoSection({ personalInfo, setPersonalInfo }) {
    function handlePersonalInfoChange(e) {
    const { name, value } = e.target;

    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <section className="personal-info-section">
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
    </section>
  );
}

export default PersonalInfoSection;