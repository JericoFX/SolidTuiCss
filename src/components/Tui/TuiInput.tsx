import { input, type InputVariant } from '../../../styled-system/recipes';
import { Component, JSX, Show, splitProps } from 'solid-js';
type TuiInputProps = JSX.IntrinsicElements['input'] & {
  size?: InputVariant['size'];
  disabled?: InputVariant['disabled'];
  textColor?: InputVariant['textColor'];
  label?: string;
};
const TuiInput: Component<TuiInputProps> = (props: TuiInputProps) => {
  const recipe = input({
    size: props.size,
    disabled: props.disabled,
    textColor: props.textColor,
  });

  return (
    <>
      <label class={recipe.label}>{props.label}</label>
      <input {...props} class={recipe.input}></input>
    </>
  );
};

export default TuiInput;
