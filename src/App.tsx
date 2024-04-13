import { createSignal } from 'solid-js';
import * as Table from './components/Table';
import Button from './components/Button';

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      {/* <Button intent='primary' textColor='Yellow'>
        Jerico
      </Button>
      <Button intent={'primary'}>Jerico2</Button> */}
      <Table.Root hover='blue' striped='red'>
        <Table.Thread>
          <Table.Tr>
            <Table.Th>Label</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Payment</Table.Th>
            <Table.Th>Isboss</Table.Th>
          </Table.Tr>
        </Table.Thread>
        <Table.Tbody>
          <Table.Tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </Table.Tr>
          <Table.Tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </Table.Tr>
          <Table.Tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </Table.Tr>
          <Table.Tr>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </Table.Tr>
        </Table.Tbody>
      </Table.Root>
    </>
  );
}

export default App;
