"use client";

import { useEffect, useState } from "react"
import "../../app/app.css";

export default function LocationFinderClient() {

    const [locationInfo, setLocationInfo] = useState({City: "N/A"}); //the default must be set here or the deployment won't build! 

    const getLocation = async () => {

        const response = await fetch('https://apip.cc/json');
        console.log(response);

        const locationData = await response.json();
        console.log(locationData);

        setLocationInfo(locationData);
    }

    useEffect(() => {
        getLocation();
    }, []);

    return (
        <>
            <div className="projectComponentDiv">
                <h1>Location Finder Client Component</h1>
                <h2>Hello From {locationInfo.City}</h2>
            </div>
        </>
    )
};