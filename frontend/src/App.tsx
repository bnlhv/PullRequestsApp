import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import SideBar from "./components/SideBar/SideBar";
import { Div } from "./styles/styles";

const url = "http://api:3080/prs";

const App: React.FC<{}> = () => {
  return (
    <Div>
      <SideBar />
      <Dashboard url={url} />
    </Div>
  );
};

export default App;
