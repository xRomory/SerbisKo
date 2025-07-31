import { Outlet } from "react-router-dom";

export default function NoNavLayout() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-6 overflow-y-auto lg:ml-0">
        <Outlet />
      </main>
    </div>
  )
}
