import React from 'react'
import "./about_us.css"  
function LifeCycle() {
  return (
    <div style={{backgroundImage:"/public/images/slide3.jpg"}}>
      
          <div className="progress_point">
          <ul>
            <li className="progress_image">
              <img src="/images/magic-wand.png"/><br/>
              
              <i class="fas fa-check"></i>
              <p>Select Design</p>
            </li>
            <li>
              <img src="/images/quotation.png"/><br/>
              <i class="fas fa-check"></i>
              <p>Final Quotation</p>
            </li>
            <li>
              <img src="/images/welder.png"/><br/>
              <i class="fas fa-check"></i>
              <p>Manufacturing</p>
            </li>
            <li>
              <img src="/images/spray-paint.png"/><br/>
              <i class="fas fa-check"></i>
              <p>Paint</p>
            </li>
            <li>
              <img src="/images/accounting.png"/><br/>
              <i class="fas fa-check"></i>
              <p>Balance Clearance</p>
            </li>
            <li>
              <img src="/images/tracking.png"/><br/>
              <i className="fas fa-check"></i>
              <p>Shipment & Deliver</p>
            </li>
          </ul>
          </div>
    </div>
  )
}
export default LifeCycle;