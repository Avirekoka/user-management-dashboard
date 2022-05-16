import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    justifyContent: "center",
    height: "5rem",
    padding: "0 1rem",
    marginBottom: "1rem",
    width: "100vw",
  },
  heading: {
    color: "black",
    fontWeight: "bold",
    textDecoration: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "5rem",
    width: "1000px",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    top: "2rem",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    bottom: "1rem",
    gap: "1rem",
  },
}));
