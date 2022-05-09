import React, {useState} from 'react';

import ArrowRight from "../icons/svgComponents/ArrowRight";
import ArrowLeft from "../icons/svgComponents/ArrowLeft";

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
            <div onClick={(e) => handlerArrowLeft(e)} className='d-inline-block'>
                <ArrowLeft height={15} width={15} fill="#767676" />
            </div>
            <span className='unactive-text'>{count}</span>
            <div onClick={ e => handlerArrowRight(e)} className='d-inline-block'>
                <ArrowRight height={15} width={15} fill="#767676" />
            </div>
        </div>
    );
};

export default Counter;