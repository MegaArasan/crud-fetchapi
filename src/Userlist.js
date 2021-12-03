import { Users } from "./Users.js";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router-dom";

export function Userlist() {
  const history = useHistory();
  const [users, setusers] = useState([]);
  const getusers = () => {
    fetch(`https://6166c53713aa1d00170a6755.mockapi.io/users`)
      .then((data) => data.json())
      .then((usr) => setusers(usr));
  };
  useEffect(getusers, []);
  const deleteuser = (id) => {
    fetch(`https://6166c53713aa1d00170a6755.mockapi.io/users/${id}`, {
      method: "DELETE",
    }).then(() => getusers());
  };
  return (
    <section className="user-list">
      {users.map(({ name, avatar, job_title, phone_no, id }) => (
        <Users
          key={id}
          id={id}
          avatar={avatar}
          name={name}
          job_title={job_title}
          phone_no={phone_no}
          editButton={
            <IconButton
              onClick={() => deleteuser(id)}
              className="movie-show-button"
              color="error"
              aria-label="delete movie"
              style={{ marginLeft: "100px" }}
            >
              <DeleteIcon />
            </IconButton>
          }
          deleteButton={
            <IconButton
              onClick={() => history.push("/users/edit/" + id)}
              className="movie-show-button"
              color="secondary"
              aria-label="edit movie"
              style={{ marginLeft: "20px" }}
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </section>
  );
}
