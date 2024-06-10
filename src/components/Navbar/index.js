import React from 'react';
import logo from '../../intelai.png';


const Navbar = () => {
  return (
     

  <nav>
    <div class="logo-container">
        <img id="logo-image" src={logo} alt='Logo' />
    </div>
 
    <div class="links" >
      <a href="https://www.intelai.cc/" id="alink">
        Back Home &rarr;
      </a>
    </div>
</nav>

  )
}

export default Navbar