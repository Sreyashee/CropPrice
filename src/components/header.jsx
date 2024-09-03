import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
let Header = () => {
    return (
      <header className="py-3 mb-3 border-bottom">
      <div className="container-fluid d-grid gap-3 align-items-center" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
        <div className="dropdown">
          
        </div>
  
        <div className="d-flex align-items-center">
          <form className="w-100 me-3" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
          </form>
  
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
             
    
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;


