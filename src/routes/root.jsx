import Display from "../Display";
import Navigation from "../components/Navigation";
import Pagination from "../components/Pagination";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Root() {
  return (
    <div className="flex flex-col w-full h-auto gap-5 pb-5 max-h-fit">
      <Navigation />
      <div className="flex max-w-full gap-5 px-6 mt-24 min-h-fit">
        <Sidebar />
        <Outlet />
      </div>
      <div className="flex items-center justify-center w-full">
        <Pagination />
      </div>
    </div>
  );
}
