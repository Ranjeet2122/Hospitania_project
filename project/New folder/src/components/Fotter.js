import React from 'react'
import style from '../Style/Footer.module.css'
//import img1 from '../Images/footer.png'


const ULSize={
  fontWeight:"bold"
}
function Footer() {
  return (
    <>
    <div className={style.mainfooter}>
      <div className={style.footerflex}>
            <div>
            <img src='https://hospitania.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=256&q=75' alt="" height={30}/>
            <p className={style.para}> Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Dolore accusantium pariatur aliquid facere nobis<br/> harum eveniet veritatis debitis officia necessitatibus.</p>
            </div>

            <div className={style.footerFlexContent}>
              <ul className={`${style.footerUL} `}>
                <span style={ULSize}> UseFull Link</span>          
              <li>Documentation</li>
              <li>Support</li>
              <li>Privacy and terms</li>
              <li>SiteMap</li>
              <li>Customers</li>
              </ul>
            </div>

            <div className={style.footerFlexContent}>

            <ul className={style.footerUL}>
            <span style={ULSize}> Policy</span> 
              <li>Privacy Policy</li>
              <li>Terms and Condition</li>
              <li>Privacy and terms</li>
              <li>Retrun Policy</li>
              <li>Refund Policy</li>
              <li>Ip policy</li>
              </ul>

            </div>
            <div className={style.footerFlexContent}>
            <ul className={style.footerUL} >
            <span style={ULSize}> UseFull Link</span> 
              <li>Facebook</li>
              <li>Google</li>
              <li>Pinterest </li>
              <li>LinkedIn</li>
              <li>Dribble</li>
            </ul>
            </div>
          
          
            
      </div>
      "NEW ADDED"
      "Changes by TAMMANA"
    </div>
    </>
  )
}

export default Footer