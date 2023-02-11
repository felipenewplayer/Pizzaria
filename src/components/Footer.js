import React from 'react';
import './Footer.css';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='socials_list'>
                <li><FaInstagram /></li>
                <li><FaTwitter /></li>
                <li><FaFacebook /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p> &copy; 2023 felipetechpizza.com</p>
        </footer>
    )
}
