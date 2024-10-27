import TuiNav from './components/Tui/TuiNav';
import { Box, VStack } from '../styled-system/jsx';
import { TuiScreenLarge } from './components/Tui/TuiScreen';
import TuiWindow from './components/Tui/TuiWindow';
import TuiInput from './components/Tui/TuiInput';
import { TuiDropdown, TuiOption, TuiTitle } from './components/Tui/TuiDropdown';
import TuiCheckbox from './components/Tui/TuiCheckbox';

function App() {
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
          <TuiWindow backgroundColor='RedBlack' sizes='large'>
            <TuiNav>
              <TuiTitle>Menu</TuiTitle>
              <TuiOption>Option</TuiOption>
              <TuiOption>Option</TuiOption>
              <TuiOption>Option</TuiOption>
            </TuiNav>
            <Box w='50vw' h='20vh'>
              <TuiCheckbox
                onChange={(e) => console.log(e.target.checked)}
                label='Jerico'
                disabled={false}
              ></TuiCheckbox>
            </Box>
          </TuiWindow>
        </VStack>
      </TuiScreenLarge>
    </>
  );
}

export default App;
