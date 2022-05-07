import React from 'react';
import {Image} from "react-bootstrap";

import logo from '../icons/png/logo.png'

const Loading = () => {
    return (
        <div className='loading d-flex justify-content-center align-items-center'>
             <div >
                 <Image className='mb-4' src={logo} height={160} width={155} />
                 <div className='font-s-20 secondary-text text-center '>Загрузка...</div>
             </div>
        </div>
    );
};

export default Loading;