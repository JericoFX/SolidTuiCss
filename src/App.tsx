import { createEffect, createSignal } from 'solid-js';

import { Box, VStack } from '../styled-system/jsx';
import { TuiScreenLarge } from './components/Tui/TuiScreen';
import TuiButton from './components/Tui/TuiButton';
import TuiWindow from './components/Tui/TuiWindow';
import { TuiDropdown, TuiOption } from './components/Tui/TuiDropdown';
import TuiInput from './components/Tui/TuiInput';
import TuiNav from './components/Tui/TuiNav';
import { TuiPanel, TuiHeader, TuiContent } from './components/Tui/TuiPanel';
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
          >
            Jerico2
          </TuiButton>

          <TuiInput textColor='Black255' color='Green168'>
            asddsa
          </TuiInput>
          <TuiWindow backgroundColor='RedBlack' sizes='large'>
            <TuiNav>
              <TuiDropdown>
                <TuiOption>Jerico</TuiOption>
              </TuiDropdown>
            </TuiNav>
            <Box w='50vw' h='20vh' m='5'>
              <TuiPanel open>
                <TuiHeader>Autodestruccion</TuiHeader>
                <TuiContent
                  onClick={(e) => {
                    console.log('WAC');
                  }}
                >
                  Esta ventana se va a autodestruir en cualquier momento
                </TuiContent>
              </TuiPanel>
            </Box>
          </TuiWindow>
        </VStack>
      </TuiScreenLarge>
    </>
  );
}

export default App;
