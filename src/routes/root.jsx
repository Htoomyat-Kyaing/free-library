import Display from "../Display";
import Navigation from "../components/Navigation";
import Pagination from "../components/Pagination";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Root() {
  return (
    <div className="flex flex-col min-w-full min-h-screen pb-5">
      <Navigation />
      <div className="flex gap-5 px-6 mt-24">
        <Sidebar />
        <Outlet />
      </div>
      <div className="flex items-center justify-center w-full mt-5">
        <Pagination />
      </div>
    </div>
  );
}
