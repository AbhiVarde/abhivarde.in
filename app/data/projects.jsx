import Tracker from "../resources/images/project/tracker.png";
import Trello from "../resources/images/project/trello.png";
// import SQL from "../resources/images/project/sql.png";
import Librarium from "../resources/images/project/librarium.png";
import Git from "../resources/images/project/git.png";
import Course from "../resources/images/project/course.png";
import jukebox from "../resources/images/project/jukebox.png";
import IdeaTracker from "../resources/images/project/idea.png";

const projects = [
  {
    image: IdeaTracker,
    title: "Idea Tracker",
    description:
      "A React + Appwrite app to save, search, and manage side project ideas. Features auth, real-time updates, and a clean UI with Tailwind & Framer Motion.",
    url: "https://idea-tracker.appwrite.network/",
    githubLink: "https://github.com/AbhiVarde/Idea-tracker",
  },
  {
    image: Librarium,
    title: "Librarium",
    description:
      "A full-stack solution with Google and Discord login, powerful search, and complete CRUD operations for seamless book management.",
    githubLink: "https://github.com/AbhiVarde/Librarium",
  },
  {
    image: Tracker,
    title: "SpaceX Launch Tracker",
    description:
      "A full-stack web application for tracking SpaceX launches, offering real-time updates on launch information and status.",
    githubLink: "https://github.com/AbhiVarde/SpaceX-Launch-Tracker",
  },
  {
    image: Trello,
    title: "Trello Clone",
    description:
      "Facilitating collaborative task management in real-time, enabling users to create boards, lists, and cards for efficient organization and teamwork.",
    url: "https://trello-bice.vercel.app/",
    githubLink: "https://github.com/AbhiVarde/Trello-Clone",
  },
  // {
  //   image: SQL,
  //   title: "SQL AI",
  //   description:
  //     "Creating a web app allowing users to input SQL queries, generating responses using ChatGPT plugin.",
  //   url: "https://sqlai.vercel.app/",
  //   githubLink: "https://github.com/AbhiVarde/SQL-AI",
  // },
  {
    image: jukebox,
    title: "JukeBox",
    description:
      "JukeBox is a web application facilitating Spotify login, search, and playback functionality for users.",
    url: "https://jukebox-xi.vercel.app/",
    githubLink: "https://github.com/AbhiVarde/Jukebox",
  },
  {
    image: Git,
    title: "Git Wars",
    description:
      "An interactive platform enabling users to enhance Git proficiency through task completion, aiming for mastery in version control.",
    url: "https://gitwars.vercel.app/",
    githubLink: "https://github.com/AbhiVarde/Git-Wars",
  },
  {
    image: Course,
    title: "CourseExpert",
    description:
      "An online platform enables users to log in/out, add courses for sale, and purchase available courses.",
    url: "https://courseexpert.vercel.app/",
    githubLink: "https://github.com/AbhiVarde/CourseExpert",
  },
];

export default projects;
