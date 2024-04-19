import { createEffect, createSignal } from 'solid-js';
import { cva } from '../styled-system/css';
import { VStack, styled } from '../styled-system/jsx';
import { TuiScreenLarge } from './components/Tui/TuiScreen';
import TuiButton from './components/Tui/TuiButton';

function App() {
  const [count, setCount] = createSignal(0);
  createEffect(() => console.log(count()));

  return (
    <>
      <TuiScreenLarge bordered={true} backgroundColor='OrangeBlack' centered>
        <VStack
          w='100%'
          h='100%'
          alignContent='center'
          justifyContent='center'
          gap={2}
        >
          <TuiButton
            textColor='Black255'
            color='Green168'
            onClick={() => setCount(count() + 1)}
          >
            Jerico
          </TuiButton>
          <TuiButton
            textColor='Black255'
            color='Red168'
            onClick={() => console.log('CLicked')}
            disabled
          >
            Jerico2
          </TuiButton>
        </VStack>
      </TuiScreenLarge>
    </>
  );
}

export default App;
