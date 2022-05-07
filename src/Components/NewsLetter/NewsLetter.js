import React from 'react';
const NewsLetter = () => {
    return (
        <div className='m-4'>
            <h6>Subscribe to</h6>
            <h3>Our NewsLetter</h3>
            <p><small>promotions,New products and Sales.Directly to your inbox.</small></p>
           
          <div class="input-group mb-3 w-50 mx-auto">
           
          <input type="text" class="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div class="input-group-append">
          <span class="input-group-text bg-dark text-white" id="basic-addon2">subscribe now</span>
          </div>
          </div>
          
        </div>
    );
};

export default NewsLetter;