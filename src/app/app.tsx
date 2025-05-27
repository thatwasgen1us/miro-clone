import { Outlet } from "react-router-dom";
import { AppHeader } from "@/features/header";

export function App() {
  return (
    <div className="bg-amber-200">
      <AppHeader />
      <Outlet />
    </div>
  );
}
