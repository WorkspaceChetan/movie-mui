import { ControlPoint, PlayCircleFilled } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import React from "react";

const MovieCard = ({ index, selectedMovie, handleMovieCardClick, movie }) => {
  return (
    <>
      <Box
        onClick={() => handleMovieCardClick(index)}
        sx={{
          borderRadius: "11px",
          backgroundColor: "#394B61",
          p: 1.25,
          pb: 2,
          cursor: "pointer",
          ...(selectedMovie &&
            selectedMovie.imdbID === movie.imdbID && {
              border: "3px solid #00E0FF",
              boxShadow: "0px 0px 20px 5px rgba(0, 0, 0, 0.35);",
            }),
        }}
      >
        <Box>
          <Paper
            elevation={0}
            sx={{
              height: { xs: "375px", lg: "275px", xl: "200px" },
              borderRadius: "11px",
              overflow: "hidden",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${movie.Poster})`,
            }}
          ></Paper>
          <Typography
            align="left"
            sx={{
              maxWidth: "100%",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              my: 1.5,
            }}
            title={movie.Title}
            variant="h6"
          >
            {movie.Title}
          </Typography>
          <Box display="flex" justifyContent="flexStart" gap={2}>
            <IconButton sx={{ p: 0 }} size="small">
              <PlayCircleFilled />
            </IconButton>
            <IconButton sx={{ p: 0 }} size="small">
              <ControlPoint />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MovieCard;
