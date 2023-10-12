import React from "react";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteYoutube, getUser } from "../../actions/user";
import { Typography, Button, Card, CardContent, CardMedia } from "@mui/material";
import "./YoutubeCard.css";

const YoutubeCard = ({
  url = "https://youtube.com/6packprogrammer",
  title = "Title Here",
  image,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteYoutube(id));
    dispatch(getUser());
  };

  return (
    <Card className="youtubeCard">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <CardMedia
          component="img"
          alt="Video"
          height="200"
          image={image}
        />
     
      </a>
      <CardContent>
          <Typography variant="h5">{title}</Typography>
        </CardContent>
      {isAdmin && (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => deleteHandler(id)}
          style={{
            margin: "16px auto",
            display: "block",
          }}
        >
          <FaTrash style={{ marginRight: "8px" }} />
          Delete
        </Button>
      )}
    </Card>
  );
};

export default YoutubeCard;
