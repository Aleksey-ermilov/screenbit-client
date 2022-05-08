import React from 'react';
import { Image, ListGroup, Tab, Card, Col,Row,Container} from "react-bootstrap";

import Header from "../components/Header";
import EmptyListMes from "../components/EmptyListMes";

import phone from '../icons/png/img-phone.png'

const StatusOrder = () => {
    const option = { year: 'numeric', month: 'numeric', day: 'numeric' }
    return (
        <div className='margin-bottom-footer '>
            <Header className='header-bar mb-4  '  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div className='  '>
                        Статус заказа
                    </div>

                </div>
            </Header>

            <div className='head-margin-80' >
                <Tab.Container defaultActiveKey="#orders">
                    <ListGroup horizontal>
                        <ListGroup.Item action href="#orders" className='z-index-0 font-s-24 pb-2 list-group-mess'>
                            Товары
                        </ListGroup.Item>

                        <ListGroup.Item action href="#repair" className='z-index-0 font-s-24 pb-2 list-group-mess'>
                            Ремонт
                        </ListGroup.Item>
                    </ListGroup>

                    <div className='px-3' >
                        <Tab.Content className='mt-3' >
                            <Tab.Pane eventKey="#repair">
                                {
                                    statusRepair.length ?
                                        statusRepair.map( item =>
                                            <Card key={item.id} className='mb-3 py-2 shadow-mine secondary'>
                                                <Container>
                                                    <div className='font-s-16 mb-2'>Ремонт №{item.repair_id}</div>
                                                    <div className='font-s-12'>
                                                        <Row >
                                                            <Col xs={6} >Товар: {item.device}</Col>
                                                            <Col xs={6}>Статус - {item.status}</Col>
                                                        </Row>
                                                        <Row className='d-flex justify-content-between'>
                                                            <Col xs={6}>Причина поломки: {item.breakage}</Col>
                                                            <Col xs={6}>Ожидаемая дата починки - {new Date(item.date_repair).toLocaleDateString('ru-RU',option)}</Col>
                                                        </Row>
                                                        <Row className='d-flex justify-content-between'>
                                                            <Col xs={6}>Ремонт: {item.repair}</Col>
                                                            <Col xs={6}>Дата доставки - {new Date(item.date_delivery).toLocaleDateString('ru-RU',option)}</Col>
                                                        </Row>
                                                    </div>
                                                </Container>
                                            </Card>
                                        )
                                        :
                                        <EmptyListMes mes={'Список пуст'} />
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="#orders">
                                <div>
                                    {
                                        statusOrder.length ?
                                            statusOrder.map( item =>
                                                <Card key={item.id} className='mb-3 p-2 shadow-mine secondary'>
                                                    <div className='d-flex justify-content-between mb-2'>
                                                        <Image src={item.img} width={120} height={120} />
                                                        <div >
                                                            <div className='font-s-14 mb-3'>{item.name}</div>
                                                            <div className='font-s-12'>{item.decs}</div>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='font-s-14'>
                                                            <div>Дата доставки</div>
                                                            <div>{new Date(item.date).toLocaleDateString('ru-RU',option)}</div>
                                                        </div>
                                                        <div className='font-s-16'>{item.price} Р</div>
                                                    </div>
                                                </Card>
                                            )
                                            :
                                            <EmptyListMes mes={'Список пуст'} />
                                    }
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>

                </Tab.Container>
            </div>

        </div>
    );
};

export default StatusOrder;

const statusOrder = [
    {
        id: '1',
        name: 'Смартфон Apple',
        img:phone,
        decs:'Экран, процессор, оперативная пмять, батарея',
        price: '84622',
        date: Date.now(),
    },
    {
        id: '2',
        name: 'Смартфон Samsung',
        img:phone,
        decs:'Экран, процессор, оперативная пмять, батарея',
        price: '50066',
        date: Date.now(),
    }
]

const statusRepair = [
    {
        id: '1',
        repair_id: '2568',
        device: 'Смартфон Huawei',
        breakage:'упал',
        repair: 'замена стекла',
        status: 'Идёт ремонт',
        date_repair: Date.now() + 1000000,
        date_delivery: Date.now() + 10000000,
    },
    {
        id: '2',
        repair_id: '298',
        device: 'Смартфон Huawei',
        breakage:'утанул',
        repair: 'замена телефона',
        status: 'Идёт ремонт',
        date_repair: Date.now() + 1000000,
        date_delivery: Date.now() + 10000000,
    }
]