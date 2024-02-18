"use client";

import { useState } from "react";
import Image from "next/image";

export const AboutVideo = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  const playVideo = (event) => {
    event.preventDefault();
    const video = event.target;
    if (video.paused) {
      video.play();
      setShowOverlay(false);
    } else {
      video.pause();
      setShowOverlay(true);
    }
  };
  return (
    <div className="relative w-full h-full md:rounded-2xl">
      <a
        href="#"
        onClick={(e) => playVideo(e)}
        className="block w-full h-[300px] md:rounded-2xl"
      >
        <div
          id="video-overlay"
          className={`absolute top-0 left-0 md:rounded-2xl h-[300px] w-full ${
            showOverlay ? "block" : "hidden"
          }`}
        >
          <Image
            src="/images/overlay.svg"
            alt="overlay"
            // width={100}
            // height={100}
            layout="fill"
            className="w-full !h-full md:rounded-2xl object-cover"
          />
        </div>
        <video
          muted
          className="w-full md:h-full md:rounded-2xl h-[300px]"
          // controls
          // autoPlay
          // poster="/images/overlay.svg"
        >
          <source
            src="/video/about.mp4"
            type="video/mp4"
            className="w-full h-full"
          />
        </video>
      </a>
    </div>
  );
};
