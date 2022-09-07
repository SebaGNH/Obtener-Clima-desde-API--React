import React from 'react'
import Formulario from './Formulario';
const Header = ({titulo}) => {
  return (
    <>
      <nav>
        <div className="nav-wrapper light-blue darken-2">
          <a href="#!" target="_blank" className='brand-logo'>{titulo}</a>
        </div>


      </nav>
    </>
  );
}
export default Header;