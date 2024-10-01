// import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";

function Layout() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 2 seconds
    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      {loading ? <Spinner /> : (
        <div>
          <Navbar />
          <Outlet loading={loading} />
          <Footer />
        </div>

      )}
    </div>
  );
}



export default Layout;
