import React from 'react';
import {useNavigate} from "react-router-dom";
import {Image,Button} from "react-bootstrap";

import Header from "../components/Header";

import {MAP_ROUTER, USER_ROUTER} from "../consts";

import Person from "../icons/svgComponents/Person";
import Marker from "../icons/svgComponents/Marker";

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
                        <><Marker height={13} width={13} /></>
                        <div className='ms-2'>Укажите город</div>
                    </div>
                    <div onClick={() => navigate(USER_ROUTER)} >
                        <Person height={15} width={15} />
                    </div>
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