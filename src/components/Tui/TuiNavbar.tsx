import { cva } from '../../../styled-system/css/cva';
import { RecipeVariantProps } from '../../../styled-system/types';
import { Component, JSX, splitProps } from 'solid-js';

const nav = cva({
  base: {
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
  },
});

type NavbarTypes = RecipeVariantProps<typeof nav> & {
  children?: JSX.Element;
};

const TuiNavbar: Component<NavbarTypes> = (props) => {
  return (
    <nav class={nav()}>
      <ul>{props.children}</ul>
    </nav>
  );
};

export default TuiNavbar;
