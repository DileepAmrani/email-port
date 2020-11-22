import React, { useState } from "react";
import { FaBars, FaSearchPlus, FaHome, FaListUl } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#e9e9e9",
    height: "60px",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  menuBars: {
    marginLeft: "2rem",
    fontSize: "2rem",
    background: "none",
  },
  navMenu: {
    backgroundColor: "#e9e9e9",
    width: "270px",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: "-100%",
    transition: "850ms",
    boxShadow: "1px 1px 2px gray",
  },

  navMenuActive: {
    left: 0,
    transition: "350ms",
  },
  navTextHeading: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    padding: "8px 0px 8px 16px",
    listStyle: "none",
    backgroundColor: "#626568",
    color: "#fff",
  },
  navText: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    padding: "8px 0px 8px 16px",
    listStyle: "none",
    "&:hover": {
      backgroundColor: "#cacccf",
      color: "#fff",
    },
  },

  text: {
    paddingLeft: "5px",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  navMenuItems: {
    width: "100%",
    padding: 0,
  },

  navbarToggle: {
    backgroundColor: "#e9e9e9",
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  span: {
    marginLeft: "12px",
  },
  btnBox:{
    padding: 5
  },
  logOutBtn:{
    backgroundColor: "#ff1a1a",
    color: "#fff",
    textTransform: "none",
    '&:hover':{
      backgroundColor: "#ffb3b3"
    }
  }
}));

function Navbar() {
  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={classes.navbar}>
        <Link to="#" className={classes.menuBars}>
          <FaBars color="#000" onClick={showSidebar} />
        </Link>
      </div>

      <nav
        className={clsx(classes.navMenu, sidebar ? classes.navMenuActive : "")}
      >
        <ul className={classes.navMenuItems} onClick={showSidebar}>
          <li className={classes.navbarToggle}>
            <Link to="#" className={classes.menuBars}>
              <AiOutlineClose color="#000" />
            </Link>
          </li>
          <li className={classes.navTextHeading}>
            <span>CAMPAIGNS</span>
          </li>
          <li className={classes.navText}>
            <Link to="#" className={classes.link}>
              <FaHome color="#000" />
              <span className={classes.text}>All Campaigns</span>
            </Link>
          </li>
          <li className={classes.navText}>
            <Link to="/createnew" className={classes.link}>
              <IoIosCreate color="#000" />
              <span className={classes.text}>Create new Campaign</span>
            </Link>
          </li>
          <li className={classes.navTextHeading}>
            <span>CAMPAIGNS</span>
          </li>
          <li className={classes.navText}>
            <Link to="/#" className={classes.link}>
              <MdMail color="#000" />
              <span className={classes.text}>All Templates</span>
            </Link>
          </li>
          <li className={classes.navTextHeading}>
            <span>LIST & SUBSCRIBERS</span>
          </li>
          <li className={classes.navText}>
            <Link to="/subscriber-list" className={classes.link}>
              <FaListUl color="#000" />
              <span className={classes.text}>View all lists</span>
            </Link>
          </li>
          <li className={classes.navTextHeading}>
            <span>REPORTS</span>
          </li>
          <li className={classes.navText}>
            <Link to="/dashboard" className={classes.link}>
              <FaSearchPlus color="#000" />
              <span className={classes.text}>See reports</span>
            </Link>
          </li>
          <div className={classes.btnBox}>
            <Button variant="contained" fullWidth className={classes.logOutBtn} disableElevation>
              Log Out
            </Button>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
