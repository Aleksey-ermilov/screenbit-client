import React from 'react';
import {Card} from "react-bootstrap";

const UserCard = ({children, ...props}) => {
    return (
        <Card className='card-user shadow-mine secondary p-3 mb-3 ' {...props}>
            <div className='d-flex align-items-center'>
                {children}
            </div>
        </Card>
    );
};

export default UserCard;