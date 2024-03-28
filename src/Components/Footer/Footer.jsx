import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
  <div>
  

<footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">MOOZ.</h1>
        
    <h2>Contact</h2>
    
    <address>
      5534 Somewhere In. The World 22193-10212<br/>
              </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title"></h2>

      <ul class="nav__ul">
        <li>
          <a href="#">about us</a>
        </li>

        <li>
          <a href="#">careers</a>
        </li>
            
        <li>
          <a href="#">product</a>
        </li>
      </ul>
    </li>
    
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2023 MOOZ. All rights reserved.</p>
    
  </div>
</footer>
  </div>
  )
}

export default Footer
