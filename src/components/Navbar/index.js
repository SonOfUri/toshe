import React from 'react';


const Navbar = () => {
  return (
     

  <nav>
    <div class="logo-container">
        <img id="logo-image" src="/logo.png" alt='Logo' />
    </div>
 
    <div class="links" >
        <div><a href="https://tametoshe.com/" target='_blank'>Home</a></div>
        <div><a href="https://tametoshe.com/#about" target='_blank'>About</a></div>
        <div><a href="https://tametoshe.com/#services" target='_blank'>Roadmap</a></div>
    </div>
</nav>

  )
}

export default Navbar