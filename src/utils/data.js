export const SKILLS = [
    {
        "title": "Frontend Development",
        "icon": "./assets/images/frontend-icon.png",
        "skills": [
            { "skill": "HTML", "percentage": "95%" },
            { "skill": "CSS3 (sass/scss)", "percentage": "90%" },
            { "skill": "JavaScript", "percentage": "85%" },
            { "skill": "TypeScript", "percentage": "80%" },
            { "skill": "React.js", "percentage": "85%" }
        ]
    },
    {
        "title": "Backend Development",
        "icon": "./assets/images/backend-icon.png",
        "skills": [
            { "skill": "Node.js", "percentage": "85%" },
            { "skill": "Express.js", "percentage": "80%" },
            { "skill": "MySQL", "percentage": "70%" },
            { "skill": "MongoDB", "percentage": "80%" }
        ]
    },
    {
        "title": "UI/UX Design",
        "icon": "./assets/images/uiux-icon.png",
        "skills": [
            { "skill": "Figma", "percentage": "70%" },
            { "skill": "Tailwind", "percentage": "75%" },
            { "skill": "Bootstrap 5", "percentage": "80%" },
            { "skill": "Material-UI", "percentage": "75%" }
        ]
    },
    {
        "title": "Cloud Platforms",
        "icon": "./assets/images/cloud-icon.png",
        "skills": [
            { "skill": "AWS", "percentage": "70%" }
        ]
    },
    {
        "title": "Automation & Testing",
        "icon": "./assets/images/automation-icon.png",
        "skills": [
            { "skill": "Selenium", "percentage": "85%" },
            { "skill": "TagUI", "percentage": "75%" }
        ]
    },
    {
        "title": "Version Control & Developer Tools",
        "icon": "./assets/images/tools-icon.png",
        "skills": [
            { "skill": "Git", "percentage": "80%" },
            { "skill": "VS Code", "percentage": "85%" },
            { "skill": "Visual Studio", "percentage": "75%" },
            { "skill": "React Dev Tools", "percentage": "80%" }
        ]
    }
];


export const WORK_EXPERIENCE = [
    {
        title: "Software Engineer at Niit Limited",
        date: "July 2022 - Present",
        responsibilities: [
            "Developed a MetaData application using React, Node.js, Express.js, and MongoDB to help clients manage, gather, and analyze issues. The application supports various testing types on an education platform, enabling users to log in, register, perform tests, and view results on a dashboard with real-time visualizations and analytics.",
            "Developed the Audio Mapper, an automated system to fetch HTML and SMIL data, store it in the desired database, and map it with audio data (word- or sentence-wise). Designed the web interfaces using React and implemented the backend with Node.js and Express. Integrated BARD API for audio data fetching with robust error-handling mechanisms.",
            "Built an email-sending feature using NodeMailer via an SMTP server, along with token-based email authentication.",
            "Developed file-handling features with Express.js middleware and multer for efficient uploads and validation.",
            "Applied SOLID principles and DRY design patterns to create reusable custom hooks, improving code quality and efficiency."
        ]
    },
    {
        title: "Teaching Assistant at Coding Ninjas",
        date: "November 2020 - March 2021",
        responsibilities: [
            "Assisted in guiding students through web development concepts, focusing on HTML, CSS, and JavaScript.",
            "Helped in organizing and conducting practical lab sessions to reinforce theoretical lessons.",
            "Provided one-on-one support to students during coding exercises, ensuring they understood key programming concepts.",
            "Reviewed and provided feedback on student assignments to enhance learning and improve code quality.",
            "Collaborated with the lead instructor to develop course materials and assessments, ensuring alignment with learning objectives."
        ]
    }

];

export const PROJECTS = [
    {
        "title": "Travel Story",
        "date": "June 2024 – Present",
        "responsibilities": [
            "Built a full-stack web app using Express for smooth REST API operations and React for a user-friendly interface.",
            "Implemented user authentication, allowing users to securely log in and manage their travel stories.",
            "Enabled users to store detailed travel experiences, including locations visited, modes of travel, and images, by implementing Multer for efficient image uploads.",
            "Developed an intuitive calendar feature that enables users to easily view, track, and organize their travel data in a structured and efficient manner."
        ]
    },
    {
        "title": "Notes App",
        "date": "June 2023 – January 2024",
        "responsibilities": [
            "Developed a notes management application using React.js, Node.js, MongoDB, and Tailwind CSS, enabling users to create, edit, and delete notes effortlessly.",
            "Implemented secure user authentication using JSON Web Tokens (JWT), ensuring personalized access and data protection.",
            "Designed a responsive user interface with React.js, enhancing the overall usability and aesthetic appeal of the application.",
            "Leveraged MongoDB for robust data storage, allowing for quick retrieval and seamless synchronization of notes across sessions."
        ]
    },
    {
        "title": "Insta Bot",
        "date": "December 2022 – January 2023",
        "responsibilities": [
            "Developed an automation tool using Selenium that retrieves user-specific Instagram details efficiently.",
            "Implemented functionality to check followers and followings, identifying users who are not following back.",
            "Designed a user-friendly interface with Node.js and Express.js for seamless interactions and data presentation.",
            "Enhanced the bot’s performance through optimized scripting, ensuring rapid data retrieval and analysis."
        ]
    }
];
