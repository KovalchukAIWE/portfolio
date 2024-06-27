import Project from "../Project/Project";
import ProjectOne from "../../images/project-01.jpg";
import ProjectTwo from "../../images/project-02.jpg";
import ProjectThree from "../../images/project-03.jpg";
import styles from "./Projects.module.scss";

const projectData = [
  { imageSrc: ProjectOne, altText: "Project One Overview" },
  { imageSrc: ProjectTwo, altText: "Project Two Overview" },
  { imageSrc: ProjectThree, altText: "Project Three Overview" },
];

const Projects = () => {
  return (
    <div className={styles.projects}>
      {projectData.map((project, index) => (
        <Project
          key={index}
          imageSrc={project.imageSrc}
          altText={project.altText}
        />
      ))}
    </div>
  );
};

export default Projects;
