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
    docker,
    docketeer,
    cubegame,
    techtango,
    twitch,
    nextprompt,
    nextdraw,
    ai,
    threejs,
    nextjs,
    postgresql,
    mui,
    Alex,
    Andy,
    Nick
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "NextJS",
      icon: nextjs,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "PostgreSQL",
      icon: postgresql,
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
      name: "Docker",
      icon: docker,
    },

    {
      name: "Git",
      icon: git,
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
      stack: ["Bcrypt"],
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
      stack: ["Photoshop", "Premiere-Pro"],
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
        "I thought it was impossible to make a website as beautiful as our product, but Quan proved me wrong.",
      name: "Alexander David",
      designation: "SWE",
      company: "Docketeer",
      image: Alex,
    },
    {
      testimonial:
        "Quan went over and beyond to optimize our product and his debugging skill is superb!",
      name: "Andy White",
      designation: "SWE",
      company: "Docketeer",
      image: Andy,
    },
    {
      testimonial:
        "Quan always leads our Code Reviews and he would spend extra time to catch me up to speed and explain codes in the most detailed way as possible.",
      name: "Nick Kravchuk",
      designation: "SWE",
      company: "Docketeer",
      image: Nick,
    },
    {
      testimonial:
        "I feel very accepted and even though his stream is filled with pride, he is still humble enough to accept viewers feedback that in turn makes other watcher enjoy talking more.",
      name: "HoaqinRW",
      designation: "Community Admin",
      company: "Twitch",
      image: twitch,
    },
    {
      testimonial:
        "As a player feel that he teaches me many different things. He makes me laugh and I enjoy the vibe that he brings during every stream.",
      name: "kokusyi",
      designation: "Community Admin",
      company: "Twitch",
      image: twitch,
    },
    {
      testimonial:
        "His dedication to streaming and uploading to YouTube is admirable",
      name: "MegaKnight69_",
      designation: "Community Admin",
      company: "Twitch",
      image: twitch,
    },
];
  
const projects = [
    {
      name: "NextPrompt",
      description:
        "An application manager that leverages Next-auth and Google Oauth to save your personal AI prompts for future usage so you don't have to retype them!.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: nextprompt,
      source_code_link: "https://github.com/ZinWR/next-prompt",
    },
    {
      name: "NextDraw",
      description:
        "Web application that enables users to brainstorm and draw ideas on a simple canvas.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "socketio",
          color: "pink-text-gradient",
        },
      ],
      image: nextdraw,
      source_code_link: "https://github.com/ZinWR/NextDraw",
    },
    {
      name: "AI-Powered 3D Ecommerce Website",
      description:
        "A 3D ECommerce Website that allows users to customize their shirt with their own styles and pictures (or even AI prompts).",
      tags: [
        {
          name: "react-three-fiber",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "openai",
          color: "pink-text-gradient",
        },
      ],
      image: ai,
      source_code_link: "https://github.com/ZinWR/3D-Commerce-AI",
    },
];
  
export { services, technologies, experiences, testimonials, projects };