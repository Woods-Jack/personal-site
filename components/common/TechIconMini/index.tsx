"use client";

import { useState } from "react";
import { ITechIcon } from "../TechIcon";
import Image from "next/image";

const TechIconMini = ({ img, desc, title }: ITechIcon) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <button
        className="relative h-12 w-12 hover:transform hover:scale-110 transition-transform duration-300"
        onClick={() => setShowModal(true)}
      >
        <Image src={img.src} alt={img.alt} fill className="object-contain" />
      </button>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            className="bg-light p-4 rounded-lg shadow-lg z-10 max-w-sm mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-base">{desc}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TechIconMini;
