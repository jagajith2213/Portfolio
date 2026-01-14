import { Link } from 'react-router-dom';
import './AboutContent.css';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import photos from "../assets/Image_5.jpg";
import photo from "../assets/Image_6.jpg";


const AboutContent: React.FC = () => {

    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const textRef = useRef<HTMLParagraphElement | null>(null);

    // simple "SplitText" implementation: wrap each character in a span
    useEffect(() => {
        const el = headingRef.current;
        if (!el) return;

        const original = el.textContent || '';
        // split into characters (preserve spaces)
        const chars = Array.from(original);

        el.innerHTML = chars
            .map((ch) => (ch === ' ' ? '<span class="char space">&nbsp;</span>' : `<span class="char">${ch}</span>`))
            .join('');

        const charEls = el.querySelectorAll('.char');

        const ctx = gsap.context(() => {
            gsap.from(charEls, {
                y: 40,
                opacity: 0,
                duration: 2,
                ease: 'power3.out',
                stagger: 0.03,
            }); 
        }, headingRef);

        return () => {
            ctx.revert();
            // restore original text to avoid unexpected markup if component re-renders/unmounts
            if (el) el.textContent = original;
        };
    }, []);

    useEffect(() => {
        const el = textRef.current;
        if (!el) return;
        const original = el.textContent || '';
        const words = original.split(' ');
        el.innerHTML = words
            .map((word) => `<span class="word">${word}&nbsp;</span>`)
            .join('');
        const wordEls = el.querySelectorAll('.word');

        const ctx = gsap.context(() => {
            gsap.from(wordEls, {
                y: 40,
                opacity: 0,
                duration: 2,
                ease: 'power3.out',
                stagger: 0.05,
            });
        }
        , textRef);

        return () => {
            ctx.revert();
            if (el) el.textContent = original;
        };
    }, []);

    return (
        <div className="about">
            <div className="left">
                <h1 ref={headingRef}>Who  am I </h1>
                <p ref={textRef}>I am a passionate Full Stack Developer with experience in building responsive and user-friendly websites.</p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="image-container">
                    <div className="image-stack top">
                        <img src={photos} className="img" alt="Picture" />
                    </div>
                    <div className="image-stack bottom">
                    <img src={photo} className="img" alt="Picture 1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
