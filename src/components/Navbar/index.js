import React from 'react';


const Navbar = () => {
  return (
     

  <nav>
    <div class="logo-container">
        <img id="logo-image" src="/logo.png" alt='Logo' />
    </div>
 
    <div class="links" >
        <div><a href="https://shibridge.org" target='_blank'>Home</a></div>
        <div><a href="https://shibridge.org/#about" target='_blank'>About</a></div>
        <div><a href="https://shibridge.org/#roadmap" target='_blank'>Roadmap</a></div>
    </div>
</nav>

  )
}

export default Navbar