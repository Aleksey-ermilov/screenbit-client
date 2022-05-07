import React from 'react';
import {Button, Image, Modal, Col,Row} from "react-bootstrap";

import imgDefaultGallery from '../../icons/png/img-default-gallery.png'
import EmptyListMes from "../EmptyListMes";

const ModalChangeImg = ({show,onHide,}) => {

    const handlerBtn = () => {

        onHide()
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size='sm'
            centered
            contentClassName='modal-repair'
        >
            <Modal.Header closeButton className='border-bottom-0 pb-0' />

            <div className='text-center font-s-18'>Последние фото</div>
            <hr />
            <Modal.Body >
                <div className='d-flex flex-wrap mb-4 gallery-box'>

                    {
                        imgs.length ? imgs.map( (item, i) =>
                            <Image className='gallery me-2 mb-2' src={item} key={i} />
                        )
                            :
                            <EmptyListMes />
                    }
                </div>

                <Button
                    className=' btn-gallery w-100 p-3 font-s-18 mb-1'
                    onClick={() => handlerBtn()}
                >Перейти в галерею</Button>
            </Modal.Body>
        </Modal>
    );
};

export default ModalChangeImg;

const imgs = [
    imgDefaultGallery,
    imgDefaultGallery,
    imgDefaultGallery,
    imgDefaultGallery,
    imgDefaultGallery,
    imgDefaultGallery,
    imgDefaultGallery,
    imgDefaultGallery,
    imgDefaultGallery,
    imgDefaultGallery,
    imgDefaultGallery,
    imgDefaultGallery,
    imgDefaultGallery
]