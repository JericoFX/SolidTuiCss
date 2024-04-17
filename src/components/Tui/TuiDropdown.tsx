import { css, cva, type RecipeVariantProps } from '../../../styled-system/css';
import { Component, JSX, Show, createMemo, splitProps } from 'solid-js';

const tdropdown = cva({
  base: {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    userSelect: 'none',
    '&:hover > div:first-of-type': {
      display: 'block',
    },
  },
});
const tcontent = cva({
  base: {
    display: 'none',
    position: 'absolute',
    backgroundColor: 'rgb(168, 168, 168)',
    minWidth: '200px',
    padding: '6px',
    zIndex: 9,
    '& ul': {
      border: '2px black solid',
    },
    '& ul li': {
      display: 'block !important',
      margin: '6px',
    },
    '& ul li a:hover': {
      backgroundColor: 'rgb(0, 168, 0)',
    },
  },
});
export type TuiOption = JSX.IntrinsicElements['a'];

export const TuiOption: Component<TuiOption> = (props) => {
  const [local, others] = splitProps(props, ['href', 'label']);
  return (
    <li>
      <a href={local.hred}>{local.label}</a>
    </li>
  );
};

export type Dropdown = RecipeVariantProps<typeof tdropdown> &
  JSX.IntrinsicElements['div'] &
  RecipeVariantProps<typeof tcontent> & {
    children?: JSX.Element;
  };

export const TuiDropdown: Component<RecipeVariantProps> = (props) => {
  return (
    <li class={tdropdown()}>
      <TuiButton></TuiButton>
      <div class={tcontent()}>
        <ul>{props.children}</ul>
      </div>
    </li>
  );
};
