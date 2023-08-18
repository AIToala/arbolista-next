import getSafeUser from "@/app/actions/getSafeUser";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import UserEditForm from "@/app/components/UserEditForm";

interface IParams {
  id: string;
}

const UserEditPage = async ({ params }: { params: IParams }) => {
  const data = await getSafeUser(params);
  if (data == null) {
    return (
      <ClientOnly>
        <EmptyState
          showReset
          title="Usuario no existe"
          subtitle="Retorna al dashboard."
          urlAction="/dashboard/gestionar"
        />
      </ClientOnly>
    );
  }
  return (
    <div className="flex flex-col w-full mx-4 !my-2 items-start h-full !mt-50 mr-10">
      <h1 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors mt-5">
        Editar Usuario
      </h1>
      <UserEditForm userData={data} />
    </div>
  );
};

export default UserEditPage;
