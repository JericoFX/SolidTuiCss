import { Component, splitProps } from 'solid-js';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

export const Input: Component<{}> = (props) => {
  const [local, others] = splitProps(props, ['disabled', 'onChange', 'type']);
  return (
    <input
      onChange={local.onChange}
      class={`tui-input ${local.disabled ? 'disabled' : ''}`}
      disabled={local.disabled}
      type={local.type ?? 'text'}
    />
  );
};
