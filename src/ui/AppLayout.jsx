import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen p-4 bg-white dark:bg-gray-900">
      <Outlet />
    </div>
  );
};

export default AppLayout;
