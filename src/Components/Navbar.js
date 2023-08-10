import React from 'react'
import logo from '../assets/1682676527_Peppermint.png'
import search from '../assets/loupe.png'

export const Navbar = () => {
  return (
    <div class="nav">
    <div> <img src={logo} alt=""/>  </div>
    <a href="https://getpeppermint.co/">Home</a>
    <a href="https://getpeppermint.co/about-us/">About</a>
    <a href="https://getpeppermint.co/solutions/">Solutions</a>
    <a href="https://getpeppermint.co/products/">Products</a>
    <a href="https://getpeppermint.co/contacts/#">contacts</a>
   <img src={search} alt=""/>
   
</div>
  )
}
