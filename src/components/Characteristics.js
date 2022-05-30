import React from 'react';
import {Row,Col} from "react-bootstrap";

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
                                            <Row className='font-s-14 d-flex justify-content-between ' key={i}>
                                                <Col>{char[0]}</Col>
                                                <Col>{char[1]}</Col>
                                            </Row>
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