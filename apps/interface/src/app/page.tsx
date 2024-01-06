"use client";
import { DisplayButton } from "@/components/button/displayButton";
import { config } from "@/config";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Home() {
  const { backgroundImages, backgroundChangeTime } = config;

  const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0]);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setBackgroundImage(backgroundImages[i]);
      i = (i + 1) % backgroundImages.length;
    }, backgroundChangeTime);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className={clsx("w-screen h-screen bg-no-repeat bg-cover bg-center")}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${backgroundImage})`,
            }
          : {
              backgroundColor: "#191919",
            }
      }
    >
      <div className="h-24 flex items-center justify-center">
        <div className="text-5xl font-extrabold text-white">Web Deck</div>
      </div>
      <div>
        <DisplayButton />
      </div>
    </div>
  );
}
