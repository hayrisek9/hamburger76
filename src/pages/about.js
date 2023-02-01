import React from 'react'
import BannerImage from '../assets/1beef.jpg'


function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: ` url(${BannerImage})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p> A hamburger is a type of sandwich that involves a ground beef patty served between two halves of a round bun. Most of the time the meat is grilled or cooked in a hot skillet, though some recipes call for it to be baked. There are many different variations, and many restaurants, families, and individuals have their own preferred methods of preparation and added ingredients. The sandwich’s history is largely unknown, though food scholars often attribute it originally to Genghis Khan and the Mongolian army; the modern name is almost certainly from Hamburg, Germany, however, where grilling meat patties in the style of the modern hamburger allegedly first became popular.
            </p>
        </div>
    </div>
  )
}

export default About