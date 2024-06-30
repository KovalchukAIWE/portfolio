import Project from "../Project/Project";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProjectOne from "../../images/project-01.jpg";
import ProjectTwo from "../../images/project-02.jpg";
import ProjectThree from "../../images/project-03.jpg";
import ProjectFour from "../../images/project-04.jpg";
import ProjectFive from "../../images/project-05.jpg";
import ProjectSix from "../../images/project-06.png";
import ProjectSeven from "../../images/project-07.jpg";
import ProjectEight from "../../images/project-08.jpg";
import styles from "./Projects.module.scss";

const projectData = [
  { imageSrc: ProjectOne, altText: "Project One Overview" },
  { imageSrc: ProjectTwo, altText: "Project Two Overview" },
  { imageSrc: ProjectThree, altText: "Project Three Overview" },
  { imageSrc: ProjectFour, altText: "Project Four Overview" },
  { imageSrc: ProjectFive, altText: "Project Four Overview" },
  { imageSrc: ProjectSix, altText: "Project Four Overview" },
  { imageSrc: ProjectSeven, altText: "Project Four Overview" },
  { imageSrc: ProjectEight, altText: "Project Four Overview" },
];

const Projects = () => {
  return (
    <div className={styles.projects}>
      <Splide
        className={styles.splide}
        options={{
          type: "loop",
          rewind: true,
          speed: 900,
          perMove: 1,
          perPage: 6,
          autoplay: true,
          width: "100%",
          arrows: false,
          pagination: false,
          focus: "center",
          gap: 15,
          breakpoints: {
            1399: {
              perPage: 4,
            },
            991: {
              perPage: 3,
            },
            767: {
              perPage: 2,
            },
            575: {
              perPage: 1.5,
            },
          },
        }}
        aria-label="React Splide Example"
      >
        {projectData.map((project, index) => (
          <SplideSlide key={index}>
            <Project imageSrc={project.imageSrc} altText={project.altText} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Projects;
