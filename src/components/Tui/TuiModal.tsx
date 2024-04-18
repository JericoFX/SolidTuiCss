import { RecipeVariantProps } from '../../../styled-system/types';
import { Component, JSX, splitProps, Show, children } from 'solid-js';
import TuiWindow from './TuiWindow';
import { HStack, VStack } from '../../../styled-system/jsx';
import { Portal } from 'solid-js/web';
import { cva } from '../../../styled-system/css';
import TuiFieldset, { FiedlSetVariants } from './TuiFieldset';
import TuiButton from './TuiButton';
import TuiDivider from './TuiDivider';

const modal = cva({
  base: {
    position: 'absolute',
    maxW: '100%',
    maxH: '100%',

    zIndex: '101',
  },
});

const overlap = cva({
  base: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 100,
    display: 'none',
  },
  variants: {
    active: {
      true: {
        display: 'block !important',
      },
    },
  },
});

const TuiModalFooter: Component<{ children: JSX.Element }> = (props) => {
  const wachin = children(() => props.children);

  return (
    <>
      <TuiDivider></TuiDivider>
      <HStack w='100%' alignContent='center' justifyContent='center'>
        {wachin()}
      </HStack>
    </>
  );
};
const TuiModalContent: Component<{ children: JSX.Element }> = (props) => {
  const Content = children(() => props.children);

  return (
    <HStack w='100%' alignContent='center' justifyContent='center'>
      {Content()}
    </HStack>
  );
};
export type ModalVariant = RecipeVariantProps<typeof modal> & {
  open?: boolean;
  backgroundColor?: string;
} & FiedlSetVariants;

const TuiModal: Component<ModalVariant> = (props) => {
  const [local, others] = splitProps(props, [
    'open',
    'backgroundColor',
    'legend',
    'full',
    'textLeft',
    'textRight',
    'dotted',
    'noLegend',
  ]);
  return (
    <VStack w='100%' h='100%' alignContent='center' justifyContent='center'>
      <Show when={local.open}>
        <div class={overlap({ active: local.open })}></div>
        <div {...others} class={modal()}>
          <TuiWindow backgroundColor='RedBlack'>
            <TuiFieldset {...local}>{props.children}</TuiFieldset>
          </TuiWindow>
        </div>
      </Show>
    </VStack>
  );
};

export { TuiModal, TuiModalFooter, TuiModalContent };
