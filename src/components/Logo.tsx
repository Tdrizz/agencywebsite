import { useId } from "react";
import Link from "next/link";

type LogoProps = {
  variant?: "horizontal" | "stacked" | "mark";
  theme?: "dark" | "light";
  size?: number;
  showDivider?: boolean;
  href?: string;
  className?: string;
  onClick?: () => void;
};

function Mark({ theme, size }: { theme: "dark" | "light"; size: number }) {
  const gradientId = useId();
  const inkColor = theme === "dark" ? "#F2F5F8" : "#0B0B0C";
  const accentColor = theme === "dark" ? "#5FD68A" : "#1F9D55";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="156" y1="0" x2="356" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0.38" stopColor={inkColor} />
          <stop offset="0.62" stopColor={accentColor} />
        </linearGradient>
      </defs>
      <g transform="translate(0 16)">
        <path
          d="M176 176 V276 A80 80 0 0 0 336 276 V176"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="30"
          strokeLinecap="round"
        />
        <circle cx="176" cy="128" r="20" fill={inkColor} />
        <circle cx="336" cy="128" r="20" fill={accentColor} />
        <circle cx="256" cy="250" r="17" fill={accentColor} />
      </g>
    </svg>
  );
}

function Wordmark({ theme, fontSize }: { theme: "dark" | "light"; fontSize: number }) {
  const inkColor = theme === "dark" ? "#F2F5F8" : "#0B0B0C";
  const accentColor = theme === "dark" ? "#5FD68A" : "#1F9D55";

  return (
    <span
      className="heading-font"
      style={{ fontSize, lineHeight: 1, letterSpacing: "-0.02em", whiteSpace: "nowrap" }}
    >
      <span style={{ fontWeight: 300, color: inkColor }}>unified</span>
      <span style={{ fontWeight: 600, color: accentColor }}>ops</span>
    </span>
  );
}

export default function Logo({
  variant = "horizontal",
  theme = "light",
  size = 34,
  showDivider = true,
  href = "/",
  className = "",
  onClick,
}: LogoProps) {
  const hairline = theme === "dark" ? "#2A2C31" : "#D3DAE2";

  let content: React.ReactNode;

  if (variant === "mark") {
    content = <Mark theme={theme} size={size} />;
  } else if (variant === "stacked") {
    const markSize = size * 3;
    const fontSize = size;
    content = (
      <div className="flex flex-col items-center" style={{ gap: fontSize * 0.25 }}>
        <Mark theme={theme} size={markSize} />
        <Wordmark theme={theme} fontSize={fontSize} />
      </div>
    );
  } else {
    const markSize = size * 2.1;
    const gap = size * 0.38;
    content = (
      <div className="flex items-center" style={{ gap }}>
        <Mark theme={theme} size={markSize} />
        {showDivider && (
          <span
            style={{
              width: 1,
              height: size * 1.35,
              background: hairline,
            }}
          />
        )}
        <Wordmark theme={theme} fontSize={size} />
      </div>
    );
  }

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link href={href} className={`inline-flex items-center ${className}`} onClick={onClick}>
      {content}
    </Link>
  );
}
