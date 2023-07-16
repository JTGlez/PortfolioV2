import React, { useEffect, useState } from 'react';
import './assets/css/loader.css';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return loading ? (
        <div className="loader_bg">
            <div className="loader"></div>
        </div>
    ) : null
}

export default Loader;
