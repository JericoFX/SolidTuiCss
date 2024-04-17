import { cva } from '../../../styled-system/css/cva';
import { RecipeVariantProps } from '../../../styled-system/types';

import { Component, JSX, splitProps } from 'solid-js';
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
    color: {
      Black168: { backgroundColor: 'rgb(0, 0, 0) !important' },
      Blue168: { backgroundColor: 'rgb(0, 0, 168) !important' },
      Green168: { backgroundColor: 'rgb(0, 168, 0) !important' },
      Cyan168: { backgroundColor: 'rgb(0, 168, 168) !important' },
      Red168: { backgroundColor: 'rgb(168, 0, 0) !important' },
      Purple168: { backgroundColor: 'rgb(168, 0, 168) !important' },
      Yellow168: { backgroundColor: 'rgb(168, 168, 0) !important' },
      White168: { backgroundColor: 'rgb(168, 168, 168) !important' },
      Orange168: { backgroundColor: 'rgb(168, 86, 0) !important' },
    },
    textColor: {
      Black168Text: { color: 'rgb(0, 0, 0) !important' },
      Blue168Text: { color: 'rgb(0, 0, 168) !important' },
      Green168Text: { color: 'rgb(0, 168, 0) !important' },
      Cyan168Text: { color: 'rgb(0, 168, 168) !important' },
      Red168Text: { color: 'rgb(168, 0, 0) !important' },
      Purple168Text: { color: 'rgb(168, 0, 168) !important' },
      Yellow168Text: { color: 'rgb(168, 168, 0) !important' },
      White168Text: { color: 'rgb(168, 168, 168) !important' },
      Orange168Text: { color: 'rgb(168, 86, 0) !important' },
    },
  },
  defaultVariants: {
    color: 'Green168',
    textColor: 'Black168Text',
  },
});

export type ButtonVariants = RecipeVariantProps<typeof tbutton> & {
  text?: string;
  children?: JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
} & JSX.IntrinsicElements['button'];

const TuiButton: Component<ButtonVariants> = (props) => {
  const [local, other] = splitProps(props, [
    'text',
    'disabled',
    'onClick',
    'color',
    'textColor',
  ]);
  return (
    <button
      onClick={local.onClick}
      class={tbutton({
        disabled: local.disabled,
        color: local.color,
        textColor: local.textColor,
      })}
    >
      {local.text}
    </button>
  );
};

export default TuiButton;
