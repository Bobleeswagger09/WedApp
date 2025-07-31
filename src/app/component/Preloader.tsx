"use client";
import React from "react";
import HashLoader from "react-spinners/HashLoader";

export default function Preloader() {
  return (
    <div className="z-[13000] fixed bg-black inset-0 w-full h-full grid place-items-center">
      <HashLoader
        color="#2b374d"
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
