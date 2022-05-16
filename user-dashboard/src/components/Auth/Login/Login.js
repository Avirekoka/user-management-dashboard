import React, { useState } from "react";
import { Paper, TextField, Button, Typography } from "@mui/material";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { login } from "../../../actions/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const [authCredentials, setAuthCredentials] = useState({
    email: "",
    password: "",
  });

  const handleAuth = (e) => {
    e.preventDefault();
    dispatch(login(authCredentials, navigate));
    setAuthCredentials({
      email: "",
      password: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <Typography variant="h4" textAlign="center" m={2}>
        Login
      </Typography>
      <form autoComplete="off" className={classes.form} onSubmit={handleAuth}>
        <TextField
          name="email"
          variant="outlined"
          label="Email"
          fullWidth
          type="email"
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
          Login
        </Button>

        <div className={classes.account}>
          <Typography textAlign="center">Don't have an account ? </Typography>
          <Button component={Link} to="/register">
            Register Here
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Login;
