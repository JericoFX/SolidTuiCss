import { Component, JSX, splitProps } from 'solid-js';
import {
  dropdown,
  type DropdownVariantProps,
} from '../../../styled-system/recipes';
import TuiButton, { ButtonProps } from './TuiButton';

type TuiOption = DropdownVariantProps &
  JSX.IntrinsicElements['a'] &
  JSX.IntrinsicElements['div'] &
  ButtonProps;

export const TuiOption: Component<TuiOption> = (props) => {
  return (
    <li class='tui-dropdown-selector'>
      <a {...props}>{props.children}</a>
    </li>
  );
};

export const TuiDropdown: Component<TuiOption> = (props) => {
  const r = dropdown();
  return (
    <li class={r.dropdown}>
      <span>Drop</span>
      <div {...props} class={r.content}>
        <ul>{props.children}</ul>
      </div>
    </li>
  );
};
