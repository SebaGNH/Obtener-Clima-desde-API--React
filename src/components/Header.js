import React from 'react'
import Formulario from './Formulario';
const Header = ({titulo}) => {
  return (
    <>
      <nav>
        <div className="nav-wrapper light-blue darken-2">
          <a href="#!" target="_blank" className='brand-logo'>{titulo}</a>
        </div>

        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <Formulario/>
              </div>
              <div className="col m6 s12">
                2
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;