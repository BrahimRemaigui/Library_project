import im1 from './imgs/gallery-01.png'
import im2 from './imgs/gallery-02.png'
import im3 from './imgs/gallery-03.jpg'
import im4 from './imgs/gallery-04.png'
import im5 from './imgs/gallery-05.jpg'
import im6 from './imgs/gallery-06.png'
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { AiOutlineDoubleRight } from "react-icons/ai";
import './Foter.css'
export default function Foter() {
    return (
        
        <div class="footer">
        <div class="container">
          <div class="box">
            <h3>Brahim Rm</h3>
            <ul class="social">
             
            </ul>
            <p class="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
            </p>
          </div>
          <div class="box">
            
            
          </div>
          <div class="box">
            <div class="line">
              <i class="fas fa-map-marker-alt fa-fw"></i>
              <div class="info">Algeria, Biskra, Zeribet El ouad, Way number 83</div>
            </div>
            <div class="line">
              <i class="far fa-clock fa-fw"></i>
              <div class="info">Business Hours: From 10:00 To 18:00</div>
            </div>
            <div class="line">
              <i class="fas fa-phone-volume fa-fw"></i>
              <div class="info">
                <span>+213665830677</span>
                <span>+213665856876</span>
              </div>
            </div>
          </div>
          <div class="box footer-gallery">
          
          <img decoding="async" src={im1} alt="" />
          <img decoding="async" src={im2} alt="" />
          <img decoding="async" src={im3} alt="" />
          <img decoding="async" src={im4} alt="" />
          <img decoding="async" src={im5} alt="" />
          <img decoding="async" src={im6} alt="" />
          
          </div>
        </div>
        <p class="copyright">Made With &lt;3 By BrahimRm</p>
      </div>

    )
}