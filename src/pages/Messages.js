import React from 'react';
import { Image, ListGroup, Tab} from "react-bootstrap";
import {useNavigate } from "react-router-dom";

import Header from "../components/Header";
import ListCardMessages from "../components/ListCardMessages";

import person from "../icons/png/person.png";
import phone from "../icons/png/img-phone.png";

import {MESSAGE_ROUTER, USER_ROUTER} from "../consts";

const Messages = () => {
    const navigate = useNavigate();

    const messagesRepair = messages.filter( item => item.type === 'repair')
    const messagesOrder = messages.filter( item => item.type === 'order')

    const handlerCardNavigation = item => {
        navigate(
            MESSAGE_ROUTER,
            {
                state:
                    {
                        mes: item.message,
                        subject: item.subject,
                    }
            }
        )
    }

    return (
        <div className='margin-bottom-footer '>
            <Header className='header-bar mb-4  '  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div className='  '>
                        Сообщения
                    </div>
                    <Image onClick={() => navigate(USER_ROUTER)} height={15} width={15} src={person} />
                </div>
            </Header>

            <div >
                <Tab.Container defaultActiveKey="#repair">
                    <ListGroup horizontal>
                        <ListGroup.Item action href="#repair" className='z-index-0 font-s-24 pb-2 list-group-mess'>
                            Ремонт
                        </ListGroup.Item>

                        <ListGroup.Item action href="#orders" className='z-index-0 font-s-24 pb-2 list-group-mess'>
                            Заказы
                        </ListGroup.Item>
                    </ListGroup>

                    <div className='p-3' >
                        <Tab.Content className='mt-3' >
                            <Tab.Pane eventKey="#repair">
                                <ListCardMessages arr={messagesRepair} navigation={item => handlerCardNavigation(item)} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#orders">
                                <div>
                                    <ListCardMessages arr={messagesOrder} navigation={item => handlerCardNavigation(item)} />
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>

                </Tab.Container>
            </div>

        </div>
    );
};

export default Messages;

const messages = [
    {
        id:'1',
        product_id: 'prod_1',
        imgProduct: phone,
        user_id: 'auth_2',
        admin_id: 'admin_15',
        actual: true,
        date: Date.now(),
        subject: 'Apple 14 Apple 14 Apple 14 Apple 14 Apple 14 Apple 14 Apple 14',
        type: 'repair',
        message: [
            {
                id: 'auth_2',
                mes: 'Привет'
            },
            {
                id: 'auth_2',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_15',
                mes: 'Привет'
            },
            {
                id: 'admin_15',
                mes: 'Есть'
            },
            {
                id: 'admin_15',
                mes: 'Тебе чего'
            },
            {
                id: 'auth_2',
                mes: 'Привет'
            },
            {
                id: 'auth_2',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_15',
                mes: 'Привет'
            },
            {
                id: 'admin_15',
                mes: 'Есть'
            },
            {
                id: 'admin_15',
                mes: 'Тебе чего'
            },

            {
                id: 'auth_2',
                mes: 'Привет'
            },
            {
                id: 'auth_2',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_15',
                mes: 'Привет'
            },
            {
                id: 'admin_15',
                mes: 'Есть'
            },
            {
                id: 'admin_15',
                mes: 'Тебе чего'
            },
            {
                id: 'auth_2',
                mes: 'Привет'
            },
            {
                id: 'auth_2',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_15',
                mes: 'Привет'
            },
            {
                id: 'admin_15',
                mes: 'Есть'
            },
            {
                id: 'admin_15',
                mes: 'Тебе чего'
            },
            {
                id: 'auth_2',
                mes: 'Привет'
            },
            {
                id: 'auth_2',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_15',
                mes: 'Привет'
            },
            {
                id: 'admin_15',
                mes: 'Есть'
            },
            {
                id: 'admin_15',
                mes: 'Тебе чего'
            },
            {
                id: 'auth_2',
                mes: 'Привет'
            },
            {
                id: 'auth_2',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_15',
                mes: 'Привет'
            },
            {
                id: 'admin_15',
                mes: 'Есть'
            },
            {
                id: 'admin_15',
                mes: 'Тебе чего'
            },
            {
                id: 'auth_2',
                mes: 'Привет'
            },
            {
                id: 'auth_2',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_15',
                mes: 'Привет'
            },
            {
                id: 'admin_15',
                mes: 'Есть'
            },
            {
                id: 'admin_15',
                mes: 'Тебе чего'
            },
            {
                id: 'auth_2',
                mes: 'Привет'
            },
            {
                id: 'auth_2',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_15',
                mes: 'Привет'
            },
            {
                id: 'admin_15',
                mes: 'Есть'
            },
            {
                id: 'admin_15',
                mes: 'Тебе чего'
            },

        ]
    },
    {
        id:'2',
        product_id: 'prod_3',
        imgProduct: phone,
        user_id: 'auth_1',
        admin_id: 'admin_1',
        actual: true,
        date: Date.now(),
        subject: 'Samsung A51',
        type: 'repair',
        message: [
            {
                id: 'auth_1',
                mes: 'Привет'
            },
            {
                id: 'auth_1',
                mes: 'Есть чё?'
            },
            {
                id: 'admin_1',
                mes: 'Привет'
            },
            {
                id: 'admin_1',
                mes: 'Есть'
            },
            {
                id: 'admin_1',
                mes: 'Тебе чего'
            },
        ]
    },
]