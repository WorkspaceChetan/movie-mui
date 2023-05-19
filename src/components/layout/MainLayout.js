import { Box } from "@mui/material";
import { DRAWER_WIDTH } from "../../constants/CommonConstants";
import Sidebar from "../layout/sidebar/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Box
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
          p: 6,
          pt: 0,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default MainLayout;
