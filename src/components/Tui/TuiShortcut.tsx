import { Component, JSX } from 'solid-js';
import { shortcut, type ShortcutVariant } from '../../../styled-system/recipes';
type ShortcutProps = ShortcutVariant & {
  children: JSX.Element;
} & JSX.IntrinsicElements['span'];
const TuiShortcut: Component<ShortcutProps> = (props: ShortcutProps) => {
  return (
    <span {...props} class={shortcut()}>
      {props.children}
    </span>
  );
};

export default TuiShortcut;
