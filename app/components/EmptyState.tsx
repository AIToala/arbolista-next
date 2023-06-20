'use client';

import { useRouter } from "next/navigation";

import Button from "./buttons/Button";
import Heading from "./Heading";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
  actionLabel?: string;
  urlAction?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No existen resultados",
  subtitle = "Intenta cambiar o remover algunos filtros.",
  showReset,
  actionLabel = "Remueve filtros",
  urlAction = "/",
}) => {
  const router = useRouter();

  return ( 
    <div 
      className="
        h-[60vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
    >
      <Heading
        center
        title={title}
        subtitle={subtitle}
      />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label={actionLabel}
            onClick={() => router.push(urlAction)}
          />
        )}
      </div>
    </div>
   );
}
 
export default EmptyState;