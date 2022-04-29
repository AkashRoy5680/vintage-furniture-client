import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:"300px"}} className='w-100 d-flex text-align-center justify-content-center'>
            <Spinner animation="border" variant="warning" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="border" variant="warning" />
        </div>
    );
};

export default Loading;
