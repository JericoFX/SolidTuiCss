import { Component } from 'solid-js';
import { sva } from '../../../styled-system/css';
const checkbos = sva({
  className: 'tui-checkbox',
  slots: ['label', 'input', 'span'],
  base: {
    label: {
      display: 'block',
      position: 'relative',
      cursor: 'pointer',
      color: 'white',
      paddingLeft: '30px',
      userSelect: 'none',
      _disabled: {
        color: 'rgb(168, 168, 168)',
      },
    },
    input: {
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',
      top: '0px',
      left: '0px',
      pointerEvents: 'none',
      '&:checked ~ span::after': {
        content: '"[√]"',
        color: 'rgb(0, 255, 255)',
      },
      '&:not(checked) ~ span::after': { content: '"[]"' },
    },
    span: {
      position: 'absolute',
      width: '10px',
      height: '10px',
      cursor: 'pointer',
      top: '0px',
      left: '0px',
    },
  },
  defaultVariants: {
    backgroundColor: 'green-168',
    textColor: 'black-168',
  },
});
const TuiCheckbox: Component<{}> = (props) => {
  const checkbox = checkbos(props);
  return (
    <label class={checkbox.label}>
      Default
      <input class={checkbox.input} type='checkbox' />
      <span class={checkbox.span}></span>
    </label>
  );
};

export default TuiCheckbox;
