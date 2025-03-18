import { motion } from "framer-motion";
import { MutableRefObject, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    containerRef: MutableRefObject<HTMLDivElement | null>;
    src: string;
    alt: string;
    top: string;
    left: string;
    rotate: string;
    className?: string;
  }
  
const DraggableCard = ({
    containerRef,
    src,
    alt,
    top,
    left,
    rotate,
    className,
  }: Props) => {
    const [zIndex, setZIndex] = useState(0);
  
    const updateZIndex = () => {
      const els = document.querySelectorAll(".drag-elements");
  
      let maxZIndex = -Infinity;
  
      els.forEach((el) => {
        let zIndex = parseInt(
          window.getComputedStyle(el).getPropertyValue("z-index")
        );
  
        if (!isNaN(zIndex) && zIndex > maxZIndex) {
          maxZIndex = zIndex;
        }
      });
  
      setZIndex(maxZIndex + 1);
    };
  
    return (
      <motion.img
        onMouseDown={updateZIndex}
        style={{
          top,
          left,
          rotate,
          zIndex,
        }}
        className={twMerge(
          "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
          className
        )}
        src={src}
        alt={alt}
        drag
        dragConstraints={containerRef}
        // Uncomment below and remove dragElastic to remove movement after release
        //   dragMomentum={false}
        dragElastic={0.65}
      />
    );
  };

  export default DraggableCard;