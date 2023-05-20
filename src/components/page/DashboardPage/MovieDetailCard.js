import { Box, Button, Grid, Typography } from "@mui/material";
import Progressbar from "../../common/Progressbar";

const MovieDetailCard = ({ selectedMovie }) => {
  const { Director, Plot, Language, Title, Poster, imdbRating, Year, RunTime } =
    selectedMovie;
  return (
    <Box
      sx={{
        backgroundColor: "rgba(57, 75, 97, 1)",
        my: 3.25,
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <Grid container spacing={4.25}>
        <Grid item xs={12} md={4} sx={{ pt: { md: "0!important" } }}>
          <Box
            sx={{
              minHeight: "400px",
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${Poster})`,
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            display="flex"
            flexDirection="column"
            textAlign={"left"}
            sx={{ pb: 2, p: { xs: 2, md: 0 }, pt: { xs: 0, md: "auto" } }}
          >
            <Typography variant="h5" sx={{ pt: { xs: 0, md: 4.25 } }}>
              {Title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.25,
              }}
            >
              <Box width="111px">
                <Progressbar value={imdbRating} />
              </Box>
              <Typography>{imdbRating}/10</Typography>
            </Box>
            <Typography variant="h5">Year: {Year}</Typography>
            <Typography variant="h5">Running Time: {RunTime}</Typography>
            <Typography variant="h5">Directed By: {Director}</Typography>
            <Typography variant="h5">Language: {Language}</Typography>
            <Typography variant="body2" sx={{ py: 2.5 }}>
              {Plot}
            </Typography>
            <Box display="flex" gap={2} justifyContent={"flexstart"}>
              <Button variant="contained" color="info">
                <Typography variant="h4">Play Movie</Typography>
              </Button>
              <Button variant="outlined" color="info">
                <Typography variant="h4">Watch Trailer</Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieDetailCard;
