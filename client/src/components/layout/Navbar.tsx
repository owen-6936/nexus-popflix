import { Menu, Search, Bell, CircleUser } from "lucide-react";
import myImage from "../../assets/images/profile-icon.jpg";

export default function Navbar({ handleOpenSidebar }) {
  return (
    <nav className="navbar">
      <ul id="nav-list" className="navbar-list">
        <li className="nav-items flex items-center justify-center cursor-pointer md:hidden">
          <Menu
            size={"1.5rem"}
            strokeWidth={"1.5px"}
            onClick={handleOpenSidebar}
          />
        </li>
        <li className="flex items-center justify-center md:hidden">
          <span className="h-line"></span>
        </li>
        <li className="flex items-center justify-center md:pl-5">
          <label className="relative inline-block w-full" htmlFor="search-bar">
            <Search stroke="gray" className="absolute left-1.5 top-1.5" />
            <input
              className="block outline-0 border-0 w-full h-full p-2 pl-10"
              type="search"
              name="search"
              id="search-bar"
              placeholder="Start typing to show suggestions..."
            />
          </label>
        </li>
        <li className="flex items-center justify-center cursor-pointer">
          <Bell stroke="gray" />
        </li>
        <li className="flex items-center justify-center cursor-pointer  w-8 h-8">
          <img
            id="profile-icon"
            src={myImage}
            alt="profile picture icon"
            width={"64px"}
            height={"64px"}
          />
        </li>
      </ul>
    </nav>
  );
}
