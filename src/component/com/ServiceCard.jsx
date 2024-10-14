import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceCard({Ser_Name, imageSrc, pagesLink}) {
    console.log(imageSrc)
    return (

        <>
            <div className='box-wrap' style={{ padding: '10px' }}>
                <div className='absp-icon-box-item'>
                    <img src={imageSrc} style={{width:'80px'}}/>
                    <p className='pt-3'>{Ser_Name} </p>
                    <Link to={pagesLink}> Know More </Link>
                    
                </div>
            </div>
        </>
    );
}
