"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {
  height?: number;
  width?: number;
  src?: string;
  className?: string;
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({
  height = 75,
  width = 75,
  src = "/images/logo-text.svg",
  alt = "Logo",
  className = "",
}) => {
  const router = useRouter();
  return (
    <Image
      alt={alt}
      priority
      className={"cursor-pointer " + className}
      height={height}
      width={width}
      src={src}
      onClick={() => {
        router.push("/");
      }}
    />
  );
};

export default Logo;
