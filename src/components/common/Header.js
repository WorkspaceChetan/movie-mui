import { Box, IconButton } from "@mui/material";
import React from "react";
import Searchbar from "../page/DashboardPage/Searchbar";
import { LightMode, MoreVert } from "@mui/icons-material";

const Header = ({ handleSearchChange, searchTerm, handleClearSearchBar }) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          width: "100%",
          justifyContent: "space-between",
          mt: 5.25,
          mb: 5,
        }}
      >
        <Searchbar
          handleSearchChange={handleSearchChange}
          searchTerm={searchTerm}
          handleClearSearchBar={handleClearSearchBar}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}></Box>
        <Box>
          <IconButton>
            <LightMode />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
