import React from 'react'
import manModel from '../Assets/manModel.jpeg'
import womanModel from '../Assets/womanGrey.avif'
import './ManWoman.css'

function ManWoman() {
  return (
    <div>
          <div className="ManWoman my-5">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="man">
                              <div className="man-img">
                              <img src={manModel} alt="" />
                              </div>
                              <div className="man-text text-center mt-5">
                                  <h1>Trendy <br />Lifestyle Collection</h1>
                                  <p>Unique Outfit for man!</p>
                                  <button className='btn'>Shop Collection</button>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="man d-flex flex-column flex-sm-column-reverse">
                          <div className="man-img mt-5">
                              <img src={womanModel} alt="" />
                              </div>
                              <div className="man-text text-center mt-5">
                                  <h1>Perfect Match <br />for Elegant Fashion</h1>
                                  <p>Catch the highlight in the roof</p>
                                  <button className='btn'>Shop Collection</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default ManWoman
