import Sidebar from "../layout/sidebar/Sidebar";

const MainLayout = ({ children }) => {
  return <Sidebar>{children}</Sidebar>;
};

export default MainLayout;
