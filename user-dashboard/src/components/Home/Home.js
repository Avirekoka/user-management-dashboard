import React, { useEffect } from "react";
import { Container, Grow, Grid } from "@mui/material";
import useStyles from "./style";
import Usertable from "../Usertable/Usertable";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../actions/user";
const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //Get all users
  useEffect(() => {
    dispatch(getAllUsers(1));
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainCotainer}
          container
          spacing={3}
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Grid item xs={12} sm={12}>
            <Usertable />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
