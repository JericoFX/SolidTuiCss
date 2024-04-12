import { Component, JSX, splitProps } from 'solid-js';
import { DarkBackground, LightBackground, Background } from '../types';
export const CheckBox: Component<{}> = (props: {}) => {
  const [local, others] = splitProps(props, ['checked', 'label', 'onChanged']);
  return (
    <>
      <label class='tui-checkbox'>
        {local.label}
        <input
          type='checkbox'
          onChange={local.onChanged}
          checked={local.checked}
        />
        <span></span>
      </label>
    </>
  );
};

export const FieldSetCheckBox: Component<{ children: JSX.Element }> = (props: {
  children: JSX.Element;
}) => {
  return <fieldset class='tui-input-fieldset'>{props.children}</fieldset>;
};
