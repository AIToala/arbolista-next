"use client";

import { UserEditForm } from "@/app/components/UserEditForm";

interface IParams {
  id: string;
}

const UserEditPage = ({ params }: { params: IParams }) => {
  const id = params.id;
  return (
    <div>
      <h1>Editar Usuario </h1>
      <UserEditForm id={id} />
    </div>
  );
};

export default UserEditPage;
