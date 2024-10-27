import { Component, JSX } from 'solid-js';
import { checkbox, type CheckboxVariant } from '../../../styled-system/recipes';
type R = CheckboxVariant &
  JSX.IntrinsicElements['label'] &
  JSX.IntrinsicElements['input'] &
  JSX.IntrinsicElements['span'] & {
    label: string;
    checked?: boolean;
    disabled?: boolean;
  };
const TuiCheckbox: Component<R> = (props: R) => {
  const r = checkbox({ ...props });
  console.log({ ...props });
  return (
    <>
      <label class={r.base}>
        <input disabled={props.disabled} type='checkbox' class={r.input} />
        <span class={r.span}>{props.label}</span>
      </label>
    </>
  );
};

export default TuiCheckbox;
