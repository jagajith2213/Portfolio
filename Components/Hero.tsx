import "./Hero.css";
import React from "react";
import { gsap } from "gsap";

interface HeroProps {
    heading: string;
    text: string;
}

const Hero: React.FC<HeroProps> = (props) => {
    const headingRef = React.useRef<HTMLHeadingElement | null>(null);
    React.useEffect(() => {
        const el = headingRef.current;
        if (!el) return;
    }, []);
    const textRef = React.useRef<HTMLParagraphElement | null>(null);
    React.useEffect(() => {
        const el = textRef.current;
        if (!el) return;
        const original = el.textContent || '';
        const words = original.split(' ');
        el.innerHTML = words
            .map((word) => `<span class=\"word\">${word}</span>`)
            .join(' '); // join with normal space so words can wrap on small screens
        const wordEls = el.querySelectorAll('.word');

        const ctx = gsap.context(() => {
            gsap.from(wordEls, {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                stagger: 0.1,
                delay: 0.5, // delay start until after heading animation
            });
        }, textRef);

        return () => {
            ctx.revert();
            if (el) el.textContent = original;
        };
    }, []);
    return (
        <div className="hero">
           <div className="heading">
               <h1 ref={headingRef}>{props.heading}</h1>
               <p ref={textRef}>{props.text}</p>
               
           </div>
        </div>
    );
}

export default Hero;