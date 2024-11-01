import { Box, VStack } from '../styled-system/jsx';
import { TuiScreenLarge } from './components/Tui/TuiScreen';
import TuiWindow from './components/Tui/TuiWindow';
import TuiInput from './components/Tui/TuiInput';
import { TabsTab, TabsRoot, TabsContent } from './components/Tui/TuiTabs';
import TuiNav from './components/Tui/TuiNav';
import { TuiDropdown, TuiOption, TuiTitle } from './components/Tui/TuiDropdown';

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
        <TuiNav hoverColor={'Orange168'}>
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
        <VStack
          w='100%'
          h='100%'
          alignContent='center'
          justifyContent='center'
          gap={2}
        >
          <TuiWindow
            shadow='Shadow1'
            w='full'
            h='full'
            backgroundColor='OrangeBlack'
            sizes='large'
          >
            <TabsRoot backgroundColor='Blue168'>
              <TabsTab id='tab-1'>Tab 1</TabsTab>
              <TabsTab id='tab-2'>Tab 2</TabsTab>
              <TabsTab id='tab-3'>Tab 3</TabsTab>
              <TabsContent id='tab-1'>
                {' '}
                <TuiWindow
                  shadow='none'
                  p='1'
                  w='full'
                  backgroundColor='CyanBlack'
                  sizes='small'
                >
                  <TuiInput label='Wachin' size='sm'></TuiInput>
                </TuiWindow>
              </TabsContent>
              <TabsContent id='tab-2'>Tab2</TabsContent>
              <TabsContent id='tab-3'>Tab3</TabsContent>
            </TabsRoot>
          </TuiWindow>
        </VStack>
      </TuiScreenLarge>
    </>
  );
}

export default App;
