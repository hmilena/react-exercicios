import "./App.css";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <div className="flex w-full h-full">
          <Sidebar />

          <main className="flex flex-col flex-1 rounded bg-white h-full ml-80 size-80 max-lg:ml-10 max-lg:size-95">
            <div className="flex flex-col gap-4 bg-white">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
