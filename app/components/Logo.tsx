"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  height?: number;
  width?: number;
  src?: string;
  className?: string;
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({
  height,
  width,
  src,
  alt = "Logo",
  className,
}) => {
  return (
    <Link href={"/"}>
      <Image
        alt={alt}
        priority
        className={"cursor-pointer " + className}
        height={height || 75}
        width={width || 75}
        src={src || "/images/logo-text.svg"}
      />
    </Link>
  );
};

export default Logo;
