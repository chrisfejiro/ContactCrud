import React from 'react'
import Logo from '../images/logo192.png'

const Header = () => {
  return (
    <div className='py-2 pl-2' style={{borderBottom:"1px solid #777"}}>
        <img src={Logo} alt="" style={{height:"40px",verticalAlign:"top"}} />
        <span className="h2 pt-4 m-2 text-white-50">
            Contact Book
        </span>

    </div>
  )
}

export default Header