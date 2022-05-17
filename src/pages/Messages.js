import React from 'react';
import {ListGroup, Tab} from "react-bootstrap";
import {useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'

import Header from "../components/Header";
import ListCardMessages from "../components/ListCardMessages";

import Person from "../icons/svgComponents/Person";

import {MESSAGE_ROUTER, USER_ROUTER} from "../consts";

const Messages = () => {
    const navigate = useNavigate();

    const { user, messages} = useSelector( state => state.user)

    const messagesRepair = messages.filter( item => item.type === 'repair')
    const messagesOrder = messages.filter( item => item.type === 'order')

    const handlerCardNavigation = item => {
        navigate(
            MESSAGE_ROUTER,
            {
                state:
                    {
                        id: item.id,
                        user_id: user.user_id,
                        mes: item.message,
                        subject: item.subject,
                    }
            }
        )
    }

    return (
        <div className='margin-bottom-footer '>
            <Header className='header-bar '  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div className='  '>
                        Сообщения
                    </div>
                    <div onClick={() => navigate(USER_ROUTER)}>
                        <Person height={15} width={15} />
                    </div>
                </div>
            </Header>

            <div className='head-margin-80'>
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