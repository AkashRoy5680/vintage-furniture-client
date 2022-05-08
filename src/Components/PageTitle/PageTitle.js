import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({title}) => {
    return (
        <Helmet><title>{title}-Vintage Furniture Hub</title></Helmet>
    );
};

export default PageTitle;