import './Footer.css';
import React from 'react';
function Footer() {
  let fecha=new Date().getFullYear();
  return (
          <footer>
            <div>
              <p><a rel="noreferrer" href='https://github.com/jovadev/ahorcado' target="_blank">Repositorio de github</a> </p>
            </div>
            <p>© {fecha} Autor: jova.dev</p>
            <div className="repositorio">
                    <div>
                      <a rel="noreferrer" href="https://github.com/jovadev" target="_blank" >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
            </div>
          </footer>
  );
}
export default Footer;
