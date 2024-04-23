import { Component, JSX } from 'solid-js';
import {
  dropdown,
  type DropdownVariantProps,
} from '../../../styled-system/recipes';
import TuiShortcut from './TuiShortcut';

type TuiOption = DropdownVariantProps &
  JSX.IntrinsicElements['a'] &
  JSX.IntrinsicElements['div'] &
  JSX.IntrinsicElements['span'] & {
    shortcut?: string;
  };

export const TuiTitle: Component<TuiOption> = (props) => {
  const r = dropdown();
  return (
    <li class={r.dropdown}>
      <span>{props.title}</span>
      {props.children}
    </li>
  );
};

export const TuiOption: Component<TuiOption> = (props) => {
  return (
    <li class='tui-dropdown-selector'>
      <TuiShortcut>{props.shortcut}</TuiShortcut>
      <a {...props}>{props.children}</a>
    </li>
  );
};

export const TuiDropdown: Component<TuiOption> = (props) => {
  const r = dropdown();
  return (
    <div {...props} class={r.content}>
      <ul>{props.children}</ul>
    </div>
  );
};
