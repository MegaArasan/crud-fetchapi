import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams } from "react-router";

export function Edituser() {
  const { id } = useParams();
  const [user, setuser] = useState(null);
  useEffect(() => {
    fetch(`https://6166c53713aa1d00170a6755.mockapi.io/users/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((usr) => setuser(usr));
  }, [id]);
  console.log(user);
  // onlu show update user when data is available
  return user ? <Updateuser user={user} /> : "";
}

function Updateuser({ user }) {
  const { id } = useParams();
  const [name, setname] = useState(user.name);
  const [avatar, setavatar] = useState(user.avatar);
  const [phone_no, setphone_no] = useState(user.phone_no);
  const [address, setaddress] = useState(user.address);
  const [gender, setgender] = useState(user.gender);
  const [email, setemail] = useState(user.email);
  const [job_title, setjob_title] = useState(user.job_title);
  const [company, setcompany] = useState(user.company);
  const history = useHistory();

  const saveuser = () => {
    const updateuser = {
      name: name,
      avatar: avatar,
      phone_no: phone_no,
      address: address,
      gender: gender,
      email: email,
      job_title: job_title,
      company: company,
    };
    fetch(`https://6166c53713aa1d00170a6755.mockapi.io/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(updateuser),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/users"));
  };

  return (
    <div className="adduser">
      <TextField
        placeholder="Enter your name"
        variant="standard"
        label="Name"
        value={name}
        fullWidth
        required
        onChange={(event) => setname(event.target.value)}
      />
      <TextField
        placeholder="Enter your avatar url"
        variant="standard"
        label="Avatar url"
        value={avatar}
        fullWidth
        required
        onChange={(event) => setavatar(event.target.value)}
      />
      <TextField
        placeholder="enter your phone no"
        variant="standard"
        label="Phone No"
        value={phone_no}
        fullWidth
        required
        onChange={(event) => setphone_no(event.target.value)}
      />
      <TextField
        placeholder="Enter your address"
        variant="standard"
        label="Address"
        value={address}
        fullWidth
        required
        onChange={(event) => setaddress(event.target.value)}
      />
      <TextField
        placeholder="Enter your gender"
        variant="standard"
        label="Gender"
        value={gender}
        fullWidth
        required
        onChange={(event) => setgender(event.target.value)}
      />
      <TextField
        placeholder="Enter your email"
        variant="standard"
        label="Email"
        value={email}
        fullWidth
        required
        onChange={(event) => setemail(event.target.value)}
      />
      <TextField
        placeholder="Enter yourjob name"
        variant="standard"
        label="Job Name"
        value={job_title}
        fullWidth
        required
        onChange={(event) => setjob_title(event.target.value)}
      />
      <TextField
        placeholder="Enter your company name"
        variant="standard"
        label="Company Name"
        value={company}
        fullWidth
        required
        onChange={(event) => setcompany(event.target.value)}
      />

      <Button
        variant="contained"
        color="success"
        sx={{ margin: "10px" }}
        onClick={saveuser}
      >
        Save user
      </Button>
    </div>
  );
}
