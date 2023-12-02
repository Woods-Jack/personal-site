"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useWindowSize } from "@/hooks/useWindowSize";

const Avatar = () => {
  const [imgOffset, setImgOffset] = useState(0);
  const isMobile = useWindowSize();

  const handleScroll = () => setImgOffset(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const attrs = `translate(-48%, calc(-25% + ${imgOffset * -0.3}px)) scale(${1 + 0.0005 * imgOffset})`;
  const attrsMobile = `translate(0%, ${imgOffset * -0.3}px) scale(${1 + 0.0005 * imgOffset})`;
  const parallax = isMobile ? attrsMobile : attrs;

  if (isMobile === null) {
    return <div className='avatar-wrapper'></div>
  };

  return (
    <div 
      className={`avatar-wrapper rounded-full overflow-x-hidden`}
      style={ { transform: `${parallax}`} }
    >
        <Image
          src='/avatar.jpg'
          width={0}
          height={0}
          sizes="100vw"
          alt="Jack Woods Avatar"
          className="w-full h-full object-cover"
        />
    </div>
  );
};

export default Avatar;
