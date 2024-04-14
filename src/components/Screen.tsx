import { Component, JSX, splitProps } from 'solid-js';
import { cva } from 'class-variance-authority';
import { DarkBackground, LightBackground, Background } from '../types/colors';
import type { VariantProps } from 'class-variance-authority';
const screen = cva('tui-fieldset', {
  variants: {
    size: {
      sm: 'tui-screen-640-480',
      md: 'tui-screen-800-600',
      lg: 'tui-screen-1024-768',
    },
    border: {
      true: 'bordered',
    },
    center: {
      true: 'centered',
    },
    backgroundColor: Background || LightBackground || DarkBackground,
  },
  defaultVariants: {
    size: 'md',
    border: true,
    center: true,
    backgroundColor: 'BlueBlack',
  },
});
export type Screen = VariantProps<typeof screen>;

const Screen: Component<Screen> = (props: Screen) => {
  const [local, others] = splitProps(props, [
    'size',
    'border',
    'center',
    'backgroundColor',
  ]);
  return (
    <>
      <div
        class={screen({
          size: local.size,
          border: local.border,
          center: local.center,
          backgroundColor: local.backgroundColor,
        })}
      >
        {props.children}
      </div>
    </>
  );
};

export default Screen;
