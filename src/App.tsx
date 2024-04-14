import { createSignal } from 'solid-js';
import Screen from './components/Screen';
function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <Screen size='lg' backgroundColor='RedBlack' center></Screen>
    </>
  );
}

export default App;
