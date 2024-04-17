import { RecipeVariantProps, cva } from '../../../styled-system/css';
import './TuiRadio.css';
const radio = cva({
  base: {
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    color: 'white',
    paddingLeft: 30,
    userSelect: 'none',
  },
  variants: {
    disabled: {
      true: {
        color: 'rgb(168, 168, 168)',
      },
    },
  },
});
const input = cva({
  base: {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    top: 0,
    left: 0,
    pointerEvents: 'none',
  },
});
const span = cva({
  base: {
    position: 'absolute',
    width: 10,
    height: 10,
    cursor: 'pointer',
    top: 0,
    left: 0,
  },
});

import { Component, JSX } from 'solid-js';
export type RadioButton = RecipeVariantProps<typeof radio> &
  RecipeVariantProps<typeof input> &
  RecipeVariantProps<typeof span> &
  JSX.IntrinsicElements['label'] &
  JSX.IntrinsicElements['input'];
const TuiRadio: Component<RadioButton> = (props) => {
  return (
    <label class={radio({ disabled: props.disabled })}>
      Default
      <input class={input()} type='radio' name='group' />
      <span class={span()}></span>
    </label>
  );
};

export default TuiRadio;
