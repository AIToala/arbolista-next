'use client';
import SidebarC from '@/app/components/sidebar/SidebarC';
import { Tabs, Label, TextInput, FileInput } from 'flowbite-react';

const DashboardIndexPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarC />
      <div style={{ flex: 1, marginLeft: '20px', marginTop:'100px', marginRight:'50px' }}>
        <Tabs.Group
        aria-label="Tabs with icons"
        style='underline'
      >
        <Tabs.Item
          active
          title="Registrar Vivero"
        >
          <div className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="name"
                  value="Nombre"
                />
              </div>
              <TextInput
                id="name"
                sizing="md"
                type="text"
                placeholder='Ingrese el nombre del vivero'
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="address"
                  value="Direccion"
                />
              </div>
              <TextInput
                id="address"
                sizing="md"
                type="text"
                placeholder='Ingrese la direccion del vivero'
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="phone"
                  value="Número de telefono"
                />
              </div>
              <TextInput
                id="phone"
                sizing="md"
                type="text"
                placeholder='Ingrese el numero de telefono del vivero'
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  value="Correo electronico"
                />
              </div>
              <TextInput
                id="email"
                sizing="md"
                type="text"
                placeholder='Ingrese el correo electronico del vivero'
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="website"
                  value="Sitio web"
                />
              </div>
              <TextInput
                id="website"
                sizing="md"
                type="text"
                placeholder='Ingrese el url del sitio web del vivero'
              />
            </div>
            <div
              className="max-w-md"
              id="fileUpload"
              >
              <div className="mb-2 block">
                <Label
                  htmlFor="logo-src"
                  value="Upload file"
                />
              </div>
              <FileInput
                helperText="Selecciona el logo del vivero"
                id="logo-src"
              />
              </div>
          </div>
        </Tabs.Item>
      </Tabs.Group>
      </div>
    </div>
  );
};

export default DashboardIndexPage;
