"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface LogoProps {
  height?: number;
  width?: number;
  src?: string;
  className?: string;
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({
  height = 175,
  width = 175,
  src = "/images/logo-text.svg",
  alt = "Logo",
  className = "",
}) => {
  const router = useRouter();
  return (
    <Image
      alt={alt}
      priority
      className={"cursor-pointer w-[160px] h-auto" + className}
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
