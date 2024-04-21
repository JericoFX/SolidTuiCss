import { Component, JSX, Show, children, splitProps } from 'solid-js';
import {
  ButtonVariant,
  panel,
  type PanelVariantProps,
} from '../../../styled-system/recipes';
import { HStack } from '../../../styled-system/jsx';
import TuiButton from './TuiButton';
import { TuiDivider } from './TuiDivider';

type panel = PanelVariantProps & {
  children?: JSX.Element;
  open?: boolean;
} & JSX.IntrinsicElements['div'] &
  JSX.IntrinsicElements['header'] &
  ButtonVariant;

const TuiPanel: Component<panel> = (props) => {
  const r = panel({ ...props });
  return (
    <Show when={props.open && props.children}>
      <div class={r.panel}>{props.children}</div>
    </Show>
  );
};

const TuiHeader: Component<panel> = (props) => {
  const r = panel();
  return (
    <>
      <div class={r.header}>{props.children}</div>
    </>
  );
};

const TuiContent: Component<panel> = (props) => {
  const r = panel();
  return (
    <div class={r.content}>
      {props.children}
      <TuiDivider></TuiDivider>
      <HStack w='100%' pt='1' alignContent='center' justifyContent='center'>
        <TuiButton onClick={props.onClick}>Ok</TuiButton>
      </HStack>
    </div>
  );
};

export { TuiPanel, TuiHeader, TuiContent };
