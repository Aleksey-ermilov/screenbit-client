import React from 'react';
import {Card, Image} from "react-bootstrap";
import EmptyListMes from "./EmptyListMes";

const ListCardMessages = ({arr,navigation}) => {
    return (
        <div>
            {
                arr.length ? arr.map(item =>
                    <Card className='p-3 mb-3' key={item.id} onClick={ () => navigation(item)} >
                        <div className='d-flex'>
                            <Image src={item.imgProduct} width={50} height={50} />
                            <div className='font-s-20 subject-messages ms-2'>{item.subject}</div>
                        </div>
                    </Card>
                )
                :
                    <EmptyListMes mes={'Список пуст'} />
            }
        </div>
    );
};

export default ListCardMessages;