import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [ isScrollTop, setIsScrollTop] = useState(false);

    const handleScroll = (e) => {
        setIsScrollTop(e.target.scrollTop > 400);
    }
    const scrollToTop = () => {
        document.body.scrollTo(0, 0);
    }	
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);      
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isScrollTop ?
                (<div className={isScrollTop ? 'scroll-top-top fixed' : 'scroll-top-top'} style={{backgroundColor:"black"}}>
                    <button type='button' className='scroll-top-btn' onClick={scrollToTop} id='scroller'>
                        <span className='d-flex'>
                            up
                        </span>
                    </button>
                </div>) : ''
            }
        </>
    )
}

export default ScrollToTop
