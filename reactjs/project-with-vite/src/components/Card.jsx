import axios from "axios";
import { useEffect, useState } from "react";

export default function Card(props) {
    

    return (
        <>

            <div className="row">
            {
                props.data?.map((v, i) => {
                    return (
                    <div key={i} className="skSection">
                        <div>{v.name}</div>
                        <div>{v.web_pages[0]}</div>
                    </div>
                    )
                })
            }
            </div>
        </>
    )
}