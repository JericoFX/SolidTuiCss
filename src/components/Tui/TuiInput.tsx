import { Component, JSX } from 'solid-js';
import { type InputVariant, input } from '../../../styled-system/recipes';

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
      <input type='text' {...props} class={recipe.input}></input>
    </>
  );
};

export default TuiInput;
