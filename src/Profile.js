import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

export function Profile() {
  const { id } = useParams();
  const history = useHistory();
  const [user, setuser] = useState([]);
  useEffect(() => {
    fetch(`https://6166c53713aa1d00170a6755.mockapi.io/users/${id}`)
      .then((data) => data.json())
      .then((usr) => setuser(usr));
  }, [id]);
  return (
    <section className="userinfo">
      <div className="userdetails">
        <div className="avatar">
          <img src={user.avatar} alt={user.name} className="profileimg" />
        </div>
        <div style={{ width: "600px", marginLeft: "120px" }}>
          <div style={{display:"flex",alignItems:"center"}}>
          <Typography>
            <b>NAME:</b>
            {user.name}
          </Typography>
           <IconButton
            onClick={() => history.push("/users/edit/" + id)}
            className="movie-show-button"
            color="secondary"
            aria-label="edit movie"
            style={{ marginLeft: "20px" }}
          >
            <EditIcon />
          </IconButton>
         </div>
          <Typography>
            <b>USER-ID:</b>
            {user.id}
          </Typography>
          <Typography>
            <b>GENDER:</b>
            {user.gender}
          </Typography>
          <Typography>
            <b>ADDRESS:</b>
            {user.address}
          </Typography>
          <Typography>
            <b>PHONE-NO:</b>
            {user.phone_no}
          </Typography>
          <Typography>
            <b>EMAIL:</b>
            {user.email}
          </Typography>
          <Typography>
            <b>JOB:</b>
            {user.job_title}
          </Typography>
          <Typography>
            <b>COMPANY:</b>
            {user.company}
          </Typography>
        </div>
        <div style={{ width: "600px" }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => history.goBack()}
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </div>
      </div>
    </section>
  );
}
