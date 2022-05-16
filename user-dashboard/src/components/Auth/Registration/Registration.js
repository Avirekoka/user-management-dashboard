import React, { useState } from "react";
import { Paper, TextField, Button, Typography } from "@mui/material";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { register } from "../../../actions/auth";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const [authCredentials, setAuthCredentials] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleAuth = (e) => {
    e.preventDefault();

    dispatch(register(authCredentials, navigate));
    setAuthCredentials({
      email: "",
      password: "",
      name: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <Typography variant="h4" textAlign="center" m={2}>
        Registration
      </Typography>
      <form autoComplete="off" className={classes.form} onSubmit={handleAuth}>
        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={authCredentials.name}
          required
          onChange={(e) =>
            setAuthCredentials({ ...authCredentials, name: e.target.value })
          }
        />
        <TextField
          name="email"
          variant="outlined"
          label="Email"
          type="email"
          fullWidth
          value={authCredentials.email}
          required
          onChange={(e) =>
            setAuthCredentials({ ...authCredentials, email: e.target.value })
          }
        />
        <TextField
          name="password"
          variant="outlined"
          label="Password"
          type="password"
          fullWidth
          value={authCredentials.password}
          required
          onChange={(e) =>
            setAuthCredentials({
              ...authCredentials,
              password: e.target.value,
            })
          }
        />
        <Button
          className={classes.buttonSubmit}
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Register
        </Button>

        <div className={classes.account}>
          <Typography textAlign="center">Already have an account ? </Typography>
          <Button component={Link} to="/login">
            Login
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Registration;
