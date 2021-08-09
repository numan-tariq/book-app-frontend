import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { useHistory } from "react-router";
import { apis } from "../services";
import { connect, useSelector } from "react-redux";
import { userLogout } from "../store/actions/dataAction";

const MainHeader = (props) => {
  const { userLogout } = props;
  const { appData } = useSelector((state) => state);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const open = Boolean(anchorEl);

  useEffect(() => {
    userProfile();
  }, []);

  const userProfile = async () => {
    try {
      const { data } = await apis.getUserProfile();

      if (data) return;
    } catch (err) {
      console.log("[ERROR]", err);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    setAnchorEl(null);
    userLogout();
    appData.fullName = "";
    localStorage.clear();

    history.push("./signin");
  };

  const autherBooksHandler = () => {
    setAnchorEl(null);
    history.push("./auther-book");
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Books App</div>
      <nav className={classes.nav}>
        <ul>
          {appData.userState === 1 ? (
            <>
              <li>
                <NavLink activeClassName={classes.active} to="/welcome">
                  Welcome
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/books">
                  All Books
                </NavLink>
              </li>
              <li>Hi - {`${appData.fullName}`}</li>
              <li>
                <Button
                  aria-controls="fade-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <PermIdentityIcon />
                </Button>
                <Menu
                  id="fade-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={autherBooksHandler}>My Books</MenuItem>
                  <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                </Menu>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink activeClassName={classes.active} to="/books">
                  All Books
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/signin">
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default connect(null, { userLogout })(MainHeader);
