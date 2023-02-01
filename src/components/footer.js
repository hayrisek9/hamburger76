import React from 'react'

import { FaInstagram} from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


function footer() {
  return (
    <div className='footer'>
        <div className='social-media'>
            
            <FaInstagram/>
            <FaTwitter/>
            <FaFacebook/>
        </div>
        <p>&copy; 2022 burger76.com</p>
    </div>
  )
}

export default footer