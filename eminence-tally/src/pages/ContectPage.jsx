import React, { useEffect, useState } from "react";
import Contect from "../components/Contect";
import Spinner from "../components/Spinner";

function ContectPage() {
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
                    <Contect />
                </div>
            )}
        </div>
    );
}

export default ContectPage;
