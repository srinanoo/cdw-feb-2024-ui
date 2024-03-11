import axios from "axios";
import { useEffect, useState } from "react";
import './HomePage.css';

export default function BlogPage() {
    const [country, setCountry] = useState("India");
    const [universitiesList, setUniversitiesList] = useState([]);

    const fetchUniversities = () => {
        axios.get(`http://universities.hipolabs.com/search?country=${country}`)
        .then(res => {
            console.log(res)
            if(JSON.stringify(universitiesList) !== JSON.stringify(res.data))
            setUniversitiesList(res.data)
        });
    }

    useEffect(() => {
        setTimeout(fetchUniversities, 5000);
    }, [universitiesList]);

    console.log(universitiesList.length);

    return (
        <>
            <h1>Blog Page</h1>

            <h3>Universities List for {country}</h3>
            <p><input type="text" onChange={(e) => setCountry(e.target.value)} /></p>
            <p><button onClick={fetchUniversities}>Show Universities</button></p>

            <Skeleton />
            <div className="row">
            {
                universitiesList.length > 0
                    ?
                        universitiesList.map((v, i) => {
                            return (
                            <div key={i} className="skSection">
                                <div>{v.name}</div>
                                <div>{v.web_pages[0]}</div>
                            </div>
                            )
                        })
                    :
                    <Skeleton />
            }
            </div>

        </>
    )
}

function Skeleton() {
    return (
        <>
            <div className="skSection">
                    <div>
                        <div className="skTitle"></div>
                        <div className="skImg"></div>
                        <div className="skDescription"></div>
                    </div>
                </div>
                <div className="skSection">
                    <div>
                        <div className="skTitle"></div>
                        <div className="skImg"></div>
                        <div className="skDescription"></div>
                    </div>
                </div>
                <div className="skSection">
                    <div>
                        <div className="skTitle"></div>
                        <div className="skImg"></div>
                        <div className="skDescription"></div>
                    </div>
                </div>
        </>
    )
}