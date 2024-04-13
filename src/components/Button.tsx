import { Component, JSX, splitProps } from 'solid-js';
import { cva } from 'class-variance-authority';
import { Color, MildColor, ChartColor } from '../types/colors';
import type { VariantProps } from 'class-variance-authority';

const button = cva('tui-button', {
  variants: {
    intent: {
      primary: ['green-168', 'black-text'],
      disabled: ['disabled', 'tui-button', 'gray-168-text', 'red-255'],
    },
    color: MildColor || ChartColor || Color,

    textColor: MildColor || ChartColor || Color,
  },
  compoundVariants: [
    {
      intent: 'primary',
      color: 'Black',
      textColor: 'White',
    },
    {
      intent: 'disabled',
      color: 'Black',
      textColor: 'White',
    },
  ],
  defaultVariants: {
    intent: 'primary',
    color: 'Green',
    textColor: 'White',
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
