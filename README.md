# CV Application

A responsive CV builder built with React that allows users to enter their personal information, education, work experience, and skills while viewing a live preview of their CV.

This project was built as part of [The Odin Project](https://www.theodinproject.com/) React curriculum.

## Live Demo

[View the live application](https://cv-application-eight-tau.vercel.app/)

## Features

- Live CV preview while editing
- Add, edit, and remove education entries
- Add, edit, and remove work experience
- Add, edit, and remove skills
- Skill proficiency levels
- Submit mode hides the form and displays the completed CV
- Edit mode restores the form without losing entered data
- Responsive layout for desktop and mobile devices
- Semantic HTML and keyboard-accessible controls
- Accessible focus states and color contrast

## Built With

- React
- JavaScript
- Vite
- HTML
- CSS
- Vercel

## React Concepts Used

This project provided practice with several core React concepts:

- Components
- Props
- State management with `useState`
- Controlled form inputs
- Conditional rendering
- Rendering lists
- Updating arrays and objects immutably
- Component composition
- Lifting state up
- Reusable update and removal functions

## Project Structure

```text
src/
├── components/
│   ├── CVForm.jsx
│   ├── CVPreview.jsx
│   ├── PersonalInfoSection.jsx
│   ├── EducationSection.jsx
│   ├── EducationEntry.jsx
│   ├── ExperienceSection.jsx
│   ├── ExperienceEntry.jsx
│   ├── SkillsSection.jsx
│   └── SkillEntry.jsx
│
├── styles/
│   ├── App.css
│   ├── CVForm.css
│   ├── CVPreview.css
│   └── index.css
│
├── App.jsx
└── main.jsx
```

The application keeps the main CV data in `App.jsx` and passes the relevant state and functions down to child components through props.

## Accessibility

Accessibility was tested manually and with multiple automated tools.

Checks included:

- Keyboard navigation
- Visible focus states
- Color contrast
- Semantic HTML
- Main landmark structure
- Form labels and controls
- Responsive layout

Automated accessibility testing:

- Lighthouse Accessibility: **100**
- axe DevTools: **0 issues**
- WAVE: **0 errors**

## Lighthouse

Production build results:

| Category | Score |
| --- | ---: |
| Performance | 99–100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

## Getting Started

Clone the repository:

```bash
git clone https://github.com/RT1811/cv-application.git
```

Enter the project directory:

```bash
cd cv-application
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## What I Learned

This was my first project focused on building an application with React.

One of the main concepts I practiced was treating the user interface as a representation of application state. Form inputs update state, and React automatically renders the corresponding changes in the CV preview.

I also gained experience breaking a larger component into smaller components based on responsibility. The form was separated into personal information, education, experience, and skills sections while the main application retained ownership of the shared state.

Another improvement made during development was replacing repetitive update and removal functions with reusable functions that operate on different sections of the CV.

The project was also tested for accessibility using Lighthouse, axe DevTools, WAVE, and manual keyboard navigation.

## Future Improvements

Possible future additions include:

- Save CV data using local storage
- Export the finished CV as a PDF
- Additional CV templates
- Customizable colors and typography
- Drag-and-drop section ordering
- More formatting options for experience descriptions

## Author

**Ritwick Thakur**

- GitHub: [@RT1811](https://github.com/RT1811)