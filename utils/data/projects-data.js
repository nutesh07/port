import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'OTT Platform',
        description: " Engineered a comprehensive OTT platform utilizing the MERN stack, ensuring a seamless integration between the front-end and back-end. Implemented secure user authentication and authorization using JWT, ensuring secure access and data privacy for platform users. Developed features for video streaming, content uploading, and real-time data synchronization, enhancing the user experience and platform performance",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'MERN Stack'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Flight Booking Website',
        description: ' Developed a flight booking website using PHP for server-side logic, JavaScript for client-side interactivity, HTML and CSS for front-end design, and MySQL for database management. Booking System: Implemented a comprehensive booking system that allows users to search for flights, view availability, and make reservations, ensuring a smooth and user-friendly booking experience.',
        tools: ['Javasvript','PHP','HTML','mysql'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: ' Automation Website Login',
        description: ' Automated Login Script: Developed a Python script using Selenium to automate the login process on the Twitter website, enhancing efficiency and reducing manual intervention.Web Scraping and Interaction: Utilized Selenium for web scraping and interaction with web elements, ensuring accurate and reliable automation of form filling and submission tasks.',
        tools: ['Selenium','python'],
        code: '',
        role: 'Auomation',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: ' Doctor Search Website',
        description: "Dynamic Search Functionality: Developed a doctor search website utilizing PHP and MongoDB to implement dynamic search capabilities, enabling users to efficiently find doctors based on specialty, location, and availability. Interactive User Interface: Created an interactive and user-friendly interface with JavaScript, enhancing user experience through real-time search results and responsive design elements.",
        tools: ['Javascript','Mongodb','PHP','HTML'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


