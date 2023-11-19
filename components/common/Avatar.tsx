"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Avatar = () => {
  const [imgOffset, setImgOffset] = useState(0);
  const accelerator = -0.3;

  const handleScroll = () => setImgOffset(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const attrs = `translate(-48%, calc(-25% + ${imgOffset * accelerator}px)) scale(${1 + 0.0005 * imgOffset})`;

  return (
    <div 
      className="avatar-wrapper rounded-full overflow-hidden"
      style={ { transform: `${attrs}`} }
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
