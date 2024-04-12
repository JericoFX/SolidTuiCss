import { createSignal } from 'solid-js';

import Button from './components/Button';

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <Button variant={'primary'} textColor={'black168'}>
        Jerico
      </Button>
      <Button variant={'primary'} color={'blue168'} textColor={'red168'}>
        Jerico
      </Button>
    </>
  );
}

export default App;
