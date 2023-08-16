"use client";

interface UserEditProps {
  id: string;
}

function UserEditPage({ props }: { props: UserEditProps }) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

  console.log(props);
  return (
    <div>
      <h1>Editar Usuario</h1>
    </div>
  );
}

export default UserEditPage;
