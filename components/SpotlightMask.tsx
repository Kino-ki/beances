"use client";

import { motion as m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useMousePosition from "@/components/useMousePosition";
import "@/app/MaskStyles.css";

type SpotlightMaskProps = {
  className?: string;
  wrapperClassName?: string;
  yOffset?: number;
  initialSize?: number;
  useLocalCoords?: boolean;
};

export default function SpotlightMask({
  className = "",
  wrapperClassName = "compt:flex compt:visible hidden",
  yOffset = 0,
  initialSize = 0,
  useLocalCoords = false,
}: SpotlightMaskProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [localX, setLocalX] = useState(0);
  const [localY, setLocalY] = useState(0);
  const maskRef = useRef<HTMLDivElement>(null);

  const { x, y } = useMousePosition();

  const size = isClicked ? 600 : isHovered ? 400 : initialSize;

  useEffect(() => {
    if (!useLocalCoords || !maskRef.current) return;
    const rect = maskRef.current.getBoundingClientRect();
    setLocalX(x - rect.left);
    setLocalY(y - rect.top);
  }, [x, y, useLocalCoords]);

  const posX = useLocalCoords ? localX : x;
  const posY = useLocalCoords ? localY : y;

  return (
    <div className={wrapperClassName}>
      <m.div
        ref={useLocalCoords ? maskRef : undefined}
        className={`absolute mask ${className}`}
        animate={{
          WebkitMaskPosition: `${posX - size / 2}px ${posY + yOffset - size / 2}px`,
          opacity: 1,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.6 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
      />
    </div>
  );
}
