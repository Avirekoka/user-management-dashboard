import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  account: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
