import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import SectionFour from "../components/SectionFour";

function Course() {

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
                    <SectionFour />
                </div>
            )}
        </div>
    );
}

export default Course;
