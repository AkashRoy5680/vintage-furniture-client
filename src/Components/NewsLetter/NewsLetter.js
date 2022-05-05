import React from 'react';
import { MDBCol, MDBIcon } from "mdbreact";
const NewsLetter = () => {
    return (
        <div className='mt-2'>
            <h6>Subscribe to</h6>
            <h3>Our NewsLetter</h3>
            <p><small>promotions,New products and Sales.Directly to your inbox.</small></p>
            <MDBCol md="12">
      <form className="form-inline mt-4 mb-4 w-50 mx-auto">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </form>
    </MDBCol>
        </div>
    );
};

export default NewsLetter;