import React from 'react'
import { FaYoutube } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-info">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
        ></a>
        <span className="mb-3 mb-md-0 text-body-secondary">
          © 2024 The Generics
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <FaYoutube />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <FaSpotify />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <FaFacebook />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer