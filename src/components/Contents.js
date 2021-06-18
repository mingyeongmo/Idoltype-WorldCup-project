import React from 'react';
import Img1 from '../components/Img1';
import Img2 from '../components/Img2';
import '../Style/Contents.css';

const Contents = () => {
    return (
        <>
            <div className="contents">
                <div className="Fight1">
                    <Img1 />
                </div>
                <div className="Fight2">
                    <Img2 />
                </div>
            </div>
            <div>
                <p>hihi</p>
            </div>
        </>
    );
};

export default Contents;