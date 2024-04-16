import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
const tbutton = cva({
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
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    _active: {
      backgroundColor: 'rgb(0, 168, 168) !important',
      color: 'black !important',
      boxShadow: 'none !important',
    },
    _focus: {
      color: 'rgb(0, 255, 255) !important',
    },
  },
  variants: {
    disabled: {
      true: {
        textDecoration: 'line-through',
      },
    },
  },
});

import { Component } from 'solid-js';
export type ButtonVariants = RecipeVariantProps<typeof tbutton> & {
  text?: string;
  children?: JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
};
const TuiButton: Component<> = (props) => {
  const [local, other] = splitProps(props, ['text', 'disabled', 'onClick']);
  return (
    <button
      onClick={local.onClick}
      class={tbutton({ disabled: local.disabled })}
    >
      {local.text}
    </button>
  );
};

export default TuiButton;
