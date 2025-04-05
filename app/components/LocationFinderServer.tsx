// import { useEffect, useState } from "react"

/**
 * NOTE FROM DEVELOPER SAMUEL VARNEY:
 * 
 * All the code that is commented out, rather than removed, is for my 
 * own reference later. I tend to look at class materials later when 
 * working on other projects and I like to have everything there for 
 * reference. 
 */

import "../../app/app.css";

export default async function LocationFinderServer() {

    // const [locationInfo, setLocationInfo] = useState({});

    // const getLocation = async () => {

    const response = await fetch('https://apip.cc/json');
    //console.log(response);

    const locationData = await response.json();
    console.log(locationData);

    // setLocationInfo(locationData);
    // }

    // useEffect(() => {
    //     getLocation();
    // }, []);

    return (
        <>
            <div className="projectComponentDiv">
                <h1>Location Finder Server Component</h1>
                <h2>Hello From {locationData.City}</h2>
            </div>
        </>
    )
};