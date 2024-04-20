import { textArea, type TextAreaVariant } from '../../../styled-system/recipes';
import { Component, JSX } from 'solid-js';

type TextArea = TextAreaVariant & {
  children?: JSX.Element;
  disabled?: boolean;
  onChange?: (e: Event) => void;
} & JSX.IntrinsicElements['textarea'];

const TuiTextArea: Component<TextArea> = (props: TextArea) => {
  return (
    <textarea
      {...props}
      class={textArea({ disabled: props.disabled })}
    ></textarea>
  );
};

export default TuiTextArea;
