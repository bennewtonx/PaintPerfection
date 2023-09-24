import React from 'react'
import ScrollAnimationLeft from '../../Components/ScrollAnimationLeft'
import ScrollAnimationMiddle from '../../Components/ScrollAnimationMiddle'
import ScrollAnimation from '../../Components/ScrollAnimation'
import CustomScrollbar from '../../Components/CustomScrollbar'
import { motion, useScroll } from 'framer-motion';
import './Homepage.css'

function Homepage() {

    const { scrollY, scrollYProgress } = useScroll(); // Track scroll position and progress

    const scrollToOverview = () => {
        const overviewContainer = document.querySelector('.overview-container');
        
        if (overviewContainer) {
          overviewContainer.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
  return (
    <div className='homepage-container'>
        <CustomScrollbar scrollYProgress={scrollYProgress} />
        <div className='banner-container'>
            <ScrollAnimation threshold={0.5}>
            <div className='banner-text'>
                <p className='banner-name'>Paint Perfection</p>
            <h1>Transform your space today</h1>
            <a className='banner-button' onClick={scrollToOverview}>Get Started</a>
            </div>
            </ScrollAnimation>
            <ScrollAnimationLeft threshold={0.5}>
            <div className='banner-images'>
                <div className='top-left'></div>
                <div className='top-right'></div>
                <div className='left'></div>
                <div className='middle'></div>
                <div className='right'></div>
                <div className='bottom-left'></div>
                <div className='bottom-right'></div>
            </div>
            </ScrollAnimationLeft>
        </div>
        <div className='overview-container'>
            <ScrollAnimationMiddle threshold={0.5}>
            <div className='overview-text'>


            <h1 className='overview-heading'>Your Go-To Painter</h1>
            <p>Welcome to the world of vibrant colors and meticulous craftsmanship, 
                where every brushstroke counts. Our painting expert, 
                Gypsy, is the go-to choice for homeowners and 
                businesses in-and-around Newcastle 
                seeking the highest quality painting service.
            </p>
            <div className='stats-container'>
                <div className='jobs-done'>
                    <h1>43</h1>
                    <p>Jobs done</p>
                </div>
                <div className='jobs-done'>
                    <h1>43</h1>
                    <p>Homes Transformed</p>
                </div>
                <div className='jobs-done'>
                    <h1>41</h1>
                    <p>5* Reviews</p>
                </div>
            </div>
            </div>
            </ScrollAnimationMiddle>
        </div>
        <div className='services-container'>
            <ScrollAnimation threshold={0.5}>
            <div className='service-one'>
                <img className='service-one-img' src='public\Screenshot_20230922-144211 (1).png'/>
                <h3>Interior</h3>
                <p>Our expertise will give your homes interior the glow-up it 
                    deserves! Whether only one room needs a splash of colour or you 
                    need a full-home makeover, we have you covered! 
                </p>
            </div>
            </ScrollAnimation>
            <ScrollAnimationLeft threshold={0.5}>
            <div className='service-two'>
                <img className='service-two-img' src='/Screenshot_20230922-144545.png'/>
                <h3>Exterior</h3>
                <p>A home is only as good as the exterior. Why settle for anything 
                    less than your dream aesthetic. We will provide a 5* service to 
                    make your home the talk of the street.
                </p>
            </div>
            </ScrollAnimationLeft>
        </div>
        <div className='reviews-container'>
            <ScrollAnimation threshold={0.5}>
            <div className='review-one'>
                <p>I'd been looking for a female decorator for a while then 
                    I came across Paint Perfection on Facebook. The next day 
                    Gypsy came out and gave me a quote! I can not fault Gypsy's 
                    work, she's efficient, VERY precise, cleans as she works and 
                    leaves your home immaculate. Most of all... I had some ridiculous 
                    quotes however, Gypsy beat them all. 10/10!
                </p>
                <p>Diane - 16/03</p>
            </div>
            </ScrollAnimation>
            <ScrollAnimationLeft threshold={0.5}>
            <div className='review-two'>
            <p>⭐⭐⭐⭐ Thank you for a fantastic service, can't recommend enough. 
                We hadn't anticipated the walls would require 3 coats of paint to cover 
                the colour underneath, Gypsy never stopped, she worked so hard all day 
                to get it finished for us. Doors and Skirting Boards look great too! ⭐⭐⭐⭐
                </p>
                <p>Kirsty - 18/05</p>
            </div>
            </ScrollAnimationLeft>
        </div>
        <div className='contact-container'>
            <ScrollAnimationMiddle threshold={0.5}>
            <div className='contact-text'>
                <h1>Ready to get started?</h1>
                <p className='contact-message'>Experience the difference a professional painter can 
                    make in your space. Contact us today to start your 
                    painting project. </p>
                <h3>04750375784</h3>
            </div>
            </ScrollAnimationMiddle>
        </div>
    </div>
  )
}

export default Homepage