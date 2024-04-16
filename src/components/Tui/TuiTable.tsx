import { Component } from 'solid-js';
import { cva, sva } from '../../../styled-system/css';
import { styled } from '../../../styled-system/jsx';
import { TableHoverColor, TableStrippedColor } from '../../types/colors';
// const table = sva({
//   className: 'tui-table',
//   slots: ['table', 'thead', 'tbody', 'tfoot'],
//   base: {
//     table: {
//       border: '2px solid rgb(168, 168, 168)',
//       padding: '5px',
//       borderCollapse: 'collapse',
//     },
//     tbody: {
//       backgroundColor: 'inherit',
//       color: 'white',
//       '&:tr td': {
//         borderRight: '2px solid rgb(168, 168, 168)',
//         padding: '0px 2px',
//       },
//     },
//     thead: {
//       backgroundColor: 'inherit',
//       color: 'rgb(255, 255, 0)',
//       textAlign: 'center',
//     },
//     tfoot: {
//       backgroundColor: 'inherit',
//       color: 'rgb(255, 255, 0)',
//       textAlign: 'center',
//     },
//   },
//   variants: {
//     hover: {
//       cyan: {
//         tbody: {
//           _hover: {
//             backgroundColor: 'rgb(0, 255, 255) !important',
//             color: 'black',
//           },
//         },
//       },
//     },
//   },
//   defaultVariants: {
//     hover: 'cyan',
//   },
// });
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

export const Root = styled('table', ttable);
export const Tbody = styled('tbody', tbody);
export const Thead = styled('thead', thead);
const TuiTable: Component<{}> = (props) => {
  return (
    <Root border='borderRight'>
      <Thead>
        <tr>
          <td>Name</td>
          <td>Grade</td>
          <td>Isboss</td>
        </tr>
      </Thead>
      <Tbody hover='red' stripped='white'>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </Tbody>
    </Root>
  );
};

export default TuiTable;
