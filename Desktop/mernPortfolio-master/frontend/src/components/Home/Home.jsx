import React, { useEffect, useRef } from "react";
import TimeLine from "../TimeLine/TimeLine";
import "./Home.css";
import { Typography } from "@mui/material";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
const Home = ({ timelines, youtubes, skills, projects, about }) => {
  const imageRef = useRef(null);
  return (
    <div className="home">
      <div className="about_right">
        <div className="about_right_profilePic" />
      </div>

      <div className="about_left">
        <h1 className="about_left_head">Hi, I&apos;m {about.name}</h1>
        <p className="about_left_text">{about.description}</p>
        <div className="about_left_socialMedia"></div>
      </div>
      <Typography style={{ textAlign: "center" }} variant="h3">
        TimeLine
      </Typography>

      <TimeLine timelines={timelines} />
      <div className="home">
        <div className="homeSkills">
          <Typography variant="h3">Skills</Typography>
          <div className="homeCubeSkills">
            <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
              <img src={skills.image1.url} alt="Face1" />
            </div>

            <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
              <img src={skills.image2.url} alt="Face2" />
            </div>

            <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
              <img src={skills.image3.url} alt="Face3" />
            </div>

            <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
              <img src={skills.image4.url} alt="Face4" />
            </div>

            <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
              <img src={skills.image5.url} alt="Face5" />
            </div>

            <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
              <img src={skills.image6.url} alt="Face6" />
            </div>
          </div>

        </div>

        <div className="homeYoutube">

          <Typography variant="h3">Tech Experience</Typography>

          <div className="homeYoutubeWrapper">
            {youtubes.map((item) => (
              <YoutubeCard
                image={item.image.url}
                title={item.title}
                url={item.url}
                id={item._id}
                key={item._id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
