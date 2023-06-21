"use client";

import { IconType } from "react-icons";

interface IconButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  iconSize?: number;
  style?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  iconSize = 24,
  style = "",
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={
        `
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-auto
        p-2
        flex flex-row items-center justify-center
        ${outline ? "bg-white" : "bg-green-500"}
        ${outline ? "border-black" : "border-green-500"}
        ${outline ? "text-black" : "text-white"}
      ` + style
      }
    >
      {Icon && <Icon size={iconSize} />}
    </button>
  );
};

export default IconButton;
