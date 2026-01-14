import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaArrowUp } from "react-icons/fa";
import "./Footer.css";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const arrowRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (!arrowRef.current) return;

        // gentle up/down bobbing animation
        const ctx = gsap.context(() => {
            gsap.to(arrowRef.current, {
                y: -8,
                duration: 0.8,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
            });
        }, arrowRef);

        return () => ctx.revert();
    }, []);

    // register ScrollTrigger for scroll-based animations
    gsap.registerPlugin(ScrollTrigger);
    const leftside = useRef<HTMLDivElement | null>(null);
    const hasUserScrolled = useRef(false);
    useEffect(() => {
        const onFirstScroll = () => {
            hasUserScrolled.current = true;
            window.removeEventListener("scroll", onFirstScroll);
        };

        window.addEventListener("scroll", onFirstScroll, { passive: true });
        return () => window.removeEventListener("scroll", onFirstScroll);
    }, []);

    // animate location only when it scrolls into view (on scroll down)
    useEffect(() => {
        if (!leftside.current) return;

        const ctx = gsap.context(() => {
            // create the animation paused so it doesn't run on mount
            const anim = gsap.fromTo(
                leftside.current,
                { x: -400, opacity: 10 },
                { x: 0, opacity: 1, duration: 1.25, ease: "power2.out", paused: true, immediateRender: false }
            );

            // create a ScrollTrigger that plays the animation only when scrolling down into view
            // and only after the user has actually scrolled (prevents running on initial render)
            ScrollTrigger.create({
                trigger: leftside.current,
                start: "top bottom", // when top of element hits bottom of viewport
                end: "bottom top",   // when bottom of element leaves top of viewport
                       // enable markers during development
                onEnter: () => {
                    if (!hasUserScrolled.current) return; // ignore on initial refresh/render
                    // restart so it plays every time we scroll down to it
                    anim.restart();
                },
            });
        }, leftside);

        return () => ctx.revert();
    }, []);

    const rightside = useRef<HTMLDivElement | null>(null);
    // flag to detect whether the user has scrolled (prevents firing on initial render)
    const hasUserScroll = useRef(false);

    // set the flag once the user scrolls the page
    useEffect(() => {
        const onFirstScroll = () => {
            hasUserScroll.current = true;
            window.removeEventListener("scroll", onFirstScroll);
        };

        window.addEventListener("scroll", onFirstScroll, { passive: true });
        return () => window.removeEventListener("scroll", onFirstScroll);
    }, []);

    // animate location only when it scrolls into view (on scroll down)
    useEffect(() => {
        if (!rightside.current) return;

        const ctx = gsap.context(() => {
            // create the animation paused so it doesn't run on mount
            const anim = gsap.fromTo(
                rightside.current,
                { x: 400, opacity: 10 },
                { x: 0, opacity: 1, duration: 1.25, ease: "power2.out", paused: true, immediateRender: false }
            );

            // create a ScrollTrigger that plays the animation only when scrolling down into view
            // and only after the user has actually scrolled (prevents running on initial render)
            ScrollTrigger.create({
                trigger: rightside.current,
                start: "top bottom", // when top of element hits bottom of viewport
                end: "bottom top",   // when bottom of element leaves top of viewport
                       // enable markers during development
                onEnter: () => {
                    if (!hasUserScroll.current) return; // ignore on initial refresh/render
                    // restart so it plays every time we scroll down to it
                    anim.restart();
                },
            });
        }, rightside);

        return () => ctx.revert();
    }, []);


    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left"  ref={leftside}>
                    <div className="location">
                        <FaHome size={20}
                            style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>1/732G,
                                KannarPalayam</p>
                            <p>Coimbatore, TamilNadu</p>
                        </div>
                    </div>
                    <div className="phone">
                        <Link to="tel:8760588129">
                        <h4 className="call"><FaPhone size={20}
                            style={{ color: "#fff", marginRight: "2rem" }} />8760588129</h4>
                        </Link>
                    </div>
                    <div className="email">
                        <Link to="mailto:jagajith37@gmail.com">
                        <h4 className="call"><FaMailBulk size={20}
                            style={{ color: "#fff", marginRight: "2rem" }} />jagajith37@gmail.com</h4>
                        </Link>
                    </div>
                </div>

                <div className="right" ref={rightside}>
                    <h4>About Me</h4>
                    <p>This is me Jagajith, A Full Stack Developer. I enjoy discussing new projects and design challenges.</p>
                    <div className="social">
                        <Link to = {"https://www.facebook.com/jith.jaga"}>
                        <FaFacebook
                            size={30} style=
                            {{ color: "rgb(38, 128, 128)", marginRight: "1rem" }} />
                        </Link>
                        <Link to = {"https://www.linkedin.com/in/jagajithp"}>
                        <FaLinkedin
                            size={30} style=
                            {{ color: "rgb(38, 128, 128)", marginRight: "1rem" }} />
                        </Link>
                        <Link to = {"https://www.instagram.com/jaga._23"}>
                        <FaInstagram
                            size={30} style=
                            {{ color: "rgb(38, 128, 128)", marginRight: "1rem" }} />
                        </Link>
                    </div>
                    
                </div>
            </div>
            <div style={{ textAlign: "right", marginTop: "1rem", paddingRight: "45px" }}>
                {/* Back-to-top button is positioned with CSS; kept here for layout fallback */}
                <button
                    ref={arrowRef}
                    className="back-to-top"
                    onClick={scrollToTop}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            scrollToTop();
                        }
                    }}
                    aria-label="Back to top"
                    title="Back to Top"
                >
                    <FaArrowUp size={20} />
                </button>
            </div>
        </div>
    );
};

export default Footer;