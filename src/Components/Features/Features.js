import React from 'react'
import './Features.css'
import { FaShippingFast, FaMoneyCheckAlt } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";






function Features() {
    const iconStyle = {
        fontSize: "25px",
        textAlign: "center"
    }


  return (
    <div>
          <div className="features p-5">
            <div className="container">
                  <div className="row">
                  <div className="col-md-3 col-6 text-center d-flex justify-content-center">
                      <div className="feature-card">
                          <FaMoneyCheckAlt style={iconStyle}/>
                          <h5>Secured Payment</h5>
                          <p>Payment Cards Accepted</p>
                      </div>
                      </div>
                      <div className="col-md-3 col-6 text-center d-flex justify-content-center">
                      <div className="feature-card">
                          <GiReturnArrow  style={iconStyle}/>
                          <h5>30 Days Returns</h5>
                          <p>For an Exchange Product</p>
                      </div>
                  </div>
                  <div className="col-md-3 col-6 text-center d-flex justify-content-center mt-3 mt-md-0">
                      <div className="feature-card">
                          <FaShippingFast style={iconStyle}/>
                          <h5>Free Shipping</h5>
                          <p>For all Orders Over $100</p>
                      </div>
                  </div>


                  <div className="col-md-3 col-6 text-center d-flex justify-content-center mt-3 mt-md-0">
                      <div className="feature-card">
                          <RiCustomerService2Fill style={iconStyle}/>
                          <h5>Support 24/7</h5>
                          <p>Contact us Anytime</p>
                      </div>
                  </div>
              </div>
            </div>
      </div>
      </div>

  )
}

export default Features
