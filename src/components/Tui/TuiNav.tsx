import { css, cva, type RecipeVariantProps } from '../../../styled-system/css';
import { Component, JSX, Show, splitProps } from 'solid-js';

const nav = cva({
  width: '100%',
  backgroundColor: 'rgb(168, 168, 168)',
  padding: '0px 2px',
  zIndex: 9,
  display: 'block',
  position: 'fixed',
  '& ul li': {
    display: 'inline-block',
    marginLeft: '10px',
    padding: '1px 3px',
  },
  '& ul li a': {
    display: 'block',
    userSelect: 'none',
  },
  '& ul li:hover': { backgroundColor: 'rgb(0, 168, 0)' },
});

export type Navbar = RecipeVariantProps<typeof nav> & {
  children?: JSX.Element;
};
const TuiNav: Component<Navbar> = (props) => {
  return (
    <nav class={nav()}>
      <ul>{props.children}</ul>
    </nav>
  );
};

export default TuiNav;
