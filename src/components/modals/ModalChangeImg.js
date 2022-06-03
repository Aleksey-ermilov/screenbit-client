import React from 'react';
import { Image, Modal} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";

import EmptyListMes from "../EmptyListMes";

import {httpAddImg, httpChangeImg} from "../../http/userAPI";
import {setUser} from "../../store/user/actionUser";
import {setError} from "../../store/app/actionApp";

const ModalChangeImg = ({show,onHide,getImg}) => {
    const {user} = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handlerBtn = (e) => {
        const i = e.target.files[0]
        const formData = new FormData();
        formData.append('img',i)
        formData.append('user_id',user.user_id)

        httpAddImg(formData).then(data => {
            dispatch(setUser({...user,img: data.img}))
            getImg(data.img[0])
            onHide()
        }).catch(data => {
            dispatch(setError(data.response.data.message))
        })
    }

    const handlerImg = item => {
        httpChangeImg(item,user.user_id).then(data => {
            getImg(item)
        }).catch(data => {
            dispatch(setError(data.response.data.message))
        })
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
                        user.img.length ? user.img.map( (item, i) =>
                            <Image
                                onClick={() => handlerImg(item)}
                                className='gallery me-2 mb-2'
                                src={`${process.env.REACT_APP_API_URL}${item}`}
                                key={i} />
                        )
                            :
                            <EmptyListMes />
                    }
                </div>

                <label className="btn-gallery w-100 p-3 font-s-18 mb-1 text-center">
                    <input
                        type="file"
                        onChange={(e) => handlerBtn(e)}
                    />
                    Перейти в галерею
                </label>
            </Modal.Body>
        </Modal>
    );
};

export default ModalChangeImg;