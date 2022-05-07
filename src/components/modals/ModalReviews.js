import React from 'react';
import { Modal,Image,Form} from "react-bootstrap";

const ModalReviews = ({show,onHide,reviews}) => {

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

                    {reviews.map( review => {

                        return <div key={review.user.user_id}>
                            <div className='d-flex align-items-center mb-2 '>
                                <Image height={40} width={40} src={review.user.img} />
                                <div className='ms-2 font-s-14'>{review.user.fullName}</div>
                            </div>
                            <p className='font-s-12 p-review-product-card'>{review.message}</p>
                            <hr />
                        </div>
                    })}
                </div>

                <div className='position-relative'>
                    <Form.Control
                        placeholder='Оставить отзыв...'
                        className='form-control-review-product-card shadow-mine'
                    />
                </div>

            </Modal.Body>
        </Modal>
    );
};

export default ModalReviews;