import Display from "../Display";
import Navigation from "../components/Navigation";
import Pagination from "../components/Pagination";

export default function Root() {
  return (
    <div className="flex flex-col w-full min-w-full min-h-screen gap-5 mb-5">
      <Navigation />
      <Display />
      <Pagination />
    </div>
  );
}
