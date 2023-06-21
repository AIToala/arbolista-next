"use client";

import { CgProfile } from "react-icons/cg";

interface AvatarProps {
  name?: string | null | undefined;
}
const Avatar: React.FC<AvatarProps> = ({ name }) => {
  return (
    <>
      {name ? (
        <div className="text-semibold capitalize">{name}</div>
      ) : (
        <CgProfile size={25} />
      )}
    </>
  );
};

export default Avatar;
