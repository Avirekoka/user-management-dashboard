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
    id: userId,
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    setUserDetails({
      id: userId,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    });
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
              name="first_name"
              variant="outlined"
              label="First Name"
              fullWidth
              value={userDetails.first_name}
              onChange={(e) =>
                setUserDetails({ ...userDetails, first_name: e.target.value })
              }
            />
            <TextField
              name="last_lame"
              variant="outlined"
              label="last_name"
              fullWidth
              value={userDetails.last_name}
              onChange={(e) =>
                setUserDetails({ ...userDetails, last_name: e.target.value })
              }
            />
            <TextField
              name="email"
              variant="outlined"
              label="Email"
              fullWidth
              type="email"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
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
