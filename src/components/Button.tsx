import { Component, JSX, splitProps } from 'solid-js';
import { cva } from 'class-variance-authority';
import {
  Color,
  MildColor,
  ChartColor,
  DarkBackground,
  LightBackground,
  Background,
  Position,
  TableRowColor,
  ScreenSize,
} from '../types';
import type { VariantProps } from 'class-variance-authority';
const button = cva('tui-button', {
  variants: {
    intent: {
      primary: ['green-168', 'black-text'],
      disabled: ['disabled', 'tui-button', 'gray-168-text', 'red-255'],
    },
    color: MidColor | ChartColor | Color,

    textColor: MidColor | ChartColor | Color,
  },
  compoundVariants: [
    {
      intent: 'primary',
      color: 'black168',
      textColor: 'white168',
    },
    {
      intent: 'disabled',
      color: Color.Black,
      textColor: Color.White,
    },
  ],
  defaultVariants: {
    intent: 'primary',
    color: Color.Green,
    textColor: Color.White,
  },
});
export type ButtonProps = VariantProps<typeof button> &
  JSX.HTMLAttributes<HTMLButtonElement>;

const Button: Component<ButtonProps> = (props: ButtonProps) => {
  const [local, others] = splitProps(props, [
    'intent',
    'color',
    'textColor',
    'onClick',
  ]);
  return (
    <button
      onClick={local.onClick}
      {...others}
      class={button({
        intent: local.intent,
        color: local.color,
        textColor: `${local.textColor}-text`,
      })}
    >
      {props.children}
    </button>
  );
};

export default Button;
