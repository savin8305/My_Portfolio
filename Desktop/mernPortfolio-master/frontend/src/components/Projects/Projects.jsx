import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { deleteProject, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";
export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <div>
      <a href={url} className="projectCard" target="_blank">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40, 40, 40, 0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </div>
  );
};

function Projects({ projects }) {
  const [activeSections, setActiveSections] = useState(
    projects.map(() => "#about")
  );
  const handleButtonClick = (index, targetSection) => {
    const updatedActiveSections = [...activeSections];
    updatedActiveSections[index] = targetSection;
    setActiveSections(updatedActiveSections);
  };

  return (
    <div className="container5">
     
      {projects.map((card, index) => (
        <div
          className={`card`}
          data-state={activeSections[index]}
          key={card.id}
        >
          <div className="card-header">
            <div
              style={{
                backgroundImage: `url('${card.image.url}')`,
              }}
              className="card-cover"
            ></div>
            <h1 className="card-fullname">{card.title}</h1>
            <h2 className="card-jobtitle">{card.description}</h2>
          </div>
          <div className="card-main">
            <div
              className={`card-section ${
                activeSections[index] === "#about" ? "is-active" : ""
              }`}
              id="about"
            >
              <div className="card-content">
                <div className="card-subtitle">Description</div>
                <div className="card-desc-container">
                  <p className="card-desc">{card.description}</p>
                </div>
              </div>
            </div>
            <div
              className={`card-section ${
                activeSections[index] === "#experience" ? "is-active" : ""
              }`}
              id="experience"
            >
              <div className="card-content">
                <div className="card-subtitle">Tech Stack</div>
                <div className="card-tech-stack">{card.techStack}</div>
              </div>
            </div>
            <div
              className={`card-section ${
                activeSections[index] === "#contact" ? "is-active" : ""
              }`}
              id="contact"
            >
              <div className="card-content">
                <div className="card-subtitle">CONTACT</div>
                <div className="card-contact-wrapper">
                  <div className="card-contact">
                    {card.url && (
                      <a
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-button"
                      >
                        Live
                      </a>
                    )}
                    {card.url && card.url && (
                      <span className="button-separator"></span>
                    )}
                    {card.url && (
                      <a
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-button"
                      >
                        Github
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-buttons">
              <button
                onClick={() => handleButtonClick(index, "#about")}
                className={
                  activeSections[index] === "#about" ? "is-active" : ""
                }
                data-section="#about"
              >
                ABOUT
              </button>
              <button
                onClick={() => handleButtonClick(index, "#experience")}
                className={
                  activeSections[index] === "#experience" ? "is-active" : ""
                }
                data-section="#experience"
              >
                Tech Stack
              </button>
              <button
                onClick={() => handleButtonClick(index, "#contact")}
                className={
                  activeSections[index] === "#contact" ? "is-active" : ""
                }
                data-section="#contact"
              >
                Link
              </button>
            </div>
          </div>
          {/* Add the ProjectCard component here */}
        </div>
      ))}
    </div>
  );
}

export default Projects;
