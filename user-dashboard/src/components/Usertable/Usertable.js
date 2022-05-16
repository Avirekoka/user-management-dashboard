import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Box,
  CircularProgress,
  TablePagination,
  Divider,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditSharpIcon from "@mui/icons-material/ModeEditSharp";
import Updateuser from "../Updateuser/Updateuser";
import useStyles, { StyledTableCell, StyledTableRow } from "./style";
import { deleteUser, getAllUsers } from "../../actions/user";
import { useNavigate } from "react-router-dom";

const Usertable = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState(0);
  const [searchByUser, setSearchByUser] = useState("");
  const [page, setPage] = useState(0);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const users = useSelector((state) => state.users);
  console.log(users);
  const [userState, setUserState] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openDialogBox = (id) => {
    if (isLoggedIn) {
      setUserId(id);
      setOpen(true);
    } else {
      setUserId(0);
      setOpen(false);
      navigate("/login");
    }
  };

  const handleDeleteUser = (id) => {
    if (isLoggedIn) {
      const confirmDeleteUser = window.confirm("Do u want to delete ? ");
      if (confirmDeleteUser) {
        dispatch(deleteUser(id));
      }
    } else {
      navigate("/login");
    }
  };

  const handleChangePage = (event, newPage) => {
    console.log(`new page :  ${newPage + 1}`);
    setPage(newPage);
    dispatch(getAllUsers(newPage + 1));
  };

  useEffect(() => {
    setUserState(users);
  }, [users]);

  useEffect(() => {
    const filteredList = users.filter((user) => {
      return (
        user.email.toLowerCase().includes(searchByUser.toLowerCase()) ||
        user.first_name.toLowerCase().includes(searchByUser.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchByUser.toLowerCase())
      );
    });

    setUserState(filteredList);
  }, [searchByUser]);

  return users.length ? (
    <div>
      <Box className={classes.searchUser}>
        <TextField
          name="search"
          variant="outlined"
          label="Search user"
          value={searchByUser}
          onChange={(e) => setSearchByUser(e.target.value)}
          autoComplete="off"
        />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">Email Address</StyledTableCell>
              <StyledTableCell align="right">First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>

              <StyledTableCell align="right">Update</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userState.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  {user.id}
                </StyledTableCell>
                <StyledTableCell align="right">{user.email}</StyledTableCell>
                <StyledTableCell align="right">
                  {user.first_name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {user.last_name}
                </StyledTableCell>

                <StyledTableCell align="right">
                  <IconButton
                    aria-label="Example"
                    onClick={() => openDialogBox(user.id)}
                  >
                    <ModeEditSharpIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton
                    aria-label="Example"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <Divider light />
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={12}
          rowsPerPage={6}
          page={page}
          onPageChange={handleChangePage}
        />
      </TableContainer>

      {open ? (
        <Updateuser open={open} setOpen={setOpen} userId={userId} />
      ) : null}
    </div>
  ) : (
    <CircularProgress />
  );
};

export default Usertable;
