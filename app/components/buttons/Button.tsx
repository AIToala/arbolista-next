import { IconType } from "react-icons";

interface ButtonProps {
  label?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  iconSize?: number;
  style?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
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
        w-full
        ${outline ? "bg-white" : "bg-green-500"}
        ${outline ? "border-black" : "border-green-500"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "py-1" : "py-3"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
      ` + style
      }
    >
      {Icon && (
        <Icon
          size={iconSize}
          className={`
            ${small ? "left-2" : "left-4"}
            ${small ? "top-1" : "top-2"}
            absolute
          `}
        />
      )}

      {label}
    </button>
  );
};

export default Button;
