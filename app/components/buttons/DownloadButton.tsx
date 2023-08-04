import { type IconType } from "react-icons";

interface ButtonProps {
  label?: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  iconSize?: number;
  style?: string;
  fileUrl: string;
}

const Button: React.FC<ButtonProps> = ({
  label = "Boton",

  disabled = false,
  outline = false,
  small = false,
  icon: Icon,
  iconSize = 24,
  style = "",
  fileUrl,
}) => {
  const handleDownload = () => {
    if (fileUrl != null) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = label;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <button
      disabled={disabled}
      onClick={handleDownload}
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
      {Icon != null && (
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
