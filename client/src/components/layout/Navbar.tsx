import { Menu, Search, Bell, CircleUser } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="h-15 shadow w-full items-center content-center">
      <ul
        id="nav-list"
        className="grid grid-rows-[auto] grid-cols-[5%_5%_70%_5%_5%] lg:grid-cols-[80%_10%_10%] gap-2 place-content-center lg:flex-10/12"
      >
        <li className="nav-items flex items-center justify-center lg:hidden">
          <Menu size={"1.5rem"} strokeWidth={"1.5px"} />
        </li>
        <li className="flex items-center justify-center lg:hidden">
          <span className="h-line"></span>
        </li>
        <li className="flex items-center justify-center lg:pl-10">
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
        <li className="flex items-center justify-center ">
          <Bell stroke="gray" />
        </li>
        <li className="flex items-center justify-center ">
          <CircleUser stroke="gray" />
        </li>
      </ul>
    </nav>
  );
}
