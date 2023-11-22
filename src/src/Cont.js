import React from 'react'
import im1 from './imgs/discount.png'
import './dis.css'
export default function Cont() {
  return (
    <div className=''>
    <div class="discount" >
    <div class="image">
      <div class="content1">
        <h2>We Have A Discount</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur, recusandae
          ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae. Totam vel similique
          laborum dicta aperiam odit doloribus corporis.
        </p>
        <img src={im1} alt="" />
      </div>
    </div>
    <div class="form">
      <div class="content1">
        <h2>Request A Discount</h2>
        <form action="">
          <input class="input" type="text" placeholder="Your Name" name="name" />
          <input class="input" type="email" placeholder="Your Email" name="email" />
          <input class="input" type="text" placeholder="Your Phone" name="mobile" />
          <textarea class="input" placeholder="Tell Us About Your Needs" name="message"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  </div>
  </div>
  )
}
