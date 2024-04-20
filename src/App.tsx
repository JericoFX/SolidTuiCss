import { createEffect, createSignal } from 'solid-js';

import { Box, VStack, styled } from '../styled-system/jsx';
import { TuiScreenLarge } from './components/Tui/TuiScreen';
import TuiButton from './components/Tui/TuiButton';
import TuiWindow from './components/Tui/TuiWindow';
import { TuiBody, TuiFoot, TuiThead, TuiRoot } from './components/Tui/TuiTable';

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
          <TuiWindow backgroundColor='RedBlack' sizes='large'>
            <Box w='35vw' h='20vh' m='5'>
              <TuiRoot borderBottom>
                <TuiThead>
                  <tr>
                    <td>Firstname</td>
                    <td>Lastname</td>
                    <td>CitizenID</td>
                  </tr>
                </TuiThead>
                <TuiBody stripped='green' hover='purple'>
                  <tr>
                    <td>Jerico</td>
                    <td>FX</td>
                    <td>ASDFF</td>
                  </tr>
                  <tr>
                    <td>Jerico</td>
                    <td>FX</td>
                    <td>ASDFF</td>
                  </tr>
                </TuiBody>
                <TuiFoot>
                  <tr>
                    <td>Footer</td>
                    <td>Footer</td>
                  </tr>
                </TuiFoot>
              </TuiRoot>
            </Box>
          </TuiWindow>
        </VStack>
      </TuiScreenLarge>
    </>
  );
}

export default App;
