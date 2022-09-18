import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import SideBar from "./components/SideBar/SideBar";
import { Div } from "./styles/styles";

const App: React.FC = () => {
  return (
    <Div>
      <SideBar />
      <Dashboard />
    </Div>
  );
};

export default App;
