import React, { useEffect, useState } from "react";
import LendingPage from "../components/LendingPage";
import SectionFour from "../components/SectionFour";
import SectionThree from "../components/SectionThree";
import Teachers from "../components/Teachers";
import Testimonial from "../components/Testimonial";
import Contect from "../components/Contect";
import Gallery from "../components/Gallery";
import Spinner from "../components/Spinner";

function Home() {
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
          <LendingPage />
          <SectionThree />
          <SectionFour />
          <Teachers />
          <Gallery />
          <Testimonial />
          <Contect />
        </div>
      )}
    </div>
  );
}

export default Home;
