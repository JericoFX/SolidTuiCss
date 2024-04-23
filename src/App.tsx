import TuiNav from './components/Tui/TuiNav';
import { Box, VStack } from '../styled-system/jsx';
import { TuiScreenLarge } from './components/Tui/TuiScreen';
import TuiWindow from './components/Tui/TuiWindow';
import TuiInput from './components/Tui/TuiInput';
import { TuiDropdown, TuiOption, TuiTitle } from './components/Tui/TuiDropdown';

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
              <TuiTitle title='Wachines'>
                <TuiDropdown>
                  <TuiOption>New Report</TuiOption>
                  <TuiOption>New Report</TuiOption>
                  <TuiOption>New Report</TuiOption>
                  <TuiOption>New Report</TuiOption>
                  <TuiOption>New Report</TuiOption>
                </TuiDropdown>
              </TuiTitle>
              <TuiTitle title='Wachines1'>
                <TuiDropdown>
                  <TuiOption>New Report</TuiOption>
                </TuiDropdown>
              </TuiTitle>
            </TuiNav>
            <Box w='50vw' h='20vh'>
              <TuiInput label='Jerico.....:'></TuiInput>
            </Box>
          </TuiWindow>
        </VStack>
      </TuiScreenLarge>
    </>
  );
}

export default App;
