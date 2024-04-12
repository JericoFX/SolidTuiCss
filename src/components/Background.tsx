import { Component, JSX, splitProps } from 'solid-js';
import { cva } from 'class-variance-authority';
import { DarkBackground, LightBackground, Background } from '../types';
import type { VariantProps } from 'class-variance-authority';
const background = cva('tui-background', {
  variants: {
    color: DarkBackground | LightBackground | Background,
  },
});
export type Background = VariantProps<typeof background> &
  JSX.HTMLAttributes<HTMLAttributes>;

const Background: Component<Background> = (props: Background) => {
  const [local, others] = splitProps(props, ['color']);
  return <div class={local.color}></div>;
};

export default Background;
