// src/ui/PublicLayout.jsx
import { Outlet } from "react-router-dom";
import PageNav from "../pages/PageNav";
import Footer from "./Footer";

const PublicLayout = () => {
  return (
    <>
      <PageNav />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
