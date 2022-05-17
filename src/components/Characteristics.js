import React from 'react';

const Characteristics = ({characteristics}) => {
    return (
        <div>
            {
                characteristics.map( (item,i) => {
                    return (
                        <div className='mb-3' key={i}>
                            <div className='font-s-16 mb-2'>{item[0]}</div>
                            <div className='ms-2'>
                                {
                                    item[1].map( (char,i) => {
                                        return (
                                            <div className='font-s-14 d-flex justify-content-between ' key={i}>
                                                <div>{char[0]}</div>
                                                <div>{char[1]}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Characteristics;