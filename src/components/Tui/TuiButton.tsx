import { Component, JSX, splitProps } from 'solid-js';
import {
  button,
  type ButtonVariantProps,
} from '../../../styled-system/recipes';

type ButtonProps = ButtonVariantProps & JSX.HTMLAttributes<HTMLButtonElement>;
const TuiButton: Component<ButtonProps> = (props) => {
  const [local, _] = splitProps(props, [
    'color',
    'textColor',
    'disabled',
    'onClick',
  ]);
  return (
    <button
      onClick={local.onClick}
      class={button({
        color: local.color,
        textColor: local.textColor,
        disabled: local.disabled,
      })}
    >
      {props.children}
    </button>
  );
};

export default TuiButton;
