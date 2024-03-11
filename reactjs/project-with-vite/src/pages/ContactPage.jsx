import React, {Suspense, lazy} from 'react';
import './HomePage.css';

const LazyComp = lazy(
    () => {
        return new Promise(
            resolve => setTimeout(resolve, 5000)
        ).then(
            () => import('../components/LazyComp')
        );
    }
)

export default function ContactPage() {
    return (
        <>
            <h1>Contact Page</h1>

            <Suspense fallback={<Skeleton />}>
                <LazyComp />
            </Suspense>
        </>
    )
}

function Skeleton() {
    return (
        <>
            <div className="row">
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
            </div>
        </>
    )
}