import React, { useEffect, useState } from "react";
import Gallery from "../components/Gallery"
import Spinner from "../components/Spinner";

function Galleries() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
        {loading ? <Spinner/> : (
          <div>
             <Gallery/>
          </div>
        )}
    </div>
  )
}

export default Galleries;
