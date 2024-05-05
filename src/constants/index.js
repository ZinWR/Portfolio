import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    docketeer,
    cubegame,
    techtango,
    twitch,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";
  
export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
];
  
const services = [
    {
      title: "Software Development Engineer",
      icon: web,
    },
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
];
  
const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
];
  
const experiences = [
    {
      title: "Software Development Engineer",
      company_name: "Docketeer",
      icon: docketeer,
      iconBg: "#383E56",
      date: "2023 - Present",
      about: "Docker container & Kubernetes monitoring tool serves over 9k users - offers insightful metrics to identify performance bottlenecks.",
      link: "https://docketeer.io/",
      stack: ["Grype", "MongoDB", "PostgreSQL", "Prometheus", "Grafana", "Redux-Toolkit", "Rest APIs", "TypeScript", "MaterialUI", "Jest"],
      points: [
        `Led a team of engineers to enhance Docker image security measures through strategic integration of Grype, effectively reducing dependency risks and fortifying security measures, resulting in a 25% decrease in potential security threats.`,
        "Pioneered user scan history management system with MongoDB schema to facilitate horizontal scaling, improve load balancing, and alleviate server-side rendering while complementing the existing PostgreSQL database.",
        "Modified Prometheus and Grafana configurations to precisely extract crucial Docker and Kubernetes metrics, eliminating irrelevant metrics unrelated to microservices, and improving overall performance by 44%.",
        "Centralized state management with Redux Toolkit in conjunction with Redux Thunk middleware for async actions to increase the application's scalability and efficiency by minimizing unnecessary API requests, resulting in a more responsive and efficient user experience.",
        "Optimized Rest APIs by cleaning up existing endpoints built prematurely to be more intuitive, uniform, and concise by reducing 40 - 50 lines of code per API request.",
        "Migrated approximately 60% of legacy JavaScript codes, comprising over 6,000 lines of code, to TypeScript while refactoring loose types such as 'any' to more explicit and restrictive type definitions, improving code maintainability and catching potential runtime errors during compilation.",
        "Completely redesigned 90% of the user interface design with contemporary UI libraries such as MaterialUI with reusable components to complement the product's main theme.",
        "Updated 6 outdated and implemented new unit Jest tests for newly developed features, leveraging Jest's assertion library and mock functions to prevent regression and fortify the test suite's robustness."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "CubeGame - Open Source",
      icon: cubegame,
      iconBg: "#E6DEDD",
      date: "2024 - Present",
      about: "An immersive 3D ice breaker game for onboarding engineers.",
      link: "https://github.com/ZinWR/CubeGame",
      stack: ["ThreeJS", "WebGL", "Vanilla-JavaScript", "jQuery", "Webpack"],
      points: [
        "Independently built an immersive ice-breaker 3D web application game with Three.js and WebGL, dynamically updating object positions based on user input while calculating 3D coordinates for their velocity, gravity fall, and unit collision.",
        "Leveraged the versatility of Vanilla JavaScript and jQuery to engineer an interactive leaderboard system with efficient sorting, searching, and event-handling logic, leading to a 50% boost in user satisfaction levels.",
        "Configured Webpack for future scale, maintainability, and faster load times by writing configuration to utilize hot module reloading, ES6+ Transpilation for developer packages, and using minification and uglification features to decrease bundled file size.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "TechTango - Open Source",
      icon: techtango,
      iconBg: "#383E56",
      date: "2024 - Present",
      about: "An engineering team social media app to connect new peers to old peers, increasing team dynamics, teamwork, and productivity.",
      stack: ["Bcrypt-encryption"],
      points: [
        "Implemented Bcrypt encryption with authentication and authorization systems, resulting in a 20% decrease in security breaches.",
      ],
    },
    {
      title: "Content Creator | Partner",
      company_name: "Twitch Inc.",
      icon: twitch,
      iconBg: "#E6DEDD",
      date: "2021 - 2023",
      stack: ["Photoshop", "Adobe-Premiere-Pro"],
      points: [
        "Managed a team of 19 moderators, overseeing chat moderation, channel security, and audience engagement initiatives, resulting in a 30% decrease in chat toxicity and a 15% increase in viewer satisfaction scores.",
        "Crafted and refined video content utilizing advanced Photoshop and Adobe Premiere Pro techniques to ensure coherent integration of visuals and audio components, optimizing for aesthetic appeal and technical precision.",
        "Applied intricate editing methodologies within Adobe Premiere Pro to precisely synchronize audio tracks, adjust color grading, and achieve optimal visual coherence in the video content.",
        "Achieved Partner status with an average concurrent viewership of 500+ viewers per stream, resulting in a total watch time of over 10,000 hours and a follower growth rate of 160% within the first four months.",
      ],
    },
];
  
const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];
  
const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
];
  
export { services, technologies, experiences, testimonials, projects };