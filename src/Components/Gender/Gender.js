import React from 'react'
import './Gender.css'

function Gender() {
  return (
    <div>
          <div className="gender container">
              <div className="row gx-4">
                  <div className="col-md-6">                      
            <div className="gender-type">
              <div className="women"></div>
                        <div className="gender-text">
                            <h3>New Winter'24 <br /> Collection</h3>
                            <p>Catch the highlight in the roof</p>
                            <button className='btn'>Shop Now</button>
                        </div>        
                    </div>
                  </div>
                  <div className="col-md-6 mt-3 mt-md-0">
            <div className="gender-type ">
              <div className="men"></div>
                        <div className="gender-text">
                            <h3>New Winter'24 <br /> Collection</h3>
                            <p>Catch the highlight in the roof</p>
                            <button className='btn'>Shop Now</button>
                        </div>        
                    </div>  
                  </div>
              </div>
      </div>
    </div>
  )
}

export default Gender
