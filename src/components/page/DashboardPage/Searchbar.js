import { Close, Search } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

const Searchbar = ({
  searchTerm,
  handleSearchChange,
  handleClearSearchBar,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpenSearchBar = () => {
    setOpen(true);
  };

  const handleCloseSearchBar = () => {
    if (!searchTerm) setOpen(false);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{ maxWidth: "36rem", width: "100%" }}
    >
      {!open && (
        <Box
          sx={{
            height: "54.5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton onClick={handleOpenSearchBar}>
            <Search />
          </IconButton>
        </Box>
      )}

      {open && (
        <TextField
          label="Title, Movies, Keyword"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={handleClearSearchBar}>
                  <Close />
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          onBlur={handleCloseSearchBar}
          inputRef={(input) => {
            if (input != null) {
              input.focus();
            }
          }}
          sx={{
            background: "secondary.main",
            "& label": { color: "primary.main" },
            "& fieldset": {
              borderColor: (theme) =>
                `${theme.palette.primary.main} !important`,
            },
          }}
        />
      )}
    </Box>
  );
};

export default Searchbar;
