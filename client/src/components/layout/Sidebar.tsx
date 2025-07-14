import { Clapperboard, Film, Flame, Home, ListVideo } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div id="logo" className="text-2xl font-bold text-indigo-400 p-5">
        Popflix
      </div>
      <ul id="sidebar-list" className="p-5 pt-1 ">
        <li tabIndex={1}>
          <Home /> Home
        </li>
        <li tabIndex={2}>
          <Film /> Movies
        </li>
        <li tabIndex={3}>
          <Clapperboard /> Shows
        </li>
        <li tabIndex={4}>
          <Flame />
          Popular
        </li>
        <li tabIndex={5}>
          <ListVideo />
          Library
        </li>
      </ul>
    </aside>
  );
}
