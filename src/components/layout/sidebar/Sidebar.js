import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Avatar, Drawer, Typography } from "@mui/material";
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
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainLayoutContext } from "../../../context/MainLayoutContext";
import { useGetMediaQueryDown } from "../../../hooks/useGetMediaQuery";
import { DRAWER_WIDTH } from "../../../constants/CommonConstants";

export default function Sidebar({ children }) {
  const [selectedItem, setSelectedItem] = useState(0);
  const navigate = useNavigate();
  const { showSidebar, toggleSidebar } = useContext(MainLayoutContext);
  const isSmDown = useGetMediaQueryDown("sm");

  const handleDrawerItemClick = (index) => {
    setSelectedItem(index);
    if (selectedItem === 0) navigate("/");
  };

  const isSidebarOpen = (isSmDown && showSidebar) || !isSmDown;

  const drawerContents = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 5.25,
          mb: 2.5,
        }}
      >
        <Avatar
          sx={{ height: "91px", width: "91px", mb: 1 }}
          src="/avatar.png"
        ></Avatar>
        <Typography variant="h2">Erric Hoffman</Typography>
      </Box>
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
    </>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box display="flex">
      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Box sx={{ display: "flex" }}>
          <Drawer
            container={container}
            variant="temporary"
            open={isSidebarOpen}
            onClose={toggleSidebar}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: DRAWER_WIDTH,
              },
            }}
          >
            {drawerContents}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: DRAWER_WIDTH,
              },
            }}
            open
          >
            {drawerContents}
          </Drawer>
        </Box>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          m: 6,
          mt: 0,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
