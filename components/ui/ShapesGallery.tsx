"use client";

import React from "react";

/**
 * Authentic vector assets from Shapes Gallery (https://www.shapes.gallery/)
 * Integrated for Garima Wellness Center.
 * Uses original geometry, responsive scaling, and currentColor styling.
 */

interface ShapeProps {
  className?: string;
  opacity?: number;
  style?: React.CSSProperties;
}

// Shapes Gallery Asset: Shape 47.svg
export const ShapeOrganicBlossom: React.FC<ShapeProps> = ({ className = "", opacity = 0.1, style = {} }) => (
  <svg
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none shrink-0 ${className}`}
    style={{ opacity, ...style }}
    aria-hidden="true"
  >
    <path d="M 128 0 C 147.68 0 164.04 14.213 167.377 32.934 C 182.974 22.055 204.594 23.574 218.51 37.49 C 232.426 51.406 233.944 73.025 223.066 88.622 C 241.787 91.96 256 108.32 256 128 C 256 147.68 241.787 164.04 223.065 167.377 C 233.944 182.974 232.426 204.594 218.51 218.51 C 204.594 232.426 182.974 233.944 167.377 223.065 C 164.04 241.787 147.68 256 128 256 C 108.32 256 91.959 241.787 88.622 223.065 C 73.025 233.944 51.406 232.426 37.49 218.51 C 23.574 204.594 22.055 182.974 32.934 167.377 C 14.213 164.04 0 147.68 0 128 C 0 108.32 14.213 91.96 32.934 88.622 C 22.056 73.025 23.574 51.406 37.49 37.49 C 51.406 23.574 73.025 22.055 88.622 32.934 C 91.96 14.213 108.32 0 128 0 Z" fill="currentColor" />
  </svg>
);

// Shapes Gallery Asset: Shape 40.svg
export const ShapeConcaveStar: React.FC<ShapeProps> = ({ className = "", opacity = 0.1, style = {} }) => (
  <svg
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none shrink-0 ${className}`}
    style={{ opacity, ...style }}
    aria-hidden="true"
  >
    <path d="M 28 128 C 83.228 128 128 172.772 128 228 C 128 172.772 172.772 128 228 128 Z M 256 256 L 0 256 L 0 0 L 28 0 C 83.228 0 128 44.772 128 100 C 128 44.772 172.772 0 228 0 L 256 0 Z" fill="currentColor" />
  </svg>
);

// Shapes Gallery Asset: Shape 23.svg
export const ShapeTripleRings: React.FC<ShapeProps> = ({ className = "", opacity = 0.1, style = {} }) => (
  <svg
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none shrink-0 ${className}`}
    style={{ opacity, ...style }}
    aria-hidden="true"
  >
    <path d="M 128 0 C 198.692 0 256 57.308 256 128 C 256 198.692 198.692 256 128 256 C 57.308 256 0 198.692 0 128 C 0 57.308 57.308 0 128 0 Z M 128 32 C 74.98 32 32 74.98 32 128 C 32 181.019 74.98 224 128 224 C 181.019 224 224 181.019 224 128 C 224 74.98 181.019 32 128 32 Z M 128 112 C 136.837 112 144 119.163 144 128 C 144 136.837 136.837 144 128 144 C 119.163 144 112 136.837 112 128 C 112 119.163 119.163 112 128 112 Z" fill="currentColor" />
  </svg>
);

// Shapes Gallery Asset: Shape 36.svg
export const ShapeSunMedallion: React.FC<ShapeProps> = ({ className = "", opacity = 0.1, style = {} }) => (
  <svg
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none shrink-0 ${className}`}
    style={{ opacity, ...style }}
    aria-hidden="true"
  >
    <path d="M 192 0 C 227.346 0 256 28.654 256 64 C 256 99.346 227.346 128 192 128 C 227.346 128 256 156.654 256 192 C 256 227.346 227.346 256 192 256 C 156.654 256 128 227.346 128 192 C 128 227.346 99.346 256 64 256 C 28.654 256 0 227.346 0 192 C 0 156.654 28.654 128 64 128 C 28.654 128 0 99.346 0 64 C 0 28.654 28.654 0 64 0 C 99.346 0 128 28.654 128 64 C 128 28.654 156.654 0 192 0 Z M 128 100 C 112.536 100 100 112.536 100 128 C 100 143.464 112.536 156 128 156 C 143.464 156 156 143.464 156 128 C 156 112.536 143.464 100 128 100 Z" fill="currentColor" />
  </svg>
);

// Shapes Gallery Asset: Shape 63.svg
export const ShapeQuadrantPetals: React.FC<ShapeProps> = ({ className = "", opacity = 0.1, style = {} }) => (
  <svg
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none shrink-0 ${className}`}
    style={{ opacity, ...style }}
    aria-hidden="true"
  >
    <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" fill="currentColor" />
  </svg>
);

// Shapes Gallery Asset: Shape 22.svg
export const ShapeZenDonut: React.FC<ShapeProps> = ({ className = "", opacity = 0.1, style = {} }) => (
  <svg
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none shrink-0 ${className}`}
    style={{ opacity, ...style }}
    aria-hidden="true"
  >
    <path d="M 128 0 C 198.692 0 256 57.308 256 128 C 256 198.692 198.692 256 128 256 C 57.308 256 0 198.692 0 128 C 0 57.308 57.308 0 128 0 Z M 128 64 C 92.654 64 64 92.654 64 128 C 64 163.346 92.654 192 128 192 C 163.346 192 192 163.346 192 128 C 192 92.654 163.346 64 128 64 Z" fill="currentColor" />
  </svg>
);

// Shapes Gallery Asset: Shape 51.svg
export const ShapeCloverArcs: React.FC<ShapeProps> = ({ className = "", opacity = 0.1, style = {} }) => (
  <svg
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none shrink-0 ${className}`}
    style={{ opacity, ...style }}
    aria-hidden="true"
  >
    <path d="M 64 128 C 99.346 128 128 156.654 128 192 C 128 227.346 99.346 256 64 256 C 28.654 256 0 227.346 0 192 C 0 156.654 28.654 128 64 128 Z M 192 128 C 227.346 128 256 156.654 256 192 C 256 227.346 227.346 256 192 256 C 156.654 256 128 227.346 128 192 C 128 156.654 156.654 128 192 128 Z M 64 0 C 99.346 0 128 28.654 128 64 C 128 99.346 99.346 128 64 128 C 28.654 128 0 99.346 0 64 C 0 28.654 28.654 0 64 0 Z M 192 0 C 227.346 0 256 28.654 256 64 C 256 99.346 227.346 128 192 128 C 156.654 128 128 99.346 128 64 C 128 28.654 156.654 0 192 0 Z" fill="currentColor" />
  </svg>
);

// Shapes Gallery Asset: Shape 34.svg
export const ShapeSmoothWave: React.FC<ShapeProps> = ({ className = "", opacity = 0.1, style = {} }) => (
  <svg
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none shrink-0 ${className}`}
    style={{ opacity, ...style }}
    aria-hidden="true"
  >
    <path d="M 256 0 C 256 35.346 227.346 64 192 64 C 227.346 64 256 92.654 256 128 C 256 163.346 227.346 192 192 192 C 227.346 192 256 220.654 256 256 L 0 256 C 0 220.654 28.654 192 64 192 C 28.654 192 0 163.346 0 128 C 0 92.654 28.654 64 64 64 C 28.654 64 0 35.346 0 0 Z" fill="currentColor" />
  </svg>
);

// Shapes Gallery Asset: Shape 21.svg
export const ShapeCurvedStar: React.FC<ShapeProps> = ({ className = "", opacity = 0.1, style = {} }) => (
  <svg
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none shrink-0 ${className}`}
    style={{ opacity, ...style }}
    aria-hidden="true"
  >
    <path d="M 78 0 C 105.614 0 128 22.386 128 50 C 128 22.386 150.386 0 178 0 L 256 0 L 256 78 C 256 105.614 233.614 128 206 128 C 233.614 128 256 150.386 256 178 L 256 256 L 178 256 C 150.386 256 128 233.614 128 206 C 128 233.614 105.614 256 78 256 L 0 256 L 0 178 C 0 150.386 22.386 128 50 128 C 22.386 128 0 105.614 0 78 L 0 0 Z" fill="currentColor" />
  </svg>
);

// Shapes Gallery Asset: Shape 24.svg
export const ShapeRippleRings: React.FC<ShapeProps> = ({ className = "", opacity = 0.1, style = {} }) => (
  <svg
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none shrink-0 ${className}`}
    style={{ opacity, ...style }}
    aria-hidden="true"
  >
    <path d="M 128 0 C 198.692 0 256 57.308 256 128 C 256 198.692 198.692 256 128 256 C 57.308 256 0 198.692 0 128 C 0 57.308 57.308 0 128 0 Z M 128 32 C 74.98 32 32 74.98 32 128 C 32 181.019 74.98 224 128 224 C 181.019 224 224 181.019 224 128 C 224 74.98 181.019 32 128 32 Z M 128 56 C 167.765 56 200 88.236 200 128 C 200 167.765 167.765 200 128 200 C 88.236 200 56 167.765 56 128 C 56 88.236 88.236 56 128 56 Z M 128 88 C 105.909 88 88 105.909 88 128 C 88 150.091 105.909 168 128 168 C 150.091 168 168 150.091 168 128 C 168 105.909 150.091 88 128 88 Z M 128 112 C 136.837 112 144 119.163 144 128 C 144 136.837 136.837 144 128 144 C 119.163 144 112 136.837 112 128 C 112 119.163 119.163 112 128 112 Z" fill="currentColor" />
  </svg>
);

// Shapes Gallery Asset: Shape 41.svg
export const ShapeRosetteMandala: React.FC<ShapeProps> = ({ className = "", opacity = 0.1, style = {} }) => (
  <svg
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none shrink-0 ${className}`}
    style={{ opacity, ...style }}
    aria-hidden="true"
  >
    <path d="M 164 0 C 188.301 0 208 19.7 208 44 C 208 45.417 207.93 46.818 207.799 48.2 C 209.182 48.07 210.583 48 212 48 C 236.301 48 256 67.7 256 92 C 256 106.883 248.609 120.037 237.3 128 C 248.609 135.963 256 149.117 256 164 C 256 188.301 236.301 208 212 208 C 210.583 208 209.182 207.93 207.799 207.799 C 207.93 209.182 208 210.583 208 212 C 208 236.301 188.301 256 164 256 C 149.117 256 135.963 248.609 128 237.3 C 120.037 248.609 106.883 256 92 256 C 67.7 256 48 236.301 48 212 C 48 210.583 48.07 209.182 48.2 207.799 C 46.804 207.932 45.402 207.999 44 208 C 19.7 208 0 188.301 0 164 C 0 149.118 7.39 135.963 18.7 128 C 7.39 120.037 0 106.882 0 92 C 0 67.7 19.7 48 44 48 C 45.417 48 46.818 48.07 48.2 48.2 C 48.07 46.818 48 45.417 48 44 C 48 19.7 67.7 0 92 0 C 106.882 0 120.037 7.39 128 18.7 C 135.963 7.39 149.118 0 164 0 Z M 128 69.3 C 120.037 80.61 106.883 88 92 88 C 90.583 88 89.182 87.93 87.799 87.799 C 87.932 89.195 87.999 90.597 88 92 C 88 106.883 80.61 120.037 69.3 128 C 80.61 135.963 88 149.117 88 164 C 88 165.417 87.93 166.818 87.799 168.2 C 89.182 168.069 90.583 168 92 168 C 106.882 168 120.037 175.39 128 186.699 C 135.963 175.39 149.118 168 164 168 C 165.417 168 166.818 168.069 168.2 168.2 C 168.067 166.804 168 165.402 168 164 C 168 149.118 175.39 135.963 186.699 128 C 175.39 120.037 168 106.882 168 92 C 168 90.583 168.069 89.182 168.2 87.799 C 166.804 87.932 165.402 87.999 164 88 C 149.117 88 135.963 80.61 128 69.3 Z" fill="currentColor" />
  </svg>
);

// Shapes Gallery Asset: Shape 48.svg
export const ShapeSunburstStar: React.FC<ShapeProps> = ({ className = "", opacity = 0.1, style = {} }) => (
  <svg
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none shrink-0 ${className}`}
    style={{ opacity, ...style }}
    aria-hidden="true"
  >
    <path d="M 160 0 C 177.397 0 191.551 13.883 191.989 31.174 L 192.011 32.826 C 192.442 49.843 206.157 63.558 223.174 63.989 L 224.826 64.011 C 242.117 64.449 256 78.603 256 96 C 256 113.673 241.673 128 224 128 C 241.673 128 256 142.327 256 160 C 256 177.397 242.117 191.551 224.826 191.989 L 223.174 192.011 C 206.157 192.442 192.442 206.157 192.011 223.174 L 191.989 224.826 C 191.551 242.117 177.397 256 160 256 C 142.327 256 128 241.673 128 224 C 128 241.673 113.673 256 96 256 C 78.603 256 64.449 242.117 64.01 224.826 L 63.99 223.174 C 63.558 206.157 49.843 192.442 32.826 192.011 L 31.174 191.989 C 13.883 191.551 0 177.397 0 160 C 0 142.327 14.327 128 32 128 C 14.327 128 0 113.673 0 96 C 0 78.603 13.883 64.449 31.174 64.01 L 32.826 63.99 C 49.843 63.558 63.558 49.843 63.989 32.826 L 64.011 31.174 C 64.449 13.883 78.603 0 96 0 C 113.673 0 128 14.327 128 32 C 128 14.327 142.327 0 160 0 Z M 128 64 C 128 99.346 99.346 128 64 128 C 99.346 128 128 156.654 128 192 C 128 156.654 156.654 128 192 128 C 156.654 128 128 99.346 128 64 Z" fill="currentColor" />
  </svg>
);

// Shapes Gallery Asset: Shape 50.svg
export const ShapeRadialBlossom: React.FC<ShapeProps> = ({ className = "", opacity = 0.1, style = {} }) => (
  <svg
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none shrink-0 ${className}`}
    style={{ opacity, ...style }}
    aria-hidden="true"
  >
    <path d="M 65.025 143.01 C 70.813 165.5 88.518 183.205 111.008 188.993 L 111.008 254.018 C 53.108 246.798 7.22 200.909 0 143.01 Z M 254.016 143.01 C 246.796 200.909 200.907 246.798 143.008 254.018 L 143.008 188.993 C 165.498 183.205 183.203 165.5 188.991 143.01 Z M 127.008 111.01 C 135.845 111.01 143.008 118.173 143.008 127.01 C 143.008 135.847 135.845 143.01 127.008 143.01 C 118.171 143.01 111.008 135.847 111.008 127.01 C 111.008 118.173 118.171 111.01 127.008 111.01 Z M 111.008 65.026 C 88.518 70.814 70.813 88.52 65.025 111.01 L 0 111.01 C 7.22 53.11 53.109 7.221 111.008 0.001 Z M 143.008 0 C 200.907 7.221 246.796 53.111 254.016 111.01 L 188.991 111.01 C 183.203 88.52 165.498 70.814 143.008 65.026 Z" fill="currentColor" />
  </svg>
);

// Shapes Gallery Asset: Shape 59.svg
export const ShapeStarAperture: React.FC<ShapeProps> = ({ className = "", opacity = 0.1, style = {} }) => (
  <svg
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none shrink-0 ${className}`}
    style={{ opacity, ...style }}
    aria-hidden="true"
  >
    <path d="M 108 0 C 119.046 0 128 8.954 128 20 C 128 8.954 136.954 0 148 0 L 206 0 C 233.614 0 256 22.386 256 50 L 256 108 C 256 119.046 247.046 128 236 128 C 247.046 128 256 136.954 256 148 L 256 206 C 256 233.614 233.614 256 206 256 L 148 256 C 136.954 256 128 247.046 128 236 C 128 247.046 119.046 256 108 256 L 50 256 C 22.386 256 0 233.614 0 206 L 0 148 C 0 136.954 8.954 128 20 128 C 8.954 128 0 119.046 0 108 L 0 50 C 0 22.386 22.386 0 50 0 Z M 128 100 C 112.536 100 100 112.536 100 128 C 100 143.464 112.536 156 128 156 C 143.464 156 156 143.464 156 128 C 156 112.536 143.464 100 128 100 Z" fill="currentColor" />
  </svg>
);
