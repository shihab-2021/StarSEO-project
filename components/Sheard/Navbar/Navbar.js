/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Container } from "@mui/material";

const Navbar = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "#1e1f26", minHeight: "100vh", color: "white" }}
    >
      <Link href="/">
        <a className="flex justify-center py-4">
          <img src="https://i.ibb.co/KspLSX3/docy-logo.png" alt="" />
        </a>
      </Link>
      <Divider style={{ backgroundColor: "white" }} />
      <List>
        <Link href="/">
          <ListItem button>
            <ListItemText>
              <span>Home</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/documentation">
          <ListItem button>
            <ListItemText>
              <span>Documentation</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/blogs">
          <ListItem button>
            <ListItemText>
              <span>Blog</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/contact">
          <ListItem button>
            <ListItemText>
              <span>Contact</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/about">
          <ListItem button>
            <ListItemText>
              <span>About</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/adminDashboard">
          <ListItem button>
            <ListItemText>
              <span>Dashboard</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/ask">
          <ListItem button>
            <ListItemText>
              <span>Ask</span>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href="/helpDesk">
          <ListItem button>
            <ListItemText>
              <span>Help desk</span>
            </ListItemText>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
  return (
    <div className="">
      <header className="body-font z-10 w-full text-black">
        <div className="container mx-auto">
          <div className="mt-5 flex justify-between">
            <Link href="/">
              <a className="flex justify-center">
                <img
                  style={{ height: "fit-content" }}
                  className="hidden w-40 dark:block"
                  src="https://i.ibb.co/KspLSX3/docy-logo.png"
                  alt=""
                />
                <img
                  style={{ height: "fit-content" }}
                  className="block w-40 dark:hidden"
                  src="https://i.ibb.co/Zx7g8yW/logo-2x-1.png"
                  alt=""
                />
              </a>
            </Link>
            <div className="hidden lg:flex items-center ml-10 pl-10">
              <nav className="navbar-parent items-center">
                <Link className="flex" href="/">
                  <a className="items-center font-bold mr-5">
                    <span>Home</span>
                  </a>
                </Link>
                <Link className="flex" href="/">
                  <a className="items-center font-bold mr-5">
                    <span>Backlink</span>
                  </a>
                </Link>
                <Link className="flex" href="/">
                  <a className="items-center font-bold mr-5">
                    <span>Local SEO</span>
                  </a>
                </Link>
                <Link className="flex" href="/">
                  <a className="items-center font-bold mr-5">
                    <span>SEO Campaigns</span>
                  </a>
                </Link>
                <Link className="flex" href="/">
                  <a className="items-center font-bold mr-5">
                    <span>Social Media Service</span>
                  </a>
                </Link>
              </nav>
            </div>
            <div className="flex items-center">
              <Link className="flex" href="/">
                <a className="border-2 items-center py-1 px-6 border-gray-400 mr-4">
                  Login
                </a>
              </Link>
              <Link className="flex" href="/">
                <a className="border-2 items-center py-1 px-6 bg-emerald-500 border-emerald-500">
                  Register
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
