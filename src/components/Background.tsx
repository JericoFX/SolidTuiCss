import { Component, JSX, splitProps } from 'solid-js';
import { cva } from 'class-variance-authority';
import { DarkBackground, LightBackground } from '../types/colors';
import type { VariantProps } from 'class-variance-authority';
const background = cva('tui-background', {
  variants: {
    backgroundColor: LightBackground || DarkBackground,
  },
  defaultVariants: {
    backgroundColor: 'Blue',
  },
});
export type BackgroundProps = VariantProps<typeof background>;

const Background: Component<BackgroundProps> = (props: BackgroundProps) => {
  const [local, others] = splitProps(props, ['backgroundColor']);
  return (
    <div class={background({ backgroundColor: local.backgroundColor })}></div>
  );
};

export default Background;
