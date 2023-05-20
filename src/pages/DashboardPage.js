import { Box, Grid, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import MovieCard from "../components/page/DashboardPage/MovieCard";
import MovieDetailCard from "../components/page/DashboardPage/MovieDetailCard";
import { MovieData } from "../fixtures/MovieFixtureData";
import Header from "../components/common/Header";

const DashboardPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleMovieCardClick = (index) => {
    setSelectedIndex(index);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSelectedIndex(null);
  };
  const handleClearSearchBar = () => {
    setSearchTerm("");
  };

  const filteredMovies = useMemo(
    () =>
      MovieData.filter((movie) =>
        movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  const selectedMovie =
    selectedIndex >= 0 && filteredMovies[selectedIndex]
      ? filteredMovies[selectedIndex]
      : null;

  return (
    <>
      <Header
        handleSearchChange={handleSearchChange}
        searchTerm={searchTerm}
        handleClearSearchBar={handleClearSearchBar}
      />

      {selectedMovie && <MovieDetailCard selectedMovie={selectedMovie} />}
      <Box>
        {filteredMovies.length === 0 ? (
          <Typography align="left" variant="h4">
            No results found for your search.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {filteredMovies.map((movie, index) => (
              <Grid item xs={12} sm={6} md={6} lg={3} xl={2} key={movie.imdbID}>
                <MovieCard
                  index={index}
                  selectedMovie={filteredMovies[selectedIndex]}
                  handleMovieCardClick={handleMovieCardClick}
                  movie={movie}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default DashboardPage;
