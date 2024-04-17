import { cva } from '../../../styled-system/css/cva';
import { RecipeVariantProps } from '../../../styled-system/types';
import { Component, JSX, splitProps, Show } from 'solid-js';

const modal = cva({
  base: {
    position: 'absolute',
    left: '0px',
    right: '0px',
    top: '100px',
    zIndex: 101,
  },
});

const overlap = cva({
  base: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    zIndex: 100,
    display: 'none',
  },
});

export type ModalVariant = RecipeVariantProps<typeof modal> & {
  children?: JSX.Element;
  open?: boolean;
} & WindowVariant;

const TuiModal: Component<ModalVariant> = (props) => {
  const [local, _] = splitProps(props, ['open', 'backgroundColor']);
  return (
    <>
      <Show when={local.open}>
        <Portal>
          <div class={overlap()}></div>
          <div class={modal()}>
            <TuiWindow backgroundColor={local.backgroundColor}>
              {props.children}
            </TuiWindow>
          </div>
        </Portal>
      </Show>
    </>
  );
};

export default TuiModal;
