import { Box, IconButton } from "@mui/material";
import React, { useContext } from "react";
import Searchbar from "../page/DashboardPage/Searchbar";
import { LightMode, Menu, MoreVert } from "@mui/icons-material";
import { useGetMediaQueryDown } from "../../hooks/useGetMediaQuery";
import { MainLayoutContext } from "../../context/MainLayoutContext";

const Header = ({ handleSearchChange, searchTerm, handleClearSearchBar }) => {
  const isSmDown = useGetMediaQueryDown("sm");
  const { toggleSidebar } = useContext(MainLayoutContext);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          mt: 5.25,
          mb: 5,
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {isSmDown && (
            <IconButton onClick={toggleSidebar}>
              <Menu />
            </IconButton>
          )}
          <Searchbar
            handleSearchChange={handleSearchChange}
            searchTerm={searchTerm}
            handleClearSearchBar={handleClearSearchBar}
          />
        </Box>
        <Box sx={{ whiteSpace: "nowrap" }}>
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
