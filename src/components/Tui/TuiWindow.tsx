import { Component, JSX, splitProps } from 'solid-js';
import { WindowsVariantProps, windows } from '../../../styled-system/recipes';

export type WindowVariant = WindowsVariantProps & {
  children?: JSX.Element;
} & JSX.IntrinsicElements['div'];

const TuiWindow: Component<WindowVariant> = (props) => {
  const [local, others] = splitProps(props, ['backgroundColor', 'sizes']);

  return (
    <div
      class={windows({
        backgroundColor: local.backgroundColor,
        sizes: local.sizes,
      })}
    >
      {props.children}
    </div>
  );
};

export default TuiWindow;

//export const TuiWindow = styled('div', window);
