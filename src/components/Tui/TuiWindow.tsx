import { cva } from '../../../styled-system/css';
import { styled } from '../../../styled-system/jsx';
const window = cva({
  base: {
    backgroundColor: 'rgb(0, 0, 168)',
    padding: 1,
    display: 'inline-block',
    position: 'relative',
    boxShadow: '10px 10px black',
    color: 'white',
  },
});

export const TuiWindow = styled('div', window);
