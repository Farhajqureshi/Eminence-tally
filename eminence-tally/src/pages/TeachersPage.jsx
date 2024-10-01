import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Teachers from "../components/Teachers";

function TeachersPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
         <Teachers/>
        </div>
      )}
    </div>
  );
}

export default TeachersPage;
