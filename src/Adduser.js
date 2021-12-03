import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function Adduser() {
  const [name, setname] = useState("");
  const [avatar, setavatar] = useState("");
  const [phone_no, setphone_no] = useState("");
  const [address, setaddress] = useState("");
  const [gender, setgender] = useState("");
  const [email, setemail] = useState("");
  const [job_title, setjob_title] = useState("");
  const [company, setcompany] = useState("");
  const history = useHistory();

  const adduser = () => {
    const newuser = {
      name: name,
      avatar: avatar,
      phone_no: phone_no,
      address: address,
      gender: gender,
      email: email,
      job_title: job_title,
      company: company,
    };
    console.log(newuser);
    fetch(`https://6166c53713aa1d00170a6755.mockapi.io/users`, {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/users"));
  };
  return (
    <div className="adduser">
      <TextField
        placeholder="Enter your name"
        variant="standard"
        label="Name"
        fullWidth
        required
        onChange={(event) => setname(event.target.value)}
      />
      <TextField
        placeholder="Enter your avatar url"
        variant="standard"
        label="Avatar url"
        fullWidth
        required
        onChange={(event) => setavatar(event.target.value)}
      />
      <TextField
        placeholder="enter your phone no"
        variant="standard"
        label="Phone No"
        fullWidth
        required
        onChange={(event) => setphone_no(event.target.value)}
      />
      <TextField
        placeholder="Enter your address"
        variant="standard"
        label="Address"
        fullWidth
        required
        onChange={(event) => setaddress(event.target.value)}
      />
      <TextField
        placeholder="Enter your gender"
        variant="standard"
        label="Gender"
        fullWidth
        required
        onChange={(event) => setgender(event.target.value)}
      />
      <TextField
        placeholder="Enter your email"
        variant="standard"
        label="Email"
        fullWidth
        required
        onChange={(event) => setemail(event.target.value)}
      />
      <TextField
        placeholder="Enter yourjob name"
        variant="standard"
        label="Job Name"
        fullWidth
        required
        onChange={(event) => setjob_title(event.target.value)}
      />
      <TextField
        placeholder="Enter your company name"
        variant="standard"
        label="Company Name"
        fullWidth
        required
        onChange={(event) => setcompany(event.target.value)}
      />

      <Button
        variant="contained"
        color="success"
        sx={{ margin: "10px" }}
        onClick={adduser}
      >
        Add User
      </Button>
    </div>
  );
}
