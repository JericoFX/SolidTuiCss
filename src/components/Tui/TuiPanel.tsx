import { css, cva, type RecipeVariantProps } from '../../../styled-system/css';
import { Component, JSX, Show, children, splitProps } from 'solid-js';
import { Portal } from 'solid-js/web';
import TuiButton from './TuiButton';
import { HStack } from '../../../styled-system/jsx';
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
    color: 'black',
  },
});

const content = cva({
  base: {
    padding: '12px',
    backgroundColor: 'inherit',
  },
  variants: {
    color: {
      Black168: { backgroundColor: 'rgb(0, 0, 0) !important' },
      Blue168: { backgroundColor: 'rgb(0, 0, 168) !important' },
      Green168: { backgroundColor: 'rgb(0, 168, 0) !important' },
      Cyan168: { backgroundColor: 'rgb(0, 168, 168) !important' },
      Red168: { backgroundColor: 'rgb(168, 0, 0) !important' },
      Purple168: { backgroundColor: 'rgb(168, 0, 168) !important' },
      Yellow168: { backgroundColor: 'rgb(168, 168, 0) !important' },
      White168: { backgroundColor: 'rgb(168, 168, 168) !important' },
      Orange168: { backgroundColor: 'rgb(168, 86, 0) !important' },
    },
  },
  defaultVariants: {
    color: 'White168',
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
  onClick?: () => void;
};

const TuiPanel: Component<tpanel> = (props) => {
  const [local, _] = splitProps(props, 'open');

  return (
    <Show when={local.open && props.children}>
      <div class={panel()}>{props.children}</div>;
    </Show>
  );
};

const TuiHeader: Component<theader> = (props) => {
  return (
    <>
      <div class={header()}>{props.children}</div>
    </>
  );
};

const TuiContent: Component<tcontent> = (props) => {
  const [local, _] = splitProps(props, 'onClick', 'color');
  return (
    <div class={content({ color: local.color })}>
      {props.children}
      <br />
      <br></br>
      <HStack w='100%' alignContent='center' justifyContent='center'>
        <TuiButton
          onClick={local.onClick}
          color='White255'
          text='Close'
        ></TuiButton>
      </HStack>
    </div>
  );
};

export { TuiPanel, TuiHeader, TuiContent };
