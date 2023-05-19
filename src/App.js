import { Box } from "@mui/material";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import NoPage from "../src/components/common/NoPage";
import MainLayout from "./components/layout/MainLayout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box component="main">
      <Box className="App">
        <MainLayout>
          <Routes>
            <Route index element={<DashboardPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </MainLayout>
      </Box>
    </Box>
  );
}

export default App;
