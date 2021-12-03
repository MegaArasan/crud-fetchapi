import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";

export function Users({
  id,
  avatar,
  name,
  job_title,
  phone_no,
  editButton,
  deleteButton,
}) {
  const history = useHistory();
  return (
    <Card sx={{ width: 280, margin: "15px" }}>
      <CardMedia
        component="img"
        height="200"
        image={avatar}
        alt={name}
        sx={{ borderRadius: "0" }}
      />
      <CardActions>
        <div className="details">
          <Typography variant="h6">
            <b>{name}</b>
          </Typography>
          <IconButton
            onClick={() => {
              console.log(id);
              history.push("/user/" + id);
            }}
            className="movie-show-button"
            color="primary"
            aria-label="more info"
          >
            <InfoIcon />
          </IconButton>
          <Typography variant="h6" sx={{ marginLeft: "auto" }}>
            {id}
          </Typography>
        </div>
      </CardActions>
      <Typography>
        <b>JOB:</b>
        {job_title}
      </Typography>
      <Typography>
        <b>PHONE:</b>
        {phone_no}
      </Typography>
      <div style={{ width: "100%", padding: "6px" }}>
        {editButton}
        {deleteButton}
      </div>
    </Card>
  );
}
