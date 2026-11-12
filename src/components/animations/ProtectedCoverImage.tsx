import React, { useEffect, useRef } from 'react';

const ProtectedCoverImage = ({ src, className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.src = src;
    img.onload = () => {
      // Match canvas internal resolution to its displayed size
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width || 400;
      canvas.height = rect.height || 400;

      // Replicate CSS 'bg-cover bg-center' math
      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };
  }, [src]);

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      className={`absolute inset-0 overflow-hidden select-none ${className}`}
      style={{ WebkitTouchCallout: 'none' }}
    >
      {/* Canvas with your exact Tailwind transition & hover zoom */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
      />

      {/* Transparent shield over the canvas */}
      <div className="absolute inset-0 z-10 bg-transparent" />
    </div>
  );
};

export default ProtectedCoverImage;
