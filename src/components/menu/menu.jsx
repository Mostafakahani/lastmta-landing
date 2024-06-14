import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useIsomorphicLayoutEffect } from "@gsap/react";

const menuList = [
  { path: "/", label: "خانه" },
  { path: "/work", label: "فروشگاه" },
  { path: "/about", label: "درباره ما" },
  { path: "/contact", label: "پنل کاربری" },
];

function Menu() {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    gsap.set(".menu-overlay", {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
    });
    gsap.set(".menu-link-item-holder", { y: 75 });
    tl.current = gsap
      .timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power1.inOut",
      })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
      });
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="fixed top-0 left-0 w-full z-10" ref={container}>
      <div className="flex justify-between items-center p-4">
        <div>
          <Link className="text-white" href="/">
            LasTMTA
          </Link>
        </div>
        <div className="cursor-pointer" onClick={toggleMenu}>
          <p className="text-white">menu</p>
        </div>
      </div>
      <div className="menu-overlay fixed top-0 left-0 w-full h-screen bg-lime-400 flex flex-col p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <Link href="/">LasTMTA</Link>
          </div>
          <div className="cursor-pointer" onClick={toggleMenu}>
            <p className="text-white">Close</p>
          </div>
        </div>
        <div
          className="text-black text-9xl leading-none cursor-pointer mb-8"
          onClick={toggleMenu}
        >
          &#x2715;
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <div>
            <div className="flex flex-col space-y-4">
              {menuList.map((link, index) => (
                <div className="menu-link-item clip-path-inset-0" key={index}>
                  <div className="menu-link-item-holder">
                    <Link href={link.path} legacyBehavior>
                      <a className="text-black text-6xl md:text-8xl font-normal">
                        {link.label}
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-x-8 mb-4">
            <div className="flex flex-col space-y-2">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
              <a href="#">Link 5</a>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#">Link 6</a>
              <a href="#">Link 7</a>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end">
          <p>View Link</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
