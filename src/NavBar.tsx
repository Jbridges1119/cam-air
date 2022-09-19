import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "./Assests/logo2.png";
import { CardMedia } from "@mui/material";
const drawerWidth = 240;
const navItems = [
  "About",
  "Air Conditioning",
  "Refrigeration",
  "Heating",
  "Maintenance",
  "Contact",
];

const NavBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navBackgroundColor = "#02216E";
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: `${navBackgroundColor}` }}
    >
      <Button href="tel:4033206690">
        <Typography
          variant="h5"
          sx={{ my: 2, color: "white", fontWeight: "bold" }}
        >
          Call: 403-320-6690
        </Typography>
      </Button>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: "white" }}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          sx={{
            display: "flex",
            alignItems: { xs: "center", md: "space-between" },
            background: "white",
          }}
        >
     
          <Box
            sx={{
              background: "white",
              position: "absolute",
              top: "64px",
              zIndex: "100000",
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              display: { md: "inline-block", xs: "none" },
              boxShadow:'0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14)'
            }}
          >
            <Button  href="tel:4033206690">
              <Typography variant="h5">403.320.6690</Typography>
            </Button>
          </Box>
          <Toolbar
            sx={{
              maxWidth: "1200px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "space-between",
              width: "100%",
            }}
          >
            <Button sx={{"&:hover": {
                  background: "none",
                },}}>
              <CardMedia
                component="img"
                sx={{ height: "50px", ml: { sm: 2, xs: 0.5 }, }}
                image={logo}
                alt="Loading.."
              />
            </Button>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" }, color: "#7d7d7d" }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
            ></Typography>
            <Box sx={{ display: { xs: "none", md: "block" }, mr: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#7d7d7d", fontSize: "18px", mt: 2,
                  "&:hover": {
                    background: "none",
                    color:'#1976d2'
                  },
                }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            anchor="right"
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: `${navBackgroundColor}`,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>{" "}
      </Box>
    </>
  );
};

export default NavBar;
