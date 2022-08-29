import "./App.css";
import Card from "./Card";

function App() {
  const data = [
    {
      name: "Shapovalov Alexandru",
      skillBrainPosition: "Mentor",
      actualJob: "Frontend Developer",
      shortDesctioption:
        "Front-End Developer and Tech enthusiast with 5+ years of experience building Web and cross-platform solutions in diverse areas of industry. As a SkillBrain mentor I can share the experience, I've gained over these years and my love for programming with others.",
      socialMediaLiks: {
        gitHub: "https://github.com/shapovalov-sasha",
        linkedIn:
          "https://www.linkedin.com/in/%C8%99apovalov-alexandru-762b3b140/",
      },
      avatar: require("./images/sapovalov_alexandru.jpg"),
    },
    {
      name: "Robert Pirvan",
      skillBrainPosition: "Future Junior Developer",
      actualJob: "Engineer",
      shortDesctioption:
        "Junior Front-End Developer and Tech enthusiast with little experience building Web and cross-platform solutions in diverse areas of industry. Tech never stay the same. Human evolve non-stop witch mean tech time fly and continue to impress. Passionate about developing - the best reward I find doing my job. No pain - No Gain. I love chess and football.",

      socialMediaLiks: {
        gitHub: "https://github.com/pirvanrobert",
        linkedIn: "https://www.linkedin.com/in/pirvan-robert-07655a1b0/",
      },
      avatar: require("./images/Robert.jpg"),
    },
    {
      name: "Eladie Bumbar",
      skillBrainPosition: "Student",
      actualJob: "Frontend Developer",
      shortDesctioption:
        "Junior Front-End Developer enthusiast, seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.",
      socialMediaLiks: {
        gitHub: "https://github.com/Eladie",
        linkedIn: "https://www.linkedin.com/in/eladie-bumbar-b53857b6/",
      },
      avatar: require("./images/Eladie.jpg"),
    },
    {
      name: "Edu Adrian-Florentin",
      skillBrainPosition: "Future Junior Front-End Developer",
      actualJob: "Commerical Worker",
      shortDesctioption:
        "I am not one of the best Junior Front-End developers from the world, I’m not even from Romania, not even from my class, still I will become one of the best programmers soon, maybe not today, maybe not tomorrow, but in a couple of years, you are going to know my name!",
      socialMediaLiks: {
        gitHub: "https://github.com/Adrian-Edu",
        linkedIn: "https://www.linkedin.com/in/adrian-edu/",
      },
      avatar: require("./images/adrian edu.jpg"),
    },
    {
      name: "Homoki Denis",
      skillBrainPosition: "Student",
      actualJob: "Frontend Developer",
      shortDesctioption:
        "Hardworking and ambitious individual with a great passion for Front-End technologies. I've gained experience and feel much more comfortable with the information I've learned and will want to put it to good use.",
      socialMediaLiks: {
        gitHub: "https://github.com/homoki-denis",
        linkedIn: "https://www.linkedin.com/in/denis-homoki-941180223/",
      },
      avatar: require("./images/homoki_denis.jpg"),
    },
    {
      name: "Daniel Neagoe",
      skillBrainPosition: "Front-End Developer Student",
      actualJob: "Dispatcher",
      shortDesctioption:
        "A fast learner, open-minded and patient individual who recently discovered his potential and passion for programming, problem solving and logical thinking and wants to make a debut in the professional world of web development ",
      socialMediaLiks: {
        gitHub: "https://github.com/danielneagoe",
        linkedIn: "https://www.linkedin.com/in/daniel-neagoe-601709223/",
      },
      avatar: require("./images/daniel_neagoe.jpg"),
    },
   {  name: "Laura Popa",
      skillBrainPosition: "Front-End Developer Student",
      actualJob: "-",
      shortDesctioption:
        "I am an enthusiastic Front-End Developer at the beginning of my professional journey. I am always looking to improve my skills, to learn new technologies and acquire on-the-job experience. I am able to effectively work independently, as well as collaborate as part of a team.",
      socialMediaLiks: {
        gitHub: "https://github.com/LauraPopa27",
        linkedIn: "https://www.linkedin.com/in/laura-ioana-popa-a6336518b/",
      },
      avatar: require("./images/laura-popa.jpg"),
    },
    {
      name: "Botezatu Ionut-Razvan",
      skillBrainPosition: "Student",
      actualJob: "Frontend Developer",
      shortDesctioption:
        "I am a self-driven front-end developer and have been in the industry for more than one year. I have a keen eye for detail and for the work I do. In addition, I have also finished an SkillBrain Front-End Web Development Training Course in 2022. I am a person who is able to control a situation rather than have a situation control me. (...)",
      socialMediaLiks: {
        gitHub: "https://github.com/iBRazvan",
        linkedIn:
          "https://www.linkedin.com/in/ionuț-răzvan-botezatu6199/",
      },
      avatar: require("./images/bri-modified.png"),
    },
  ];

  return (
    <div className="app-container">
      <h1>Andromeda & Sirius</h1>
      <div className="content-container">
        {data.map((item) => (
          <Card
            name={item.name}
            skillBrainPosition={item.skillBrainPosition}
            actualJob={item.actualJob}
            shortDesctioption={item.shortDesctioption}
            socialMediaLiks={item.socialMediaLiks}
            gitHub={item.gitHub}
            linkedIn={item.linkedIn}
            avatar={item.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
