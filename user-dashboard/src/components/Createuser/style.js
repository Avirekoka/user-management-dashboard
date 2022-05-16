import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
