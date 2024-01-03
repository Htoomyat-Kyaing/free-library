import Display from "./Display";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-between w-full min-w-full min-h-screen gap-5 mb-5">
      <Navigation />
      <Display />
    </div>
  );
}
