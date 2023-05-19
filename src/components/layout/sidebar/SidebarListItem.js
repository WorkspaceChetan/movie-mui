import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const SidebarListItem = ({
  selectedItem,
  index,
  handleDrawerItemClick,
  icon,
  text,
}) => {
  const isSelected = selectedItem === index;

  return (
    <ListItem disablePadding>
      <ListItemButton
        sx={{
          justifyContent: "initial",
          pl: 6.5,
          backgroundColor: isSelected ? "rgba(0, 224, 255, 1)" : "transparent",
        }}
        selected={isSelected}
        onClick={handleDrawerItemClick}
      >
        <ListItemIcon
          sx={{
            mr: 1.75,
            justifyContent: "center",
            minWidth: "auto",
            color: isSelected ? "rgba(0, 224, 255, 1)" : "inherit",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{ color: isSelected ? "rgba(0, 224, 255, 1)" : "inherit" }}
        />
        {isSelected && (
          <Box position={"absolute"} right={0}>
            <Box
              backgroundColor="rgba(0, 224, 255, 1)"
              height="33px"
              width="3px"
            ></Box>
          </Box>
        )}
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarListItem;
