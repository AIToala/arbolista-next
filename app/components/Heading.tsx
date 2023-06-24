import React from "react";
interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ?? false ? "text-center" : "text-start"}>
      <h1 className="text-2xl sm:text-xl font-bold">{title}</h1>
      <p className="font-light text-neutral-500 mt-2">{subtitle}</p>
    </div>
  );
};

export default Heading;
