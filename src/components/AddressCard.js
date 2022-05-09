import React from 'react';
import {Card, Image} from "react-bootstrap";
import imgDelete from "../icons/png/delete.png";
import DeleteSvg from "../icons/svgComponents/DeleteSvg";

const AddressCard = ({item, remove}) => {
    return (
        <Card className='p-3 mb-2 secondary card-address font-s-18 z-index-0 shadow-mine'>
            <div className='d-flex justify-content-between'>
                <div>{item.address}</div>
                <div onClick={() => remove(item.id)}>
                    <DeleteSvg className='ms-3' height={15} width={15} />
                </div>
            </div>
        </Card>
    );
};

export default AddressCard;