import Main from "./components/layout/Main";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

export default function App() {
  const [sidebarDisplayStyle, setSidebarDisplayStyle] = useState("hide");
  function handleOpenSidebar() {
    setSidebarDisplayStyle("show");
  }
  function handleCloseSidebar() {
    setSidebarDisplayStyle("hide");
  }
  return (
    <>
      <Sidebar
        AnimationToggleStyling={sidebarDisplayStyle}
        handleCloseSidebar={handleCloseSidebar}
      />
      <Navbar handleOpenSidebar={handleOpenSidebar} />
      <Main />
    </>
  );
}
