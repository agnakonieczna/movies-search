import type { SVGProps } from "react";

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="7"
      y="14"
      width="50"
      height="36"
      rx="6"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
    <path d="M24 24 L42 32 L24 40 Z" fill="white" />
  </svg>
);

export default LogoIcon;
