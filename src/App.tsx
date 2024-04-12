import { createSignal } from 'solid-js';
import * as Table from "./components/Table"
import Button from './components/Button';

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <Button intent={'disabled'}  textColor={'black168'}>
        Jerico
      </Button>
      <Button intent={'primary'}>Jerico2</Button>
      <Table.Root>
        <Table.Thread>
          
        </Table.Thread>
      </Table.Root>
    </>
  );
}

export default App;
