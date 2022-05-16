import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../actions/user";

const Updateuser = ({ open, setOpen, userId }) => {
  const user = useSelector((state) =>
    userId ? state.users.find((user) => user.id === userId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const [userDetails, setUserDetails] = useState({
    name: "",
    job: "",
  });

  useEffect(() => {
    setUserDetails({ name: user.first_name, job: "" });
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(userId, userDetails));
    setOpen(false);
  };
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle textAlign="center" variant="h4">
          Edit User
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleUpdate}
            autoComplete="off"
            className={classes.form}
          >
            <TextField
              name="name"
              variant="outlined"
              label="User Name"
              fullWidth
              value={userDetails.name}
              onChange={(e) =>
                setUserDetails({ ...userDetails, name: e.target.value })
              }
            />
            <TextField
              name="job"
              variant="outlined"
              label="Job"
              fullWidth
              value={userDetails.job}
              onChange={(e) =>
                setUserDetails({ ...userDetails, job: e.target.value })
              }
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              Update
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Updateuser;
