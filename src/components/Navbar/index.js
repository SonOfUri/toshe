import React from 'react';


const Navbar = () => {
  return (
     

  <nav>
    <div class="logo-container">
        <img id="logo-image" src="/logo.png" alt='Logo' />
    </div>
 
    <div class="links" >
        <div><a href="#" target='_blank'>Home</a></div>
        <div><a href="#t" target='_blank'>About</a></div>
        <div><a href="#" target='_blank'>Roadmap</a></div>
    </div>
</nav>

  )
}

export default Navbar