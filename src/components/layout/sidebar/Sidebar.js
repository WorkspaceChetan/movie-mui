import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Avatar, Typography } from "@mui/material";
import SidebarListItem from "./SidebarListItem";
import {
  FavoriteBorder,
  Logout,
  Search,
  Settings,
  Update,
  PlaylistPlayOutlined,
  Tv,
  FormatListBulleted,
  LiveTv,
} from "@mui/icons-material";
import { useState } from "react";
import { DRAWER_WIDTH } from "../../../constants/CommonConstants";
import { useNavigate } from "react-router-dom";

const openedMixin = (theme) => ({
  width: `${DRAWER_WIDTH}px`,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: `${DRAWER_WIDTH}px`,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  // const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(0);
  const navigate = useNavigate();

  const handleDrawerItemClick = (index) => {
    setSelectedItem(index);
    if (selectedItem === 0) navigate("/");
    console.log(`Selected item: ${index}`);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={true}>
        <DrawerHeader
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Avatar
            sx={{ height: "91px", width: "91px", mt: 6, mb: "11px" }}
            src="/avatar.png"
          ></Avatar>
          <Typography variant="h2" sx={{ mb: 2.5 }}>
            Erric Hoffman
          </Typography>
        </DrawerHeader>
        <Divider />
        <List>
          <SidebarListItem
            icon={<Search />}
            text="Discover"
            index={0}
            selectedItem={selectedItem}
            handleDrawerItemClick={handleDrawerItemClick}
          />
          <SidebarListItem
            icon={<PlaylistPlayOutlined />}
            text="Playlist"
            index={1}
            selectedItem={selectedItem}
            handleDrawerItemClick={handleDrawerItemClick}
          />
          <SidebarListItem
            icon={<Tv />}
            text="TV Shows"
            index={2}
            selectedItem={selectedItem}
            handleDrawerItemClick={handleDrawerItemClick}
          />
          <SidebarListItem
            icon={<LiveTv />}
            text="Movie"
            index={3}
            selectedItem={selectedItem}
            handleDrawerItemClick={handleDrawerItemClick}
          />
          <SidebarListItem
            icon={<FormatListBulleted />}
            text="List"
            index={4}
            selectedItem={selectedItem}
            handleDrawerItemClick={handleDrawerItemClick}
          />
          <Divider />
          <SidebarListItem
            icon={<Update />}
            text="Watch Later"
            index={5}
            selectedItem={selectedItem}
            handleDrawerItemClick={handleDrawerItemClick}
          />
          <SidebarListItem
            icon={<FavoriteBorder />}
            text="Recomended"
            index={6}
            selectedItem={selectedItem}
            handleDrawerItemClick={handleDrawerItemClick}
          />
          <Divider />
          <SidebarListItem
            icon={<Settings />}
            text="Settings"
            index={7}
            selectedItem={selectedItem}
            handleDrawerItemClick={handleDrawerItemClick}
          />
          <SidebarListItem
            icon={<Logout />}
            text="Logout"
            index={8}
            selectedItem={selectedItem}
            handleDrawerItemClick={handleDrawerItemClick}
          />
        </List>
      </Drawer>
    </Box>
  );
}
