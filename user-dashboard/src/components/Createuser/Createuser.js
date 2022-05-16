import React, { useState } from "react";
import { Paper, TextField, Button, Typography } from "@mui/material";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { createNewUser } from "../../actions/user";

const Createpost = () => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewUser(userDetails));
    setUserDetails({ first_name: "", last_name: "", email: "" });
  };
  return (
    <Paper className={classes.paper}>
      <Typography textAlign="center" variant="h4" m={2}>
        Create User
      </Typography>
      <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
        <TextField
          name="first_name"
          variant="outlined"
          label="First Name"
          fullWidth
          value={userDetails.first_name}
          onChange={(e) =>
            setUserDetails({ ...userDetails, first_name: e.target.value })
          }
          required
        />
        <TextField
          name="last_name"
          variant="outlined"
          label="Last Name"
          fullWidth
          value={userDetails.last_name}
          onChange={(e) =>
            setUserDetails({ ...userDetails, last_name: e.target.value })
          }
          required
        />
        <TextField
          name="email"
          variant="outlined"
          label="email"
          type="email"
          fullWidth
          value={userDetails.email}
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
          required
        />

        <Button
          className={classes.buttonSubmit}
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Createpost;
