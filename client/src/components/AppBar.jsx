// import React from 'react';
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const AppBar = () => {
    return (
        <Navbar className="bg-body-tertiary">
        <>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </>
      </Navbar>
    );
};

export default AppBar;