import { Box, Button, Paper, Typography } from "@mui/material";
import Progressbar from "../../common/Progressbar";

const MovieDetailCard = ({ selectedMovie }) => {
  const { Director, Plot, Language, Title, Poster, imdbRating, Year, RunTime } =
    selectedMovie;
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        maxHeight: "389px",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        borderRadius: "11px",
        my: 3.225,
        backgroundColor: "rgba(57, 75, 97, 1)",
      }}
    >
      <Box maxWidth="330px" minHeight="389px">
        <Box
          component="img"
          src={Poster}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        textAlign={"left"}
        paddingLeft={4.25}
      >
        <Typography variant="h5" sx={{ pt: 3 }}>
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
        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            color="info"
            fullWidth
            sx={{ maxWidth: "154px" }}
          >
            <Typography variant="h4">Play Movie</Typography>
          </Button>
          <Button
            variant="outlined"
            color="info"
            fullWidth
            sx={{ maxWidth: "154px" }}
          >
            <Typography variant="h4">Watch Trailer</Typography>
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default MovieDetailCard;
