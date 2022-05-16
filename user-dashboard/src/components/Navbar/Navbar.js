import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import useStyles from "./style";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/constants";
import { toast } from "react-toastify";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    toast.success("Logout successfully");
  };
  return (
    <AppBar position="static" color="primary" className={classes.appBar}>
      <Box className={classes.brandContainer}>
        <Typography
          variant="h4"
          align="center"
          className={classes.heading}
          component={Link}
          to="/"
        >
          DASHBOARD
        </Typography>
      </Box>
      <Toolbar className={classes.toolbar}>
        {!isLoggedIn ? (
          <div className={classes.buttons}>
            <Button
              className={classes.logout}
              variant="contained"
              color="secondary"
              component={Link}
              to="/login"
            >
              Login
            </Button>

            <Button
              className={classes.logout}
              variant="contained"
              color="success"
              component={Link}
              to="/login"
            >
              Create User
            </Button>
          </div>
        ) : (
          <div className={classes.buttons}>
            <Button
              className={classes.logout}
              variant="contained"
              color="secondary"
              component={Link}
              to="/"
              onClick={() => handleLogout()}
            >
              Logout
            </Button>

            <Button
              className={classes.logout}
              variant="contained"
              color="success"
              component={Link}
              to="/createuser"
            >
              Create User
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
