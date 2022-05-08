import React from 'react';
import {useNavigate} from "react-router-dom";
import {Image,Button} from "react-bootstrap";

import Header from "../components/Header";

import {MAP_ROUTER, USER_ROUTER} from "../consts";

import person from "../icons/png/person.png";
import marker from "../icons/png/marker.png";
import EmptyListMes from "../components/EmptyListMes";
import AddressCard from "../components/AddressCard";

const ListMap = () => {
    const navigate = useNavigate();

    const handlerDelete = id => {
        console.log(id)
    }
    return (
        <div className='margin-bottom-address '>
            <Header className='header-bar mb-3 head-z-index-5'  >
                <div className='d-flex justify-content-between font-s-16'>
                    <div className='d-flex align-items-center  '>
                        <><Image height={13} width={13} src={marker} /></>
                        <div className='ms-2'>Укажите город</div>
                    </div>
                    <Image onClick={() => navigate(USER_ROUTER)} height={15} width={15} src={person} />
                </div>
            </Header>

            <div className='px-3  head-margin-80 '>
                {
                    addresses.length ?
                        addresses.map( item =>
                            <AddressCard key={item.id} item={item} remove={handlerDelete} />
                            )
                        :
                        <EmptyListMes mes={'Список пуст'} />
                }
                <div>
                    <Button
                        onClick={() => navigate(MAP_ROUTER)}
                        className='p-3 secondary btn-address '
                    >Добавить пункт</Button>
                </div>

            </div>

        </div>
    );
};

export default ListMap;

const addresses = [
    {
        id:'1',
        address: 'г.Армавир у.Красных фонарей 45, дом. 9, кв. 24'
    },
    {
        id:'2',
        address: 'г.Армавир у.Красных фонарей 45, дом. 9, кв. 24'
    },{
        id:'3',
        address: 'г.Армавир у.Красных фонарей 45, дом. 9, кв. 24'
    },
    {
        id:'4',
        address: 'г.Армавир у.Красных фонарей 45, дом. 9, кв. 24'
    },
    {
        id:'5',
        address: 'г.Армавир у.Красных фонарей 45, дом. 9, кв. 24'
    },
    {
        id:'6',
        address: 'г.Армавир у.Красных фонарей 45, дом. 9, кв. 24'
    },{
        id:'7',
        address: 'г.Армавир у.Красных фонарей 45, дом. 9, кв. 24'
    },
    {
        id:'8',
        address: 'г.Армавир у.Красных фонарей 45, дом. 9, кв. 24'
    },
    {
        id:'9',
        address: 'г.Армавир у.Красных фонарей 45, дом. 9, кв. 24'
    },
    {
        id:'10',
        address: 'г.Армавир у.Красных фонарей 45, дом. 9, кв. 24'
    },{
        id:'11',
        address: 'г.Армавир у.Красных фонарей 45, дом. 9, кв. 24'
    },
    {
        id:'12',
        address: 'г.Армавир у.Красных фонарей 45, дом. 9, кв. 24'
    },

]