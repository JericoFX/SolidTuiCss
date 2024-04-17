import { css, cva, type RecipeVariantProps } from '../../../styled-system/css';
import { Component, JSX, Show, splitProps } from 'solid-js';
import { Portal } from 'solid-js/web';
const panel = cva({
  base: {
    backgroundColor: 'rgb(0, 0, 168)',
    display: 'inline-block',
    color: 'white',
    boxShadow: '10px 10px black',
  },
});

const header = cva({
  base: {
    paddingTop: '2px',
    display: 'block',
    background: 'white',
    textAlign: 'center',
  },
});

const content = cva({
  base: {
    padding: '12px',
  },
});

type tpanel = RecipeVariantProps<typeof panel> & {
  children?: JSX.Element;
  open?: boolean;
};

type theader = RecipeVariantProps<typeof header> & {
  children?: JSX.Element;
};

type tcontent = RecipeVariantProps<typeof content> & {
  children?: JSX.Element;
};

const TuiPanel: Component<tpanel> = (props) => {
  const [local, _] = splitProps(props, 'open');

  return (
    <Show when={local.open && props.children}>
      <Portal>
        <div class={panel()}>{props.children}</div>;
      </Portal>
    </Show>
  );
};

const TuiHeader: Component<theader> = (props) => {
  return <div class={header()}>{props.children}</div>;
};

const TuiContent: Component<tcontent> = (props) => {
  return <div class={content()}>{props.children}</div>;
};

export { TuiPanel, TuiHeader, TuiContent };
