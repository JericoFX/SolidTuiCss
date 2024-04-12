import { Component, JSX, splitProps } from 'solid-js';
import { cva } from 'class-variance-authority';
import { DarkBackground, LightBackground, Background } from '../types';
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
  },
  defaultVariants: {
    size: md,
    border: true,
    center: true,
  },
});
export type Screen = VariantProps<typeof screen> &
  JSX.HTMLAttributes<HTMLAttributes>;

const Screen: Component<Screen> = (props: Screen) => {
  const [local, others] = splitProps(props, ['size', 'border', 'center']);
  return (
    <>
      <div
        class={screen({
          size: local.size,
          border: local.border,
          center: local.center,
        })}
      >
        {props.chilren}
      </div>
    </>
  );
};

export default Screen;
