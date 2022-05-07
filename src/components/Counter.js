import React, {useState} from 'react';
import {Image} from "react-bootstrap";
import arrowLeft from "../icons/png/arrow-left.png";
import arrowRight from "../icons/png/arrow-right.png";

const Counter = ({total,handlerCount}) => {
    const [count, setCount] = useState(total)

    const handlerArrowLeft = e => {
        e.stopPropagation()
        setCount( prev => {
            if (prev <= 1){
                handlerCount(1)
                return 1
            }
            handlerCount(prev - 1)
            return prev - 1
        })
    }

    const handlerArrowRight = e => {
        e.stopPropagation()
        setCount( prev => {
            handlerCount(prev + 1)
            return prev + 1
        })
    }

    return (
        <div>
            <Image
                onClick={(e) => handlerArrowLeft(e)}
                height={10}
                width={10}
                src={arrowLeft}
                className='me-2'
            />
            <span className='unactive-text'>{count}</span>
            <Image
                onClick={ e => handlerArrowRight(e)}
                height={10}
                width={10}
                src={arrowRight}
                className='ms-2'
            />
        </div>
    );
};

export default Counter;