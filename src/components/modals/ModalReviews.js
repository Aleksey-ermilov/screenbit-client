import React, {useState} from 'react';
import { Modal,Image,Form} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";

import ModalAuth from "./ModalAuth";

import DefaultUserSvg from "../../icons/svgComponents/DefaultUserSvg";

const ModalReviews = ({show,onHide,reviews,setReview}) => {
    const {isAuth,user} = useSelector( state => state.user)
    const dispatch = useDispatch()

    const [ isShowModalAuth, setIsShowModalAuth ] = useState(false)

    const [value,setValue] = useState('')

    const handlerFieldMessage = e => {
        if (e.key === 'Enter'){
            if(isAuth){
                const review = {
                    user: {
                        img: user.img[0],
                        user_id:user.user_id,
                        fullName: user.name
                    },
                    message: value
                }
                setReview(review)
                setValue('')
            }else {
                setIsShowModalAuth(true)
            }
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size='sm'
            centered
            contentClassName='modal-repair'
        >
            <Modal.Header closeButton className='border-bottom-0 pb-0'>
                <Modal.Title
                    className='font-s-20 fw-normal'
                >
                    Все отзывы
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div >

                    {reviews.map( (review,i) =>
                        <div key={i}>
                            <div className='d-flex align-items-center mb-2 '>
                                {review.user.img ?
                                    <Image
                                    height={40}
                                    width={40}
                                    src={`${process.env.REACT_APP_API_URL}${review.user.img}`}
                                 />
                                 :
                                    <DefaultUserSvg height={40} width={40} />
                                }
                                <div className='ms-2 font-s-14'>{review.user.fullName}</div>
                            </div>
                            <p className='font-s-12 p-review-product-card'>{review.message}</p>
                            <hr />
                        </div>
                    )}
                </div>

                <div className='position-relative'>
                    <Form.Control
                        placeholder='Оставить отзыв...'
                        className='form-control-review-product-card shadow-mine'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyPress={(e) => handlerFieldMessage(e)}
                    />
                </div>

            </Modal.Body>
            {!isAuth && <ModalAuth onHide={() => setIsShowModalAuth(false)} show={isShowModalAuth}/>}
        </Modal>
    );
};

export default ModalReviews;
/*
{
    user: {
        img: imgDefaultUser,
            user_id:'auth_1',
            fullName: 'Василий Пупкин'
    },
    message: 'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.',
},*/