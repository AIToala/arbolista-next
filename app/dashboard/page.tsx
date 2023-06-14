'use client';
import { Sidebar } from 'flowbite-react';
import { useState } from 'react';
import { RiPlantFill,RiHome2Fill } from 'react-icons/ri';
import { GiPlantsAndAnimals } from 'react-icons/gi'
import { FaUserAlt } from 'react-icons/fa'

const Page = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Sidebar 
      style={{ height: '100vh'  }}
      className="bg-red-500 hover:bg-red-600"
    >
      <Sidebar.Logo
        href="#"
        img="public\images\logo-w.svg"
        imgAlt="logo"
      >
        <p>
          Arborista
        </p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse
            label="Usuarios"
            icon={FaUserAlt}
          >
            <Sidebar.Item href="#">Agregar Usuarios</Sidebar.Item>
            <Sidebar.Item href="#">Modificar/Eliminar Usuarios</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Collapse 
            label="Especies"
            icon={RiPlantFill}
          >
            <Sidebar.Item href="#">Agregar Especies</Sidebar.Item>
            <Sidebar.Item href="#">Modificar/Eliminar Especies</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Collapse 
            label="Viveros"
            icon={GiPlantsAndAnimals}
          >
            <Sidebar.Item href="#">Agregar Viveros</Sidebar.Item>
            <Sidebar.Item href="#">Modificar/Eliminar Viveros</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Item 
            href="#" 
            icon={RiHome2Fill}
          >
            <p>Regreso al Inicio</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default Page;
