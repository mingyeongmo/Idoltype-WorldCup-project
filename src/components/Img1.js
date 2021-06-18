import React from 'react';
import ryujin from '../imgs/itzyimgs/ryujin.jpeg';
import '../Style/img.css';


const Img1 = ({name}) => {
    return (
        <div>
            <img className='img' src={ryujin}/>
        </div>
    );
};

Img1.defaultProps = {
    name:'default',
}

export default Img1;

