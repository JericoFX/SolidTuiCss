import { createEffect, createSignal } from 'solid-js';
import { cva } from '../styled-system/css';
import { HStack, VStack, styled } from '../styled-system/jsx';
import { TuiScreenLarge } from './components/Tui/TuiScreen';
import TuiFieldset from './components/Tui/TuiFieldset';
import TuiInput from './components/Tui/TuiInput';
import { TuiWindow } from './components/Tui/TuiWindow';
import TuiRadio from './components/Tui/TuiRadio';

const buttons = cva({
  className: 'tui-button',
  base: {
    display: 'inline-block',
    outline: '0',
    padding: '1px 10px',
    backgroundColor: 'rgb(0, 168, 0)',
    color: 'black',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: '10px 10px black',
    borderRadius: '0px',
    userSelect: 'none',
    _disabled: {
      textDecoration: 'line-through',
    },
    _active: {
      backgroundColor: 'rgb(0, 168, 168) !important',
      color: 'black !important',
      boxShadow: 'none !important',
    },
    _focus: {
      color: 'rgb(0, 255, 255) !important',
    },
  },
  'input[type=button]': { width: 'initial' },
  variants: {
    backgroundColor: {
      'black-168': {
        backgroundColor: 'rgb(0, 0, 0) !important',
        _hover: {
          backgroundColor: 'rgb(0, 0, 0) !important',
        },
      },
      'blue-168': {
        backgroundColor: 'rgb(0, 0, 168) !important',
        _hover: {
          backgroundColor: 'rgb(0, 0, 168) !important',
        },
      },
      'green-168': {
        backgroundColor: 'rgb(0, 168, 0) !important',
        _hover: {
          backgroundColor: 'rgb(0, 168, 0) !important',
        },
      },
      'cyan-168': {
        backgroundColor: 'rgb(0, 168, 168) !important',
        _hover: {
          backgroundColor: 'rgb(0, 168, 168) !important',
        },
      },
      'red-168': {
        backgroundColor: 'rgb(168, 0, 0) !important',
        _hover: {
          backgroundColor: 'rgb(168, 0, 0) !important',
        },
      },
      'purple-168': {
        backgroundColor: 'rgb(168, 0, 168) !important',
        _hover: {
          backgroundColor: 'rgb(168, 0, 168) !important',
        },
      },
      'yellow-168': {
        backgroundColor: 'rgb(168, 168, 0) !important',
        _hover: {
          backgroundColor: 'rgb(168, 168, 0) !important',
        },
      },
      'white-168': {
        backgroundColor: 'rgb(168, 168, 168) !important',
        _hover: {
          backgroundColor: 'rgb(168, 168, 168) !important',
        },
      },
      'orange-168': {
        backgroundColor: 'rgb(168, 86, 0) !important',
        _hover: {
          backgroundColor: 'rgb(168, 86, 0) !important',
        },
      },
    },
    disabled: {
      true: {
        textDecoration: 'line-through',
        backgroundColor: "'rgb(168, 168, 168) !important'",
        cursor: 'not-allowed !important',

        _hover: {
          backgroundColor: "'rgb(168, 168, 168) !important'",
        },
        _active: {
          backgroundColor: "'rgb(168, 168, 168) !important'",
        },
        color: 'rgb(0, 0, 0) !important',
      },
    },
    textColor: {
      'black-168': {
        color: 'rgb(0, 0, 0) !important',
      },
      'blue-168': {
        color: 'rgb(0, 0, 168) !important',
      },
      'green-168': {
        color: 'rgb(0, 168, 0) !important',
      },
      'cyan-168': {
        color: 'rgb(0, 168, 168) !important',
      },
      'red-168': {
        color: 'rgb(168, 0, 0) !important',
      },
      'purple-168': {
        color: 'rgb(168, 0, 168) !important',
      },
      'yellow-168': {
        color: 'rgb(168, 168, 0) !important',
      },
      'white-168': {
        color: 'rgb(168, 168, 168) !important',
      },
      'orange-168': {
        color: 'rgb(168, 86, 0) !important',
      },
    },
    borders: {
      sm: {
        roundedBorder: '1px',
      },
      md: {
        roundedBorder: '2px',
      },
      lg: {
        roundedBorder: '3px',
      },
    },
  },
  defaultVariants: {
    backgroundColor: 'green-168',
    textColor: 'black-168',
    borders: 'sm',
  },
});
const Button = styled('button', buttons);
function App() {
  const [count, setCount] = createSignal('');
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
          <TuiFieldset>
            <TuiInput hasLabel type='text' text='Name'></TuiInput>
            <br></br>
            <TuiInput hasLabel text='Grade'></TuiInput>
            <br></br>
            <TuiInput hasLabel text='IsBoss'></TuiInput>
            <TuiWindow>
              <TuiFieldset legend='Jerico'>
                <TuiRadio
                  label='jerico1'
                  onChange={(e) => console.log(e.target.value)}
                  value='jerico1'
                ></TuiRadio>
                <TuiRadio
                  checked
                  label='jerico2'
                  onChange={(e) => console.log(e.target.value)}
                  value='jerico2'
                ></TuiRadio>
                <TuiRadio
                  label='jerico3'
                  onChange={(e) => console.log(e.target.value)}
                  value='jerico3'
                ></TuiRadio>
                <TuiRadio
                  label='jerico4'
                  onChange={(e) => console.log(e.target.value)}
                  value='jerico4'
                ></TuiRadio>
                <TuiRadio
                  label='jerico5'
                  onChange={(e) => console.log(e.target.value)}
                  value='jerico5'
                ></TuiRadio>
              </TuiFieldset>
            </TuiWindow>
          </TuiFieldset>
        </VStack>
      </TuiScreenLarge>
    </>
  );
}

export default App;
