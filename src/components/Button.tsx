import { Component, JSX, splitProps } from 'solid-js';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
const button = cva('tui-button', {
  variants: {
    intent: {
      primary: ['green-168', 'black-text'],
      disabled: ['disabled', 'tui-button', 'gray-168-text', 'red-255'],
    },
    color: {
      black168: 'black-168',
      blue168: 'blue-168',
      green168: 'green-168',
      red168: 'red-168',
      yellow168: 'yellow-168',
      gray168: 'gray-168',
      white168: 'white-168',
      black255: 'black-255',
      blue255: 'blue-255',
      green255: 'green-255',
      red255: 'red-255',
    },

    textColor: {
      black168: 'black-168-text',
      blue168: 'blue-168-text',
      green168: 'green-168-text',
      red168: 'red-168-text',
      yellow168: 'yellow-168-text',
      gray168: 'gray-168-text',
      white168: 'white-168-text',
      black255: 'black-255-text',
      blue255: 'blue-255-text',
      green255: 'green-255-text',
      red255: 'red-255-text',
    },
  },
  compoundVariants: [
    {
      intent: 'primary',
      color: 'black168',
      textColor: 'white168',
    },
    {
      intent: 'disabled',
      color: 'black168',
      textColor: 'white168',
    },
  ],
  defaultVariants: {
    intent: 'primary',
    color: 'green168',
    textColor: 'white168',
  },
});
export type ButtonProps = VariantProps<typeof button> &
  JSX.HTMLAttributes<HTMLButtonElement>;

const Button: Component<ButtonProps> = (props: ButtonProps) => {
  const [local, others] = splitProps(props, ['intent', 'color', 'textColor']);
  return (
    <button
      {...others}
      class={button({
        intent: local.intent,
        color: local.color,
        textColor: local.textColor,
      })}
    >
      {props.children}
    </button>
  );
};

export default Button;
