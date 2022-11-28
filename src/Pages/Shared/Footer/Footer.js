import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../project-img/footer.jpg';


const Footer = () => {
    return (
        <footer
        style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}
         className="p-10 mt-8 ">
        <div className='footer text-white'>
            <div>
          <span className="footer-title">Services</span> 
          <Link to="/" className="link link-hover">Second Hand Books</Link>
          <Link to="/" className="link link-hover">New Books</Link>
          <Link to="/" className="link link-hover">Old Books</Link>
          <Link to="/" className="link link-hover">Literature Books</Link>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <Link to="/" className="link link-hover">About us</Link>
          <Link to="/" className="link link-hover">Contact</Link>
          <Link to="/" className="link link-hover">Email</Link>
          <Link to="/" className="link link-hover">Twitter</Link>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <Link to="/" className="link link-hover">Terms of Condition</Link>
          <Link to="/" className="link link-hover">Privacy policy</Link>
        </div>
            </div>
        <div className='text-center text-white mt-12'>
            <p>Copyright © 2022 - All right reserved by Second-Hand Books Ltd.</p>
        </div>
      </footer>
    );
};

export default Footer;