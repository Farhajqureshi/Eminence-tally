import React, { useEffect, useState } from 'react'
import SectionThree from '../components/SectionThree'
import Spinner from '../components/Spinner';

function About() {
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
             <SectionThree/>
          </div>
        )}
    </div>
  )
}

export default About;