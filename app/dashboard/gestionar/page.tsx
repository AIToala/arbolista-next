'use client';
import SidebarC from '@/app/components/sidebar/SidebarC';
import { Table } from 'flowbite-react';



const DashboardIndexPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarC />
      <div style={{ flex: 1, marginLeft: '20px', marginTop:'100px', marginRight:'50px' }}>
        <Table hoverable>
        <Table.Head>
        <Table.HeadCell>
          DATA
        </Table.HeadCell>
        <Table.HeadCell>
          DATA
        </Table.HeadCell>
        <Table.HeadCell>
          DATA
        </Table.HeadCell>
        <Table.HeadCell>
          DATA
        </Table.HeadCell>
        <Table.HeadCell colSpan={2}>
            <span className="sr-only">
              Acciones
            </span>
          </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            data
          </Table.Cell>
          <Table.Cell>
            data
          </Table.Cell>
          <Table.Cell>
            data
          </Table.Cell>
          <Table.Cell>
            data
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>
                Editar
              </p>
            </a>
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>
                Eliminar
              </p>
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <p>
              data
            </p>
          </Table.Cell>
          <Table.Cell>
            data
          </Table.Cell>
          <Table.Cell>
            data
          </Table.Cell>
          <Table.Cell>
            data
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>
                Editar
              </p>
            </a>
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>
                Eliminar
              </p>
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            data
          </Table.Cell>
          <Table.Cell>
            data
          </Table.Cell>
          <Table.Cell>
            data
          </Table.Cell>
          <Table.Cell>
            data
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>
                Editar
              </p>
            </a>
          </Table.Cell>
          <Table.Cell>
            <a
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/tables"
            >
              <p>
                Eliminar
              </p>
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default DashboardIndexPage;
