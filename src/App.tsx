import TuiNav from './components/Tui/TuiNav';
import { Box, VStack } from '../styled-system/jsx';
import { TuiScreenLarge } from './components/Tui/TuiScreen';
import TuiWindow from './components/Tui/TuiWindow';
import TuiInput from './components/Tui/TuiInput';
import { TuiDropdown, TuiOption, TuiTitle } from './components/Tui/TuiDropdown';
import TuiCheckbox from './components/Tui/TuiCheckbox';
import TuiProgressBar from './components/Tui/TuiProgressBar';

/*************  ✨ Codeium Command ⭐  *************/
/**
 * The main component of the application. This component renders a centered
 * TuiScreenLarge with a single TuiWindow containing a TuiProgressBar.
 *
 * @returns The main component of the application.
 */
/******  fabedc11-b33b-495a-9c5f-1853470e6ee1  *******/ function App() {
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
          <TuiWindow w='full' h='full' backgroundColor='RedBlack' sizes='large'>
            a
            <TuiWindow p='1' w='full' backgroundColor='CyanBlack' sizes='small'>
              <TuiInput label='Wachin' size='sm'></TuiInput>
            </TuiWindow>
          </TuiWindow>
        </VStack>
      </TuiScreenLarge>
    </>
  );
}

export default App;
