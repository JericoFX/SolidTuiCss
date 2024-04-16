import { cva } from '../../../styled-system/css';
import { styled } from '../../../styled-system/jsx';

const ttable = cva({
  base: {
    border: '2px solid rgb(168, 168, 168)',
    padding: '5px',
    borderCollapse: 'collapse',
    '& tr td': {
      padding: '0px 2px',
    },
  },
  variants: {
    borderRight: {
      '& tr td': {
        borderRight: '2px solid rgb(168, 168, 168)',
      },
    },
    borderBottom: {
      '& tr td': {
        borderBottom: '2px solid rgb(168, 168, 168)',
      },
    },
  },
});
const tbody = cva({
  base: {
    backgroundColor: 'inherit',
    color: 'white',
    '& tr td': {
      borderRight: '2px solid rgb(168, 168, 168)',
      padding: '0px 2px',
    },
  },
  variants: {
    hover: {
      cyan: {
        '& tr:hover': {
          backgroundColor: 'rgb(0, 255, 255) !important',
          color: 'black',
        },
      },
      green: {
        '& tr:hover': {
          backgroundColor: 'rgb(0, 255, 0) !important',
          color: 'black',
        },
      },
      blue: {
        '& tr:hover': {
          backgroundColor: 'rgb(0, 0, 255) !important',
          color: 'white',
        },
      },
      red: {
        '& tr:hover': {
          backgroundColor: 'rgb(255, 0, 0) !important',
          color: 'black',
        },
      },
      purple: {
        '& tr:hover': {
          backgroundColor: 'rgb(255, 0, 255) !important',
          color: 'black',
        },
      },
      white: {
        '& tr:hover': {
          backgroundColor: 'rgb(255, 255, 255) !important',
          color: 'black',
        },
      },
      orange: {
        '& tr:hover': {
          backgroundColor: 'rgb(255, 165, 0) !important',
          color: 'black',
        },
      },
    },
    stripped: {
      blue: {
        '& tr:nth-child(even)': {
          backgroundColor: 'rgb(0, 0, 168) !important',
        },
      },
      green: {
        '& tr:nth-child(even)': {
          backgroundColor: 'rgb(0, 168, 0) !important',
        },
      },
      cyan: {
        '& tr:nth-child(even)': {
          backgroundColor: 'rgb(0, 168, 168) !important',
        },
      },
      red: {
        '& tr:nth-child(even)': {
          backgroundColor: 'rgb(168, 0, 0) !important',
        },
      },
      purple: {
        '& tr:nth-child(even)': {
          backgroundColor: 'rgb(168, 0, 168) !important',
        },
      },
      yellow: {
        '& tr:nth-child(even)': {
          backgroundColor: 'rgb(168, 168, 0) !important',
        },
      },
      white: {
        '& tr:nth-child(even)': {
          backgroundColor: 'rgb(168, 168, 168) !important',
          color: 'black',
        },
      },
    },
  },
});
const thead = cva({
  base: {
    borderRight: '2px solid rgb(168, 168, 168)',
    padding: '0px 2px',
    backgroundColor: 'inherit',
    color: 'rgb(255, 255, 0)',
    textAlign: 'center',
  },
});
const tfoot = cva({
  base: {
    backgroundColor: 'inherit',
    color: 'rgb(255, 255, 0)',
    textAlign: 'center',
  },
});

const Root = styled('table', ttable);
const Tbody = styled('tbody', tbody);
const Thead = styled('thead', thead);
const Tfoot = styled('tfoot', tfoot);
export { Root, Tbody, Thead, Tfoot };
