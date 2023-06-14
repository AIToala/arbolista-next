'use client';
import { FaList } from 'react-icons/fa';
import { IoGrid } from 'react-icons/io5';
import { Tabs } from 'flowbite-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();

  const handleOptionClick = (option: string) => {
    router.push(`/${option}`);
  };

  return (
    <div style={{ backgroundColor: 'rgb(14, 159, 110)', color: '#ffffff', padding: '20px' }}>
      <Tabs.Group className="w-full" aria-label="Dashboard Tabs">
        <Tabs.Item title="Administrar especies" onClick={() => handleOptionClick('administrar-especies')}>
          <Tabs.Group>
            <Tabs.Item title="Agregar especie" onClick={() => handleOptionClick('agregar-especie')} />
            <Tabs.Item title="Modificar/Eliminar especie" onClick={() => handleOptionClick('modificar-eliminar-especie')} />
          </Tabs.Group>
        </Tabs.Item>
        <Tabs.Item title="Administrar viveros" onClick={() => handleOptionClick('administrar-viveros')}>
          <Tabs.Group>
            <Tabs.Item title="Agregar vivero" onClick={() => handleOptionClick('agregar-vivero')} />
            <Tabs.Item title="Modificar/Eliminar vivero" onClick={() => handleOptionClick('modificar-eliminar-vivero')} />
          </Tabs.Group>
        </Tabs.Item>
        <Tabs.Item title="Regresar a la página principal" onClick={() => handleOptionClick('pagina-principal')} />
      </Tabs.Group>
    </div>
  );
};

export default Dashboard;
