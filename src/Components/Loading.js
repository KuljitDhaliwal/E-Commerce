import React from 'react'
import loading from './Assets/loading.gif' ;

function Loading() {
  return (
    <div>
          <div className="row">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <img src={loading} alt="" height='100px'/>
              </div>
        </div>
    </div>
  )
}

export default Loading
