import React from 'react';

interface WaveLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function WaveLogo({ className = '', size = 'md' }: WaveLogoProps) {
  // Size configurations
  const sizes = {
    sm: {
      containerSize: 'h-6 w-10',
      barWidth: 'w-[2px]',
      maxHeight: 20,
      gap: 'gap-[2px]'
    },
    md: {
      containerSize: 'h-8 w-14',
      barWidth: 'w-[3px]',
      maxHeight: 28,
      gap: 'gap-[2.5px]'
    },
    lg: {
      containerSize: 'h-10 w-20',
      barWidth: 'w-[4px]',
      maxHeight: 36,
      gap: 'gap-[3px]'
    }
  };

  const { containerSize, barWidth, maxHeight, gap } = sizes[size];

  return (
    <div className={`relative flex ${containerSize} items-center justify-center ${className}`}>
      <div className={`flex items-center ${gap}`}>
        {Array.from({ length: 9 }).map((_, i) => {
          // Create a symmetric wave pattern with more natural curve
          const normalizedPosition = (i / 8) * Math.PI;
          const height = Math.sin(normalizedPosition) * maxHeight * 0.85 + // Main wave
                        Math.sin(normalizedPosition * 2) * (maxHeight * 0.15); // Secondary wave for more detail
          return (
            <div
              key={i}
              className={`${barWidth} animate-[voice-wave_1.8s_ease-in-out_infinite] bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm`}
              style={{
                height: `${Math.max(6, Math.abs(height))}px`,
                animationDelay: `${(i * 0.08).toFixed(2)}s`,
                opacity: 0.95
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
} 