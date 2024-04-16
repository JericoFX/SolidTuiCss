import { createSignal } from 'solid-js';
import { cva } from '../styled-system/css';
import { styled } from '../styled-system/jsx';
import { TuiScreenLarge } from './components/Tui/TuiScreen';
import TuiFieldset from './components/Tui/TuiFieldset';

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
  const [count, setCount] = createSignal(0);

  return (
    <>
      <TuiScreenLarge bordered={true} backgroundColor='OrangeBlack' centered>
        <TuiFieldset full legend='Jerico'></TuiFieldset>
      </TuiScreenLarge>
    </>
  );
}

export default App;
